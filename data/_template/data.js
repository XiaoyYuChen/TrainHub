/**
 * 新专项模板 —— 复制本目录为 data/{id}/ 后改内容
 * 同一份数据驱动：总表、学员版、教练员版
 *
 * 必填：
 * - SHARED.duration / warmup / stretch / masteryOptions
 * - LESSONS[] 每课 student.drills + coach（教案）
 * - window.TRAIN_MODULE（id 必须与文件夹名、catalog.js 一致）
 *
 * 完整字段说明见仓库根目录 AGENTS.md
 */
window.TEMPLATE_SHARED = {
  duration: 45,
  audience: "1–6年级",
  warmup: {
    duration: 10,
    joints: ["颈", "肩", "腰", "髋", "膝", "踝"],
    dynamic: ["弓步压腿", "提膝", "提髋"],
    cardio: ["小碎步", "提踵"],
    cardioNote: "按顺序完成 1–2 组；组间慢走 20–30 秒"
  },
  stretch: {
    duration: 5,
    parts: ["小腿后侧", "大腿前侧", "大腿后侧", "肩"]
  },
  masteryOptions: ["未掌握", "基本掌握", "熟练掌握"]
};

window.TEMPLATE_LESSONS = [
  {
    id: 1,
    title: "示例课：从站位到完整动作",
    focus: ["站位", "完整动作"],
    goal: "学会本专项的预备姿势，并完整做完 1 个主项",
    student: {
      drills: [
        {
          name: "预备姿势",
          focus: true,
          dose: "集体讲解 + 个人对照 1 轮",
          rest: ""
        },
        {
          name: "主项完整做",
          focus: true,
          dose: "3 组 × 8–12 次",
          rest: "组间 40 秒"
        }
      ],
      summaryLine: "本课完成：预备姿势 → 主项完整做"
    },
    coach: {
      objectives: {
        knowledge: "知道本专项的预备姿势与安全边界。",
        skill: "能按口令完成主项 3 组。",
        attitude: "听从指挥，不推挤、不嘲笑失误。"
      },
      keyPoints: "预备姿势稳定、动作幅度适中、落地缓冲",
      hardPoints: "抢速度导致变形、间距不够",
      flow: {
        warmup: "四列横队；关节活动 → 动态拉伸 → 心肺激活。",
        special: "预备姿势 → 主项完整做。时间紧时保证主项质量。",
        stretch: "按 SHARED.stretch 部位各 15–20 秒，不弹振。",
        summary: "强调 1–2 个关键口令；预告下节。"
      },
      drills: [
        {
          name: "预备姿势",
          focus: true,
          core: ["站位与目光", "关节微屈随时可动"],
          steps: ["正确/错误对比示范", "学员对照自查", "教练点名展示"],
          errors: [
            { wrong: "低头或挺腹", fix: "口令「眼睛看前、肚子收一点」" }
          ],
          dose: "讲解 + 自查 1 轮",
          safety: "讲解时器材放好，不随意挥舞。"
        },
        {
          name: "主项完整做",
          focus: true,
          core: ["完整节奏", "质量优先于次数"],
          steps: ["慢速 1 组体会", "正式 2 组"],
          errors: [
            { wrong: "为完成次数而变形", fix: "降次数，保留标准幅度" }
          ],
          dose: "3×8–12；组间 40 秒",
          safety: "间距充足；出现疼痛立即停止。"
        }
      ],
      closing: "本课强调预备姿势与质量。下节可加量或加变化。",
      intensityNote: "低年级可减组或减幅度；高年级保持质量再加次数。"
    }
  }
];

window.TRAIN_MODULE = {
  id: "template",
  label: "示例专项",
  name: "示例专项",
  lessonCount: 1,
  shared: window.TEMPLATE_SHARED,
  lessons: window.TEMPLATE_LESSONS,
  hideFocus: false,
  hideMastery: false,
  hideSummary: false,
  showDuration: false,
  masteryScope: "focus"
};
