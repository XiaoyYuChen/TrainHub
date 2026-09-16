/**
 * TrainHub 模块目录（首页只读本文件，不加载各专项的课时正文）
 *
 * 新增专项训练模块时：
 * 1. 复制 data/_template/ 与 modules/_template/
 * 2. 在本数组追加一条（id 与文件夹名一致）
 * 3. 填写 data/{id}/data.js 的课时内容
 *
 * 字段：
 * - id        英文短名，对应 data/{id}/ 与 modules/{id}/
 * - label     中文名，首页卡片与总表标题
 * - summary   首页卡片简介
 * - href      总表页面路径（相对仓库根）
 * - enabled   false 时首页不展示（可用来预告「即将开放」）
 * - badge     可选，默认「可用」
 */
window.TRAIN_CATALOG = [
  {
    id: "sprint",
    label: "短跑",
    summary: "12 课时入门：摆臂、步频、抬腿、送髋、起跑与途中跑衔接",
    href: "modules/sprint/index.html",
    enabled: true
  },
  {
    id: "endurance",
    label: "长跑",
    summary: "3 课时（90分钟）：入门基础、50米×8、3–5 公里持续跑",
    href: "modules/endurance/index.html",
    enabled: true
  },
  {
    id: "jump-rope",
    label: "跳绳",
    summary: "2 课时：初级（绳长→连续跳）· 高级（连续跳→一分钟/花样）",
    href: "modules/jump-rope/index.html",
    enabled: true
  },
  {
    id: "fitness",
    label: "体能",
    summary: "A / S / SS / SSS 四档：徒手动作 + 角标、35厘米跨栏、敏捷梯",
    href: "modules/fitness/index.html",
    enabled: true
  },
  {
    id: "core",
    label: "核心力量",
    summary: "A / S / SS 三档：1–3年级、4–5年级、6年级+",
    href: "modules/core/index.html",
    enabled: true
  },
  {
    id: "coordination",
    label: "协调性",
    summary:
      "1 课时：转髋跳、胯下击掌、开合跳、前后摸脚、垫步扩胸、垫步提膝碰肘、垫步绕臂、蝎子摆尾",
    href: "modules/coordination/index.html",
    enabled: true
  }
];
