# TrainHub — 给 AI 与贡献者

静态站点，无构建步骤。课程数据与页面壳分离：改专项内容只动 `data/`，不要把课时写进 HTML。

在线预览：https://xiaoyyuchen.github.io/TrainHub/

## 目录

```
data/catalog.js              首页模块目录（新增专项先改这里）
data/{id}/data.js            该专项的全部课时（学员版 + 教练员版）
data/_template/data.js       新模块数据模板
modules/{id}/index.html      总表页（薄壳）
modules/{id}/lesson.html     单课页（薄壳，?id=&role=student|coach）
modules/_template/           新模块页面模板
js/app.js                    渲染总表 / 学员表 / 教案
js/storage.js                localStorage，key = {id}-lesson-{课次}
js/site-config.js            学员名单、教练、默认上课时间
js/export-image.js           打印与保存图片（A4 纸宽）
js/home.js                   首页读 catalog 画卡片
css/app.css                  公共样式与打印
```

`id` 必须三处一致：`data/catalog.js`、`data/{id}/`、`modules/{id}/`。

## 新增一个专项

1. 复制 `data/_template/` → `data/{id}/`（id 用小写英文，如 `basketball`）。
2. 复制 `modules/_template/` → `modules/{id}/`。
3. 把两个 HTML 里的 `../../data/_template/data.js` 改成 `../../data/{id}/data.js`。
4. 编辑 `data/{id}/data.js`：
   - 把 `TEMPLATE_SHARED` / `TEMPLATE_LESSONS` 改成自己的全局名（可保留，但别和别的模块冲突）。
   - 设置 `window.TRAIN_MODULE.id` / `label` / `lessons` / `shared`。
5. 在 `data/catalog.js` 的 `TRAIN_CATALOG` 追加一条（`href` 指向 `modules/{id}/index.html`）。
6. **不要**改 `js/app.js` 去写 `if (id === "xxx")`。运行时只读 `window.TRAIN_MODULE`。

本地预览：仓库根目录执行 `python -m http.server 8765`，打开 `http://127.0.0.1:8765/`。

## 改已有专项

只改对应 `data/{id}/data.js`。常见位置：

| 改什么 | 改哪里 |
| --- | --- |
| 课次、主题、目标 | `LESSONS[]` 的 `title` / `focus` / `goal` |
| 学员表次数、间歇 | `lesson.student.drills[].dose` / `rest` |
| 教练教案要点、纠错 | `lesson.coach.drills[]` 的 `core` / `steps` / `errors` |
| 热身、拉伸 | `SHARED.warmup` / `SHARED.stretch` |
| 首页简介 | `data/catalog.js` 的 `summary` |
| 学员下拉名单 | `js/site-config.js` 的 `studentOptions` |

## `TRAIN_MODULE` 字段

```js
window.TRAIN_MODULE = {
  id: "jump-rope",          // 必填，文件夹名
  label: "跳绳",            // 必填，中文名
  lessonCount: 2,           // 可省略，默认 lessons.length
  shared: window.XXX_SHARED,
  lessons: window.XXX_LESSONS,
  hideFocus: true,          // 不显示「重点」角标
  hideMastery: false,       // true = 学员表不显示掌握情况
  hideSummary: false,       // true = 不渲染课堂总结块
  showDuration: false,      // true = 总表增加「时长」列（长跑用）
  masteryScope: "all"       // "focus" 仅重点项；"all" 每项都勾；"none" 同 hideMastery
};
```

`getLesson(id)` 可省略，运行时按 `lessons[].id` 查找。

## 一课数据结构

```js
{
  id: 1,
  title: "课名",
  focus: ["动作A", "动作B"],   // 总表「重点」列
  goal: "本课目标",
  duration: 90,                 // 可选，覆盖 SHARED.duration
  indexLabel: "A",              // 可选，总表课次列（体能/核心用 A/S/SS）
  student: {
    drills: [
      { name: "绳长", focus: false, dose: "……", rest: "组间 30 秒" }
    ],
    summaryLine: "本课完成：……"
  },
  coach: {
    objectives: { knowledge: "", skill: "", attitude: "" },
    keyPoints: "",
    hardPoints: "",
    flow: { warmup: "", special: "", stretch: "", summary: "" },
    drills: [
      {
        name: "绳长",            // 与学员表同名，便于对照
        focus: false,
        core: ["要点"],
        steps: ["步骤"],
        errors: [{ wrong: "错误", fix: "纠错" }],
        dose: "组数/次数",
        safety: "保护与场地"
      }
    ],
    closing: "",
    intensityNote: ""
  }
}
```

`rest` 为空或省略则学员表不显示「间歇：」。

## 约定（改代码时遵守）

- 纯前端，ES5 风格即可，不要引入打包器或框架。
- 课程正文放 `data/`，页面壳放 `modules/`，站点配置放 `js/site-config.js`。
- 打印 / 保存图片只输出 `#print-area`，移动端也按 A4 纸宽，逻辑在 `js/export-image.js`。
- 学员记录存在浏览器 localStorage，前缀 `{moduleId}-lesson-`，换 id 等于换一份新存储。
- 改了被 HTML 引用的 js/css，给 script/link 的 `?v=` 加一，避免 GitHub Pages 缓存旧文件。
- 不要提交密钥；二维码可放 `assets/`。

## 现有模块 id

`sprint` 短跑 · `endurance` 长跑 · `jump-rope` 跳绳 · `fitness` 体能 · `core` 核心力量 · `coordination` 协调性
