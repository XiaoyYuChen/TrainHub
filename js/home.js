/**
 * 首页：根据 data/catalog.js 渲染模块卡片
 */
(function () {
  function renderCatalog() {
    var grid = document.getElementById("module-grid");
    var list = window.TRAIN_CATALOG;
    if (!grid || !list || !list.length) return;

    grid.innerHTML = "";
    list.forEach(function (mod) {
      if (!mod || mod.enabled === false) return;
      var a = document.createElement("a");
      a.className = "module-card";
      a.href = mod.href || "modules/" + mod.id + "/index.html";

      var badge = document.createElement("span");
      badge.className = "badge";
      badge.textContent = mod.badge || "可用";

      var h3 = document.createElement("h3");
      h3.textContent = mod.label || mod.id;

      var p = document.createElement("p");
      p.textContent = mod.summary || "";

      a.appendChild(badge);
      a.appendChild(h3);
      a.appendChild(p);
      grid.appendChild(a);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderCatalog);
  } else {
    renderCatalog();
  }
})();
