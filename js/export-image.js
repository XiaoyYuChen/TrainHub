/**
 * 仅导出 #print-area 表格区域为 PNG
 * 按页面自然版式截图（与屏幕所见一致），二维码手动画入并复位 transform
 */
window.ExportSheetImage = (function () {
  var HTML2CANVAS_SRC =
    "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js";
  var EXPORT_SCALE = 2;

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      if (window.html2canvas) {
        resolve();
        return;
      }
      var s = document.createElement("script");
      s.src = src;
      s.async = true;
      s.onload = function () {
        resolve();
      };
      s.onerror = function () {
        reject(new Error("图片导出库加载失败，请检查网络后重试"));
      };
      document.head.appendChild(s);
    });
  }

  function safeName(text) {
    return String(text || "未命名")
      .replace(/[\\/:*?"<>|]+/g, "_")
      .replace(/\s+/g, "")
      .slice(0, 40);
  }

  function loadImage(src) {
    return new Promise(function (resolve, reject) {
      if (!src) {
        reject(new Error("empty image src"));
        return;
      }
      var img = new Image();
      img.onload = function () {
        resolve(img);
      };
      img.onerror = function () {
        reject(new Error("image load failed"));
      };
      img.src = src;
    });
  }

  function waitImage(img) {
    return new Promise(function (resolve) {
      if (!img) return resolve();
      if (img.complete && img.naturalWidth > 0) return resolve();
      var done = function () {
        resolve();
      };
      img.addEventListener("load", done, { once: true });
      img.addEventListener("error", done, { once: true });
      setTimeout(done, 5000);
    });
  }

  function resolveQrDataUrl(img) {
    var map = window.COACH_QR_DATA_URLS || {};
    var coachId = (img && img.getAttribute("data-coach-id")) || "";
    if (coachId && map[coachId]) return map[coachId];
    var src = (img && (img.currentSrc || img.getAttribute("src"))) || "";
    if (src.indexOf("data:") === 0) return src;
    var keys = Object.keys(map);
    if (keys.length === 1) return map[keys[0]];
    return "";
  }

  function relativeBox(el, root) {
    var er = el.getBoundingClientRect();
    var rr = root.getBoundingClientRect();
    return {
      x: er.left - rr.left,
      y: er.top - rr.top,
      w: er.width,
      h: er.height
    };
  }

  function drawContain(ctx, image, x, y, w, h) {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(x, y, w, h);
    if (!image || !image.width || !image.height || w <= 0 || h <= 0) return;
    var scale = Math.min(w / image.width, h / image.height);
    var dw = image.width * scale;
    var dh = image.height * scale;
    ctx.drawImage(image, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh);
  }

  function collectQrTargets(root) {
    return Array.prototype.slice
      .call(root.querySelectorAll("img.coach-qr-img"))
      .map(function (img) {
        return {
          dataUrl: resolveQrDataUrl(img),
          box: relativeBox(img, root)
        };
      })
      .filter(function (t) {
        return t.dataUrl && t.box.w > 0 && t.box.h > 0;
      });
  }

  function paintQrTargets(canvas, targets, scale) {
    if (!targets.length) return Promise.resolve(canvas);
    var ctx = canvas.getContext("2d");
    // html2canvas 会在 context 上留下 scale/translate，必须先复位
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    return Promise.all(
      targets.map(function (t) {
        return loadImage(t.dataUrl).then(function (image) {
          var x = Math.round(t.box.x * scale);
          var y = Math.round(t.box.y * scale);
          var w = Math.round(t.box.w * scale);
          var h = Math.round(t.box.h * scale);
          if (x + w > canvas.width) x = Math.max(0, canvas.width - w);
          if (y + h > canvas.height) y = Math.max(0, canvas.height - h);
          if (x < 0) x = 0;
          if (y < 0) y = 0;
          drawContain(ctx, image, x, y, w, h);
        });
      })
    ).then(function () {
      return canvas;
    });
  }

  /** 显示内嵌二维码，供占位与坐标采集 */
  function ensureQrDataUrls(root) {
    var imgs = Array.prototype.slice.call(
      root.querySelectorAll("img.coach-qr-img")
    );
    return Promise.all(
      imgs.map(function (img) {
        var dataUrl = resolveQrDataUrl(img);
        if (!dataUrl) return Promise.resolve();
        if (!img.getAttribute("data-orig-src")) {
          img.setAttribute("data-orig-src", img.getAttribute("src") || "");
        }
        if (img.getAttribute("src") !== dataUrl) {
          img.src = dataUrl;
        }
        img.style.visibility = "visible";
        img.style.opacity = "1";
        img.style.display = "inline-block";
        return waitImage(img);
      })
    );
  }

  function formatFieldValue(el) {
    if (!el) return "";
    if (el.tagName === "SELECT") {
      var opt = el.options[el.selectedIndex];
      return opt ? opt.text : "";
    }
    return el.value || "";
  }

  function prepareSheet(root) {
    var restored = [];

    root.querySelectorAll("input, select, textarea").forEach(function (el) {
      if (el.type === "radio" || el.type === "checkbox") return;

      var text = formatFieldValue(el);
      if (el.id === "timeStart") {
        var end = root.querySelector("#timeEnd");
        var endVal = end ? end.value : "";
        text = (el.value || "") + (endVal ? " 至 " + endVal : "");
      }
      if (el.id === "timeEnd") {
        el.style.display = "none";
        restored.push({ el: el, display: "" });
        var sep = el.parentNode && el.parentNode.querySelector(".sep");
        if (sep) {
          restored.push({ el: sep, display: sep.style.display });
          sep.style.display = "none";
        }
        return;
      }

      if (el.id === "coachId") {
        el.style.display = "none";
        restored.push({ el: el, display: "" });
        return;
      }

      var span = document.createElement("span");
      span.className = "print-plain-value";
      span.textContent = text || "　";
      el.style.display = "none";
      el.parentNode.insertBefore(span, el.nextSibling);
      restored.push({ el: el, display: "", span: span });
    });

    root
      .querySelectorAll(".student-picker-toggle, .student-picker-list")
      .forEach(function (node) {
        restored.push({ el: node, display: node.style.display });
        node.style.display = "none";
      });

    return restored;
  }

  function restoreSheet(restored) {
    (restored || []).forEach(function (item) {
      if (item.span && item.span.parentNode) {
        item.span.parentNode.removeChild(item.span);
      }
      if (item.el) item.el.style.display = item.display || "";
    });
    document.querySelectorAll("img.coach-qr-img[data-orig-src]").forEach(function (img) {
      var orig = img.getAttribute("data-orig-src");
      if (orig && orig.indexOf("data:") !== 0) img.src = orig;
      img.removeAttribute("data-orig-src");
    });
  }

  function downloadCanvas(canvas, filename) {
    function trigger(href) {
      var a = document.createElement("a");
      a.download = filename || "训练表.png";
      a.href = href;
      document.body.appendChild(a);
      a.click();
      a.remove();
    }

    return new Promise(function (resolve, reject) {
      try {
        canvas.toBlob(function (blob) {
          if (!blob) {
            try {
              trigger(canvas.toDataURL("image/png"));
              resolve();
            } catch (e) {
              reject(e);
            }
            return;
          }
          var url = URL.createObjectURL(blob);
          trigger(url);
          setTimeout(function () {
            URL.revokeObjectURL(url);
          }, 1500);
          resolve();
        }, "image/png");
      } catch (e) {
        try {
          trigger(canvas.toDataURL("image/png"));
          resolve();
        } catch (err) {
          reject(new Error("导出失败：请刷新后重试。"));
        }
      }
    });
  }

  function exportElement(target, filename) {
    if (!target) {
      return Promise.reject(new Error("未找到可导出的表格区域"));
    }

    return loadScript(HTML2CANVAS_SRC).then(function () {
      var hidden = [];
      target.querySelectorAll(".no-print").forEach(function (node) {
        hidden.push({ node: node, display: node.style.display });
        node.style.display = "none";
      });

      target.classList.add("exporting-image");
      var restored = prepareSheet(target);
      var qrTargets = [];

      function cleanup() {
        target.classList.remove("exporting-image");
        restoreSheet(restored);
        hidden.forEach(function (item) {
          item.node.style.display = item.display;
        });
      }

      return ensureQrDataUrls(target)
        .then(function () {
          return new Promise(function (r) {
            requestAnimationFrame(function () {
              setTimeout(r, 50);
            });
          });
        })
        .then(function () {
          qrTargets = collectQrTargets(target);
          return window.html2canvas(target, {
            scale: EXPORT_SCALE,
            backgroundColor: "#ffffff",
            useCORS: true,
            allowTaint: false,
            logging: false,
            imageTimeout: 15000,
            scrollX: -window.scrollX,
            scrollY: -window.scrollY,
            onclone: function (doc) {
              var cloneRoot = doc.getElementById("print-area") || doc.body;
              var map = window.COACH_QR_DATA_URLS || {};
              cloneRoot.querySelectorAll("img.coach-qr-img").forEach(function (img) {
                var id = img.getAttribute("data-coach-id") || "";
                var dataUrl =
                  (id && map[id]) || map.chen || img.getAttribute("src") || "";
                if (dataUrl) {
                  img.src = dataUrl;
                  img.style.visibility = "visible";
                  img.style.opacity = "1";
                  img.style.display = "inline-block";
                }
              });
            }
          });
        })
        .then(function (canvas) {
          return paintQrTargets(canvas, qrTargets, EXPORT_SCALE);
        })
        .then(function (canvas) {
          return downloadCanvas(canvas, filename);
        })
        .then(function () {
          cleanup();
        })
        .catch(function (err) {
          cleanup();
          throw err;
        });
    });
  }

  function exportPrintArea(filename) {
    return exportElement(document.getElementById("print-area"), filename);
  }

  function printPrintArea() {
    var target = document.getElementById("print-area");
    if (!target) {
      window.print();
      return Promise.resolve();
    }
    target.classList.add("exporting-image");
    var restored = prepareSheet(target);
    return ensureQrDataUrls(target).then(function () {
      var cleaned = false;
      var cleanup = function () {
        if (cleaned) return;
        cleaned = true;
        target.classList.remove("exporting-image");
        restoreSheet(restored);
        window.removeEventListener("afterprint", cleanup);
      };
      window.addEventListener("afterprint", cleanup);
      setTimeout(cleanup, 60000);
      window.print();
    });
  }

  return {
    safeName: safeName,
    exportElement: exportElement,
    exportPrintArea: exportPrintArea,
    printPrintArea: printPrintArea
  };
})();
