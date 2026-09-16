/**
 * 心雨少儿体能 · 站点可配置项
 * ----------------------------------------
 * 后续后台（管理端）可直接维护本文件，或改为接口下发同名结构。
 *
 * 修改说明：
 * 1. studentOptions  — 学员备选名称（可输入也可从此列表选）
 * 2. coaches         — 指导教练列表（下拉可选）
 *    - id            唯一标识
 *    - name          展示名称
 *    - qr            二维码图片路径（相对站点根目录）
 *    - wechatTip     二维码下方提示文案
 * 3. defaultCoachId  — 默认教练 id
 * 4. defaultTimeStart / defaultTimeEnd — 默认上课时段
 */
window.SITE_CONFIG = {
  brand: "心雨少儿体能-体测方向",
  defaultTimeStart: "16:00",
  defaultTimeEnd: "16:45",
  defaultCoachId: "chen",

  /** 学员备选名称 —— 后续后台可增删改 */
  studentOptions: ["多多", "朗朗", "莹莹", "可心", "双双", "齐齐", "雯雯", "一一", "瓜瓜", "果果"],

  /** 指导教练（含二维码）—— 后续后台可维护 */
  coaches: [
    {
      id: "chen",
      name: "陈教练",
      qr: "assets/coaches/chen-export.jpg",
      /** 与 js/coach-qr-data.js 中的 key 对应；有内嵌图时优先用于显示/导出 */
      qrDataKey: "chen",
      wechatTip: "微信扫码联系教练"
    }
    // 示例：新增教练时复制一条，并放入对应二维码图片
    // {
    //   id: "li",
    //   name: "李教练",
    //   qr: "assets/coaches/li.jpg",
    //   wechatTip: "微信扫码联系教练"
    // }
  ]
};

window.getSiteConfig = function () {
  return window.SITE_CONFIG || {};
};

window.getCoachById = function (id) {
  var cfg = window.getSiteConfig();
  var list = cfg.coaches || [];
  for (var i = 0; i < list.length; i++) {
    if (list[i].id === id) return list[i];
  }
  return null;
};

window.getCoachByName = function (name) {
  var cfg = window.getSiteConfig();
  var list = cfg.coaches || [];
  for (var i = 0; i < list.length; i++) {
    if (list[i].name === name) return list[i];
  }
  return null;
};

window.getDefaultCoach = function () {
  var cfg = window.getSiteConfig();
  return (
    window.getCoachById(cfg.defaultCoachId) ||
    (cfg.coaches && cfg.coaches[0]) ||
    null
  );
};

/** 将相对站点根的路径转为当前页面可用的 URL */
window.resolveSiteAsset = function (relPath) {
  if (!relPath) return "";
  if (/^https?:\/\//i.test(relPath) || relPath.charAt(0) === "/") {
    return relPath;
  }
  var clean = relPath.replace(/^\.\//, "");
  if (window.location.pathname.indexOf("/modules/") !== -1) {
    return "../../" + clean;
  }
  return clean;
};

window.resolveCoachQrSrc = function (coach) {
  if (!coach) return "";
  var map = window.COACH_QR_DATA_URLS || {};
  if (coach.qrDataKey && map[coach.qrDataKey]) return map[coach.qrDataKey];
  if (coach.id && map[coach.id]) return map[coach.id];
  if (coach.qr) {
    return window.resolveSiteAsset(coach.qr);
  }
  return "";
};
