/**
 * 短跑单课页渲染：role=student | coach
 */
(function () {
  function qs(name) {
    const u = new URL(window.location.href);
    return u.searchParams.get(name);
  }

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "className") node.className = attrs[k];
        else if (k === "html") node.innerHTML = attrs[k];
        else if (k === "text") node.textContent = attrs[k];
        else if (k.startsWith("on") && typeof attrs[k] === "function") {
          node.addEventListener(k.slice(2).toLowerCase(), attrs[k]);
        } else if (attrs[k] !== undefined && attrs[k] !== null) {
          node.setAttribute(k, attrs[k]);
        }
      });
    }
    (children || []).forEach(function (c) {
      if (c == null) return;
      if (typeof c === "string") node.appendChild(document.createTextNode(c));
      else node.appendChild(c);
    });
    return node;
  }

  function checklist(items, namePrefix, checkedMap) {
    const ul = el("ul", { className: "checklist" });
    items.forEach(function (item, i) {
      const id = namePrefix + "-" + i;
      const input = el("input", {
        type: "checkbox",
        id: id,
        name: namePrefix,
        value: item
      });
      if (checkedMap && checkedMap[item]) input.checked = true;
      const label = el("label", { for: id }, [input, document.createTextNode(" " + item)]);
      ul.appendChild(el("li", null, [label]));
    });
    return ul;
  }

  function renderStudent(lesson, shared, root) {
    document.body.classList.add("role-student");
    document.title =
      "学员版 · 第" + lesson.id + "课 " + lesson.title + " · 短跑入门";

    const saved = window.SprintStorage.load(lesson.id) || {};

    const sheet = el("div", { className: "sheet", id: "print-area" });

    sheet.appendChild(
      el("h2", { className: "sheet-title", text: "短跑入门 · 学员训练表" })
    );
    sheet.appendChild(
      el("div", {
        className: "sheet-meta",
        text:
          "第" +
          lesson.id +
          "课 · " +
          lesson.title +
          " · " +
          shared.duration +
          "分钟 · " +
          shared.audience
      })
    );

    const meta = el("div", { className: "meta-grid" });
    [
      { key: "studentName", label: "学员名称", type: "text" },
      { key: "classTime", label: "上课时间", type: "datetime-local" },
      { key: "coachName", label: "指导教练", type: "text" }
    ].forEach(function (f) {
      const input = el("input", {
        type: f.type,
        id: f.key,
        name: f.key,
        value: saved[f.key] || ""
      });
      meta.appendChild(
        el("div", { className: "field" }, [
          el("label", { for: f.key, text: f.label }),
          input
        ])
      );
    });
    sheet.appendChild(meta);

    // 热身
    const warm = el("div", { className: "section" });
    warm.appendChild(
      el("div", {
        className: "section-head",
        html: "一、热身（" + shared.warmup.duration + "分钟）"
      })
    );
    const warmBody = el("div", { className: "section-body" });
    warmBody.appendChild(el("div", { className: "sub-label", text: "活动关节" }));
    warmBody.appendChild(
      checklist(shared.warmup.joints, "joint", saved.checks && saved.checks.joints)
    );
    warmBody.appendChild(el("div", { className: "sub-label", text: "动态拉伸" }));
    warmBody.appendChild(
      checklist(shared.warmup.dynamic, "dynamic", saved.checks && saved.checks.dynamic)
    );
    warmBody.appendChild(
      el("div", {
        className: "sub-label",
        text: "心肺激活（按顺序" + (shared.warmup.cardioNote ? "，" + shared.warmup.cardioNote : "") + "）"
      })
    );
    warmBody.appendChild(
      checklist(shared.warmup.cardio, "cardio", saved.checks && saved.checks.cardio)
    );
    warm.appendChild(warmBody);
    sheet.appendChild(warm);

    // 专项
    const special = el("div", { className: "section" });
    special.appendChild(
      el("div", { className: "section-head", text: "二、专项训练（28分钟）" })
    );
    const specialBody = el("div", { className: "section-body" });
    const masterySaved = saved.mastery || {};

    lesson.student.drills.forEach(function (d, idx) {
      const row = el("div", {
        className: "drill-row" + (d.focus ? " focus" : "")
      });
      const nameRow = el("div", { className: "drill-name" }, [
        document.createTextNode(d.name)
      ]);
      if (d.focus) nameRow.appendChild(el("span", { className: "tag-focus", text: "重点" }));
      row.appendChild(nameRow);
      row.appendChild(
        el("div", {
          className: "drill-dose",
          text: d.dose + (d.rest ? " · 间歇：" + d.rest : "")
        })
      );

      if (d.focus) {
        const mastery = el("div", { className: "mastery" });
        mastery.appendChild(el("span", { className: "label", text: "掌握情况：" }));
        shared.masteryOptions.forEach(function (opt) {
          const id = "mastery-" + idx + "-" + opt;
          const input = el("input", {
            type: "radio",
            name: "mastery-" + idx,
            id: id,
            value: opt,
            "data-drill": d.name
          });
          if (masterySaved[d.name] === opt) input.checked = true;
          mastery.appendChild(
            el("label", { for: id }, [input, document.createTextNode(" " + opt)])
          );
        });
        row.appendChild(mastery);
      }
      specialBody.appendChild(row);
    });
    special.appendChild(specialBody);
    sheet.appendChild(special);

    // 拉伸
    const stretch = el("div", { className: "section" });
    stretch.appendChild(
      el("div", {
        className: "section-head",
        text: "三、拉伸（" + shared.stretch.duration + "分钟）"
      })
    );
    const stretchBody = el("div", { className: "section-body" });
    stretchBody.appendChild(
      checklist(shared.stretch.parts, "stretch", saved.checks && saved.checks.stretch)
    );
    stretch.appendChild(stretchBody);
    sheet.appendChild(stretch);

    // 总结简行
    const summary = el("div", { className: "section" });
    summary.appendChild(el("div", { className: "section-head", text: "四、总结（2分钟）" }));
    summary.appendChild(
      el("div", {
        className: "section-body",
        html: "<span class='note'>" + (lesson.student.summaryLine || "本课完成") + "</span>"
      })
    );
    sheet.appendChild(summary);

    // 签字
    const signs = el("div", { className: "sign-row" });
    signs.appendChild(
      el("div", { className: "sign-box" }, [
        el("div", { text: "学员签字：" }),
        el("div", { className: "line" })
      ])
    );
    signs.appendChild(
      el("div", { className: "sign-box" }, [
        el("div", { text: "教练签字：" }),
        el("div", { className: "line" })
      ])
    );
    sheet.appendChild(signs);

    root.appendChild(sheet);
    return collectStudentForm.bind(null, lesson);
  }

  function collectStudentForm(lesson) {
    const checks = { joints: {}, dynamic: {}, cardio: {}, stretch: {} };
    document.querySelectorAll('input[name="joint"]').forEach(function (i) {
      if (i.checked) checks.joints[i.value] = true;
    });
    document.querySelectorAll('input[name="dynamic"]').forEach(function (i) {
      if (i.checked) checks.dynamic[i.value] = true;
    });
    document.querySelectorAll('input[name="cardio"]').forEach(function (i) {
      if (i.checked) checks.cardio[i.value] = true;
    });
    document.querySelectorAll('input[name="stretch"]').forEach(function (i) {
      if (i.checked) checks.stretch[i.value] = true;
    });

    const mastery = {};
    document.querySelectorAll('input[type="radio"][data-drill]:checked').forEach(function (r) {
      mastery[r.getAttribute("data-drill")] = r.value;
    });

    return {
      studentName: (document.getElementById("studentName") || {}).value || "",
      classTime: (document.getElementById("classTime") || {}).value || "",
      coachName: (document.getElementById("coachName") || {}).value || "",
      checks: checks,
      mastery: mastery
    };
  }

  function renderCoach(lesson, shared, root) {
    document.body.classList.add("role-coach");
    document.title =
      "教练员版 · 第" + lesson.id + "课 " + lesson.title + " · 短跑入门";

    const c = lesson.coach;
    const sheet = el("div", { className: "sheet", id: "print-area" });

    sheet.appendChild(
      el("h2", { className: "sheet-title", text: "短跑入门 · 教练员教案" })
    );
    sheet.appendChild(
      el("div", {
        className: "sheet-meta",
        text:
          "第" +
          lesson.id +
          "课 · " +
          lesson.title +
          " · " +
          shared.duration +
          "分钟 · 适用" +
          shared.audience
      })
    );

    // 目标
    const obj = el("div", { className: "section" });
    obj.appendChild(el("div", { className: "section-head coach", text: "教学目标" }));
    const objBody = el("div", { className: "section-body obj-grid" });
    objBody.appendChild(
      el("div", { html: "<strong>知识：</strong>" + c.objectives.knowledge })
    );
    objBody.appendChild(
      el("div", { html: "<strong>技能：</strong>" + c.objectives.skill })
    );
    objBody.appendChild(
      el("div", { html: "<strong>态度：</strong>" + c.objectives.attitude })
    );
    obj.appendChild(objBody);
    sheet.appendChild(obj);

    // 重难点
    const kh = el("div", { className: "section" });
    kh.appendChild(el("div", { className: "section-head coach", text: "教学重难点" }));
    kh.appendChild(
      el("div", {
        className: "section-body",
        html:
          "<p><strong>重点：</strong>" +
          c.keyPoints +
          "</p><p><strong>难点：</strong>" +
          c.hardPoints +
          "</p>"
      })
    );
    sheet.appendChild(kh);

    // 流程
    const flow = el("div", { className: "section" });
    flow.appendChild(
      el("div", { className: "section-head coach", text: "课时流程（45分钟）" })
    );
    const flowBody = el("div", { className: "section-body" });
    [
      ["热身 10′", c.flow.warmup],
      ["专项 28′", c.flow.special],
      ["拉伸 5′", c.flow.stretch],
      ["总结 2′", c.flow.summary]
    ].forEach(function (pair) {
      flowBody.appendChild(
        el("div", {
          className: "coach-block",
          html: "<h4>" + pair[0] + "</h4><p class='note'>" + pair[1] + "</p>"
        })
      );
    });
    // 热身清单提示
    flowBody.appendChild(
      el("div", {
        className: "note",
        html:
          "<strong>热身固定清单：</strong>关节（" +
          shared.warmup.joints.join("、") +
          "）→ 动态拉伸（" +
          shared.warmup.dynamic.join("、") +
          "）→ 心肺激活（" +
          shared.warmup.cardio.join("→") +
          "）。" +
          shared.warmup.cardioNote
      })
    );
    flow.appendChild(flowBody);
    sheet.appendChild(flow);

    // 专项教法
    const drillsSec = el("div", { className: "section" });
    drillsSec.appendChild(
      el("div", { className: "section-head coach", text: "专项教法" })
    );
    const drillsBody = el("div", { className: "section-body" });

    c.drills.forEach(function (d) {
      const block = el("div", {
        className: "drill-row" + (d.focus ? " focus" : "")
      });
      const title = el("div", { className: "drill-name" }, [
        document.createTextNode(d.name)
      ]);
      if (d.focus) title.appendChild(el("span", { className: "tag-focus", text: "重点" }));
      block.appendChild(title);

      block.appendChild(el("div", { className: "sub-label", text: "核心技术点" }));
      const coreUl = el("ul", { className: "plain" });
      (d.core || []).forEach(function (t) {
        coreUl.appendChild(el("li", { text: t }));
      });
      block.appendChild(coreUl);

      block.appendChild(el("div", { className: "sub-label", text: "示范与练习步骤" }));
      const stepOl = el("ol", { className: "plain" });
      (d.steps || []).forEach(function (t) {
        stepOl.appendChild(el("li", { text: t }));
      });
      block.appendChild(stepOl);

      block.appendChild(el("div", { className: "sub-label", text: "常见错误与纠错" }));
      const errUl = el("ul", { className: "error-list" });
      (d.errors || []).forEach(function (e) {
        errUl.appendChild(
          el("li", {
            html:
              "<strong>错误：</strong>" +
              e.wrong +
              "<br/><strong>纠错：</strong>" +
              e.fix
          })
        );
      });
      block.appendChild(errUl);

      block.appendChild(
        el("p", {
          className: "note",
          html:
            "<strong>组数/间歇：</strong>" +
            d.dose +
            "<br/><strong>保护与场地：</strong>" +
            d.safety
        })
      );
      drillsBody.appendChild(block);
    });
    drillsSec.appendChild(drillsBody);
    sheet.appendChild(drillsSec);

    // 拉伸提醒
    const st = el("div", { className: "section" });
    st.appendChild(el("div", { className: "section-head coach", text: "拉伸部位" }));
    st.appendChild(
      el("div", {
        className: "section-body note",
        text: shared.stretch.parts.join("、") + "；每个部位 15–20 秒，不弹振。"
      })
    );
    sheet.appendChild(st);

    // 总结与强度
    const end = el("div", { className: "section" });
    end.appendChild(el("div", { className: "section-head coach", text: "总结口令与强度说明" }));
    end.appendChild(
      el("div", {
        className: "section-body",
        html:
          "<p>" +
          c.closing +
          "</p><p class='note'><strong>强度说明：</strong>" +
          c.intensityNote +
          "</p>"
      })
    );
    sheet.appendChild(end);

    const signs = el("div", { className: "sign-row" });
    signs.appendChild(
      el("div", { className: "sign-box" }, [
        el("div", { text: "教练签字（教案执行确认）：" }),
        el("div", { className: "line" })
      ])
    );
    signs.appendChild(
      el("div", { className: "sign-box" }, [
        el("div", { className: "note", text: "掌握情况请在「学员版」记录。" }),
        el("div", { className: "line", style: "border:none" })
      ])
    );
    sheet.appendChild(signs);

    root.appendChild(sheet);
  }

  function initLessonPage() {
    const root = document.getElementById("lesson-root");
    if (!root) return;

    const id = qs("id") || "1";
    const role = (qs("role") || "student").toLowerCase();
    const lesson = window.getSprintLesson(id);
    const shared = window.SPRINT_SHARED;

    if (!lesson) {
      root.innerHTML =
        '<div class="panel"><p>未找到该课次。请返回 <a href="index.html">短跑总表</a>。</p></div>';
      return;
    }

    const titleEl = document.getElementById("page-title");
    if (titleEl) {
      titleEl.textContent =
        (role === "coach" ? "教练员版" : "学员版") +
        " · 第" +
        lesson.id +
        "课 " +
        lesson.title;
    }

    const switchLink = document.getElementById("switch-role");
    if (switchLink) {
      const other = role === "coach" ? "student" : "coach";
      switchLink.href = "lesson.html?id=" + lesson.id + "&role=" + other;
      switchLink.textContent =
        other === "coach" ? "切换教练员版" : "切换学员版";
    }

    let collect = null;
    if (role === "coach") {
      renderCoach(lesson, shared, root);
    } else {
      collect = renderStudent(lesson, shared, root);
    }

    const saveBtn = document.getElementById("btn-save");
    const clearBtn = document.getElementById("btn-clear");
    const printBtn = document.getElementById("btn-print");

    if (role !== "student") {
      if (saveBtn) saveBtn.style.display = "none";
      if (clearBtn) clearBtn.style.display = "none";
    } else {
      if (saveBtn) {
        saveBtn.addEventListener("click", function () {
          const data = collect();
          window.SprintStorage.save(lesson.id, data);
          alert("已保存本课学员记录（本机浏览器）。");
        });
      }
      if (clearBtn) {
        clearBtn.addEventListener("click", function () {
          if (confirm("确定清空本课已保存的学员记录？")) {
            window.SprintStorage.clear(lesson.id);
            location.reload();
          }
        });
      }
    }

    if (printBtn) {
      printBtn.addEventListener("click", function () {
        if (role === "student" && collect) {
          window.SprintStorage.save(lesson.id, collect());
        }
        window.print();
      });
    }
  }

  function initSprintIndex() {
    const tbody = document.getElementById("lesson-tbody");
    if (!tbody || !window.SPRINT_LESSONS) return;

    window.SPRINT_LESSONS.forEach(function (lesson) {
      const tr = el("tr");
      tr.appendChild(el("td", { text: String(lesson.id) }));
      tr.appendChild(el("td", { text: lesson.title }));
      tr.appendChild(el("td", { text: lesson.focus.join("、") }));
      tr.appendChild(el("td", { text: lesson.goal }));
      const actions = el("div", { className: "actions" });
      actions.appendChild(
        el("a", {
          className: "btn btn-primary",
          href: "lesson.html?id=" + lesson.id + "&role=student",
          text: "学员版"
        })
      );
      actions.appendChild(
        el("a", {
          className: "btn btn-coach",
          href: "lesson.html?id=" + lesson.id + "&role=coach",
          text: "教练员版"
        })
      );
      tr.appendChild(el("td", null, [actions]));
      tbody.appendChild(tr);
    });

    const printBtn = document.getElementById("btn-print");
    if (printBtn) {
      printBtn.addEventListener("click", function () {
        window.print();
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (document.body.dataset.page === "lesson") initLessonPage();
    if (document.body.dataset.page === "sprint-index") initSprintIndex();
  });
})();
