/**
 * 小学生长跑入门 · 15 课时数据
 * 适用：2–6 年级 · 单课时长按课次 45–70 分钟
 * 同一数据源驱动学员版 / 教练员版
 * 专项含：呼吸节奏、50米×8 往返跑、3–5 公里持续跑
 */
window.TRAIN_MODULE = {
  id: "endurance",
  label: "长跑",
  lessonCount: 15
};

window.ENDURANCE_SHARED = {
  duration: 45,
  audience: "2–6年级",
  warmup: {
    duration: 10,
    joints: ["颈", "肩", "腰", "髋", "膝", "踝"],
    dynamic: [
      "弓步压腿",
      "提膝",
      "提髋",
      "K字拉伸",
      "最伟大拉伸",
      "小腿拉伸",
      "髋屈肌拉伸",
      "外展"
    ],
    cardio: [
      "轻松慢跑 2–3 分钟",
      "小碎步",
      "前后脚小碎步",
      "高抬腿走",
      "提踵"
    ],
    cardioNote: "按顺序完成，强度偏轻松；组间走回休息 20–30 秒；少做爆发性开合跳"
  },
  stretch: {
    duration: 5,
    parts: ["小腿后侧", "大腿前侧", "大腿后侧", "髋屈肌", "大腿内侧", "肩"]
  },
  masteryOptions: ["未掌握", "基本掌握", "熟练掌握"]
};

window.ENDURANCE_LESSONS = [
  {
    id: 1,
    title: "长跑与短跑的区别",
    duration: 45,
    flowMinutes: { warmup: 10, special: 28, stretch: 5, summary: 2 },
    focus: ["对比体验", "长跑意识"],
    goal: "理解长跑与短跑在供能、跑姿、摆臂、呼吸与心态上的区别",
    student: {
      knowledge: [
        "短跑：爆发供能、身体略前倾、摆臂大幅快、可短暂憋气冲刺",
        "长跑：耐力供能、躯干更直立放松、摆臂小幅省力、要持续有节奏呼吸",
        "心态：短跑拼瞬间；长跑拼匀速与坚持，不抢前几十米"
      ],
      drills: [
        {
          name: "30米加速（短跑感觉）",
          focus: false,
          dose: "2 组 × 30 米（约 8–9 成速）",
          rest: "组间走回"
        },
        {
          name: "200米轻松跑（长跑感觉）",
          focus: true,
          dose: "2 组 × 200 米（能说话的轻松配速）",
          rest: "组间走 1–2 分钟"
        },
        {
          name: "口述对比（学员能说出 2–3 点区别）",
          focus: true,
          dose: "课堂提问 / 结对复述",
          rest: "—"
        }
      ],
      summaryLine: "本课完成：对比体验，建立「长跑要放松、要呼吸」的意识"
    },
    coach: {
      objectives: {
        knowledge: "知道长跑与短跑在供能、跑姿、摆臂、呼吸、心态上的主要区别。",
        skill: "能在 30 米加速与 200 米轻松跑中感受两种跑法差异。",
        attitude: "认真听讲对比，不把长跑当成「一直全力冲」。"
      },
      keyPoints: "对比体验：爆发 vs 耐力、紧张发力 vs 放松省力",
      hardPoints: "学员把轻松跑跑成加速冲刺；说不出区别要点",
      flow: {
        warmup: "四列横队；关节活动 → 动态拉伸 → 轻松慢跑激活。强调今天是认识课，不要拼速度。",
        special:
          "先板书/口述 5 点区别 → 30 米加速体验 → 200 米轻松跑 → 结对复述区别。教练巡视纠正「冲刺式长跑」。",
        stretch: "静态拉伸，每个部位 15–20 秒，不弹振。",
        summary: "复述「长跑要放松、要呼吸」；预告下节长跑跑姿。"
      },
      drills: [
        {
          name: "30米加速（短跑感觉）",
          focus: false,
          core: ["体会爆发、前倾、大幅摆臂", "仅作对比，不作为本课技术重点"],
          steps: ["示范加速跑 → 学员 2 组，强调「这是短跑感觉」"],
          errors: [
            {
              wrong: "把后面轻松跑也跑成加速",
              fix: "明确口令：「现在换成长跑模式，能说话」"
            }
          ],
          dose: "2×30 米",
          safety: "单向跑；终点缓冲；分批。"
        },
        {
          name: "200米轻松跑（长跑感觉）",
          focus: true,
          core: [
            "躯干较直立、肩放松",
            "摆臂幅度小于短跑",
            "配速能说话（说话测试）",
            "自然呼吸，不憋气"
          ],
          steps: [
            "讲解长跑感觉要点",
            "教练带跑半圈示范轻松配速",
            "学员 2 组 × 约 200 米",
            "结对：每人说出至少 2 点区别"
          ],
          errors: [
            {
              wrong: "前 50 米冲太快后面喘不动",
              fix: "前 30 米强制「慢半拍」；用说话测试检查"
            },
            {
              wrong: "耸肩、咬牙、憋气",
              fix: "口令「肩掉下来、嘴巴轻轻出气」"
            }
          ],
          dose: "2×约 200 米；组间走 1–2 分钟",
          safety: "场地平整；低年级可改为 150 米；注意岔气即减速走。"
        },
        {
          name: "口述对比",
          focus: true,
          core: ["能说出供能/跑姿/摆臂/呼吸/心态中至少 2–3 点"],
          steps: ["提问抽查 → 结对复述 → 集体口令巩固"],
          errors: [
            {
              wrong: "只会说「长跑就是跑得久」",
              fix: "引导对照板书关键词：放松、呼吸、匀速"
            }
          ],
          dose: "课堂提问",
          safety: "无"
        }
      ],
      closing: "本课强调：长跑不是「一直短跑」。下节：长跑跑姿与放松。",
      intensityNote: "认识课强度中低；2–3 年级 200 米可改为 150 米或走跑结合。"
    }
  },
  {
    id: 2,
    title: "长跑跑姿与放松",
    duration: 45,
    flowMinutes: { warmup: 10, special: 28, stretch: 5, summary: 2 },
    focus: ["长跑跑姿"],
    goal: "建立直立放松跑姿：肩下沉、步幅适中、不耸肩不低头",
    student: {
      knowledge: [
        "长跑跑姿：头正目视前方，躯干直立略微前倾，肩放松",
        "摆臂小幅、贴近身体两侧；步幅适中，不刻意大步蹦"
      ],
      drills: [
        {
          name: "原地放松跑姿摆臂",
          focus: true,
          dose: "3 组 × 30 秒",
          rest: "组间 20–30 秒"
        },
        {
          name: "行进放松跑 60–80 米",
          focus: true,
          dose: "4 组 × 60–80 米",
          rest: "组间走回"
        },
        {
          name: "对比纠错（紧张 vs 放松）",
          focus: false,
          dose: "集体看示范 1–2 次，自查耸肩/低头",
          rest: "—"
        }
      ],
      summaryLine: "本课完成：长跑放松跑姿"
    },
    coach: {
      objectives: {
        knowledge: "知道长跑跑姿要求直立放松、摆臂省力、步幅适中。",
        skill: "能在短距离行进中保持肩下沉与稳定节奏。",
        attitude: "愿意接受纠错，不故意绷紧「用力跑」。"
      },
      keyPoints: "直立放松、肩下沉、步幅适中",
      hardPoints: "耸肩、低头、刻意大步蹦跳",
      flow: {
        warmup: "标准长跑热身；心肺以轻松慢跑为主。",
        special: "原地摆臂定型 → 行进放松跑 → 对比纠错。",
        stretch: "重点小腿与髋屈肌。",
        summary: "口令「肩掉下来」；预告呼吸节奏。"
      },
      drills: [
        {
          name: "原地放松跑姿摆臂",
          focus: true,
          core: [
            "肘自然弯，小幅前后摆",
            "肩下沉，不耸肩",
            "躯干直立，目视前方"
          ],
          steps: ["镜前/对面示范 → 慢速 1 组 → 跟上呼吸节奏 2 组"],
          errors: [
            {
              wrong: "左右甩臂、手过中线",
              fix: "想象身体两侧有墙，肘贴墙前后走"
            },
            {
              wrong: "耸肩",
              fix: "先抖肩，口令「肩掉下来」"
            }
          ],
          dose: "3×30 秒",
          safety: "间距 1.5 米。"
        },
        {
          name: "行进放松跑 60–80 米",
          focus: true,
          core: ["保持原地定型的放松感", "步幅适中，脚掌轻落", "不低头看地"],
          steps: ["示范 → 4 组行进；中途喊停纠耸肩低头"],
          errors: [
            {
              wrong: "大步蹦跳费力",
              fix: "要求「小一点、轻一点」"
            },
            {
              wrong: "低头含胸",
              fix: "在前方设标志物让视线平视"
            }
          ],
          dose: "4×60–80 米",
          safety: "单向；地面干燥。"
        },
        {
          name: "对比纠错（紧张 vs 放松）",
          focus: false,
          core: ["能识别紧张跑姿并自查"],
          steps: ["教练夸张演示错误 → 学员对照自查"],
          errors: [{ wrong: "只看别人不查自己", fix: "两人互查肩与头" }],
          dose: "1–2 次示范",
          safety: "无"
        }
      ],
      closing: "本课强调：放松直立。下节：呼吸节奏。",
      intensityNote: "中低强度；低年级缩短行进距离。"
    }
  },
  {
    id: 3,
    title: "呼吸节奏",
    duration: 45,
    flowMinutes: { warmup: 10, special: 28, stretch: 5, summary: 2 },
    focus: ["呼吸节奏"],
    goal: "掌握口鼻同呼吸与 2-2（或 3-3）步频呼吸，减少憋气与岔气",
    student: {
      knowledge: [
        "口鼻可一起呼吸；用鼻子吸、嘴巴轻轻呼也可以",
        "常用节奏：2 步一吸、2 步一呼（低年级可 3 步一吸、3 步一呼）",
        "感觉要岔气：立即减速走，深而慢地呼气，不要硬撑猛冲"
      ],
      drills: [
        {
          name: "原地呼吸节奏练习",
          focus: true,
          dose: "3 组 × 40 秒（配合原地踏步）",
          rest: "组间 20 秒"
        },
        {
          name: "行进 2-2 呼吸跑 100–150 米",
          focus: true,
          dose: "4 组 × 100–150 米",
          rest: "组间走回"
        },
        {
          name: "岔气处理演练",
          focus: false,
          dose: "集体演练：减速走 + 深呼气 1–2 分钟",
          rest: "—"
        }
      ],
      summaryLine: "本课完成：呼吸节奏与防岔气"
    },
    coach: {
      objectives: {
        knowledge: "知道 2-2 / 3-3 呼吸节奏及岔气时的处理方法。",
        skill: "能在短距离跑中基本保持有节奏呼吸。",
        attitude: "不硬憋气逞强；出现不适主动减速并告知教练。"
      },
      keyPoints: "有节奏呼吸；岔气先减速再调整",
      hardPoints: "紧张时恢复憋气；节奏数乱",
      flow: {
        warmup: "标准热身；激活段强调「边跑边出气」。",
        special: "原地踏步配呼吸 → 行进呼吸跑 → 岔气演练。",
        stretch: "常规拉伸。",
        summary: "口令「吸-吸、呼-呼」；预告轻松配速。"
      },
      drills: [
        {
          name: "原地呼吸节奏练习",
          focus: true,
          core: [
            "踏步数拍：吸-吸-呼-呼（2-2）",
            "低年级可用 3-3",
            "肩膀放松，腹胸自然起伏"
          ],
          steps: ["讲解 → 集体慢速数拍 → 加快踏步仍保持节奏"],
          errors: [
            {
              wrong: "只吸不呼、越跑越胀",
              fix: "强调「呼气要比吸气更清楚」"
            },
            {
              wrong: "耸肩喘气",
              fix: "手放腹部感受平稳呼吸"
            }
          ],
          dose: "3×40 秒",
          safety: "有哮喘或明显不适立即停止并休息。"
        },
        {
          name: "行进 2-2 呼吸跑",
          focus: true,
          core: ["把原地节奏带到行进", "配速偏轻松", "乱了就重新从慢速数拍"],
          steps: ["带跑示范 → 4 组；教练边跑边喊拍"],
          errors: [
            {
              wrong: "一加速就忘呼吸",
              fix: "降速，先保证节奏再提速"
            }
          ],
          dose: "4×100–150 米",
          safety: "岔气即出列走一圈调整。"
        },
        {
          name: "岔气处理演练",
          focus: false,
          core: ["减速走", "深而慢呼气", "轻按不适侧（可选）", "不硬冲"],
          steps: ["情景演练 → 人人做一遍减速走呼吸"],
          errors: [
            {
              wrong: "岔气仍加速硬撑",
              fix: "明确课堂规则：不适必须减速并举手"
            }
          ],
          dose: "1–2 分钟",
          safety: "持续剧痛或头晕立即停止，通知教练。"
        }
      ],
      closing: "本课强调：有节奏呼吸。下节：轻松配速（说话测试）。",
      intensityNote: "中低；2–3 年级全程可用 3-3。"
    }
  },
  {
    id: 4,
    title: "轻松配速",
    duration: 45,
    flowMinutes: { warmup: 10, special: 28, stretch: 5, summary: 2 },
    focus: ["说话测试", "轻松配速"],
    goal: "学会用「说话测试」控制轻松有氧配速，避免开局过快",
    student: {
      knowledge: [
        "说话测试：跑步时能完整说一句话，说明配速大致合适",
        "说不出话、只能单字喘气 → 太快，需要减速",
        "长跑开局宁慢勿快，把体力留在后半程"
      ],
      drills: [
        {
          name: "说话测试走跑",
          focus: true,
          dose: "3 组 × 2–3 分钟（边跑边与同伴说一句完整话）",
          rest: "组间走 1 分钟"
        },
        {
          name: "匀速圈 / 匀速往返",
          focus: true,
          dose: "2 组 × 约 400–600 米（或 3–4 分钟）",
          rest: "组间走 2 分钟"
        },
        {
          name: "开局过快纠错体验",
          focus: false,
          dose: "1 次：前 50 米故意偏快 → 感受后半吃力 → 对比正确开局",
          rest: "充分走休"
        }
      ],
      summaryLine: "本课完成：轻松配速与说话测试"
    },
    coach: {
      objectives: {
        knowledge: "理解说话测试的含义及开局不宜过快。",
        skill: "能在持续几分钟跑中基本维持可说话的配速。",
        attitude: "愿意放慢，不与同学盲目比快。"
      },
      keyPoints: "说话测试；匀速；开局控制",
      hardPoints: "同伴一加速就跟着冲；说完话就忘了控速",
      flow: {
        warmup: "标准热身。",
        special: "说话测试练习 → 匀速持续 → 开局过快对比。",
        stretch: "常规。",
        summary: "「能说话就不算太快」；预告轻落地。"
      },
      drills: [
        {
          name: "说话测试走跑",
          focus: true,
          core: ["两人一组轮流说完整短句", "说不出就共同减速", "保持放松跑姿与呼吸"],
          steps: ["讲解规则 → 示范 → 3 组"],
          errors: [
            {
              wrong: "为了说话停下来",
              fix: "要求边跑边说，说不清就减速而非站住"
            }
          ],
          dose: "3×2–3 分钟",
          safety: "观察面色；过红过喘立即降强度。"
        },
        {
          name: "匀速圈 / 匀速往返",
          focus: true,
          core: ["前后半程速度接近", "中途做一次说话测试自查"],
          steps: ["设标志 → 2 组持续跑；教练报分段感觉"],
          errors: [
            {
              wrong: "前快后崩",
              fix: "前 1 分钟强制跟教练配速"
            }
          ],
          dose: "2×400–600 米或 3–4 分钟",
          safety: "低年级缩短距离。"
        },
        {
          name: "开局过快纠错体验",
          focus: false,
          core: ["体会错误开局的代价", "对比正确开局更轻松"],
          steps: ["故意快开 50 米体验 → 休息 → 正确开局对比"],
          errors: [{ wrong: "体验后仍习惯抢跑", fix: "下组指定「最后一名起」控制" }],
          dose: "1 次对比",
          safety: "体验组后必须充分走休。"
        }
      ],
      closing: "本课强调：能说话的配速。下节：轻落地与稳定步频。",
      intensityNote: "有氧中低；严禁比赛式冲刺。"
    }
  },
  {
    id: 5,
    title: "轻落地与稳定步频",
    duration: 45,
    flowMinutes: { warmup: 10, special: 28, stretch: 5, summary: 2 },
    focus: ["轻落地"],
    goal: "学会安静轻落地，保持稳定中等步频，区别于短跑小步跑冲刺感",
    student: {
      knowledge: [
        "长跑落地要轻、要静，减少「砸地」",
        "步频稳定即可，不必像短跑小步跑那样极高频率",
        "脚掌或中前掌柔和过渡，膝盖微屈缓冲"
      ],
      drills: [
        {
          name: "原地轻踏步（听声音）",
          focus: true,
          dose: "3 组 × 30 秒，越轻越好",
          rest: "组间 20 秒"
        },
        {
          name: "安静跑 80–100 米",
          focus: true,
          dose: "4 组 × 80–100 米",
          rest: "组间走回"
        },
        {
          name: "稳定节奏持续跑 3–4 分钟",
          focus: false,
          dose: "1–2 组",
          rest: "组间走 2 分钟"
        }
      ],
      summaryLine: "本课完成：轻落地与稳定节奏"
    },
    coach: {
      objectives: {
        knowledge: "知道长跑落地应轻柔，步频稳定而非短跑极高频。",
        skill: "能在短距离跑中明显降低落地声响并保持节奏。",
        attitude: "关注自身动作质量，不比谁砸地更响。"
      },
      keyPoints: "轻、静、稳",
      hardPoints: "全脚掌砸地；刻意学短跑高频小步",
      flow: {
        warmup: "标准热身，踝关节充分活动。",
        special: "原地听声 → 安静跑 → 短时持续。",
        stretch: "加重小腿。",
        summary: "「跑得轻才跑得久」；预告安全与岔气复习。"
      },
      drills: [
        {
          name: "原地轻踏步",
          focus: true,
          core: ["膝盖微屈", "脚掌轻触地", "听自己脚步声变小"],
          steps: ["闭眼/低头听声对比重踏与轻踏 → 3 组"],
          errors: [
            {
              wrong: "踮脚尖过度紧张",
              fix: "允许自然中前掌，强调放松而非一直踮"
            }
          ],
          dose: "3×30 秒",
          safety: "踝不稳者降低要求，改为慢走提踵。"
        },
        {
          name: "安静跑 80–100 米",
          focus: true,
          core: ["把轻踏带到行进", "配速轻松", "目视前方"],
          steps: ["示范 → 4 组；教练在旁听脚步声反馈"],
          errors: [
            {
              wrong: "为了轻而碎步僵硬",
              fix: "恢复自然步幅，只改落地软硬"
            }
          ],
          dose: "4×80–100 米",
          safety: "单向。"
        },
        {
          name: "稳定节奏持续跑",
          focus: false,
          core: ["步频均匀", "结合说话测试"],
          steps: ["1–2 组 3–4 分钟"],
          errors: [{ wrong: "中途节奏忽快忽慢", fix: "跟着教练拍子或音乐节拍" }],
          dose: "1–2 组",
          safety: "低年级可走跑结合。"
        }
      ],
      closing: "本课强调：轻落地。下节：岔气、补水与安全。",
      intensityNote: "中低；质量优先。"
    }
  },
  {
    id: 6,
    title: "岔气、补水与安全",
    duration: 45,
    flowMinutes: { warmup: 10, special: 28, stretch: 5, summary: 2 },
    focus: ["安全常识"],
    goal: "掌握岔气处理、热身充分、补水与不空腹猛冲等安全要点",
    student: {
      knowledge: [
        "热身要够：关节 + 动态拉伸 + 轻松慢跑后再进入主项",
        "岔气：减速走、深慢呼气，不要硬撑；持续不适告诉教练",
        "补水：课前少量饮水；课中口渴可小口补，不一次灌太多",
        "不建议空腹猛冲，也不宜刚吃完大餐立刻长跑"
      ],
      drills: [
        {
          name: "安全口诀复述",
          focus: true,
          dose: "结对背诵 / 课堂提问",
          rest: "—"
        },
        {
          name: "热身质量自查跑",
          focus: true,
          dose: "充分热身后轻松跑 4–5 分钟，对比「未热透」的不适感讨论",
          rest: "—"
        },
        {
          name: "岔气情景再练",
          focus: false,
          dose: "全班演练 1 次标准处理流程",
          rest: "—"
        }
      ],
      summaryLine: "本课完成：长跑安全常识"
    },
    coach: {
      objectives: {
        knowledge: "记住热身、岔气、补水、饮食节奏等安全要点。",
        skill: "能正确执行岔气处理流程，并完成热身后的轻松跑。",
        attitude: "把安全放在成绩前面，敢于报告不适。"
      },
      keyPoints: "热身充分；岔气处理；合理补水",
      hardPoints: "嫌热身烦；不适硬撑",
      flow: {
        warmup: "把热身本身作为教学内容，讲清「为什么」。",
        special: "口诀 → 热身后轻松跑 → 岔气演练；可穿插问答。",
        stretch: "常规。",
        summary: "安全第一；预告 50×8 规则。"
      },
      drills: [
        {
          name: "安全口诀复述",
          focus: true,
          core: ["热身够", "岔气减速说", "小口补水", "不空腹猛冲"],
          steps: ["讲解故事化案例 → 结对背 → 抽查"],
          errors: [
            {
              wrong: "只会点头背不出",
              fix: "做成四句口令，拍手记"
            }
          ],
          dose: "课堂",
          safety: "无"
        },
        {
          name: "热身质量自查跑",
          focus: true,
          core: ["热身后身体发热微微出汗再主项", "轻松跑结合呼吸与说话测试"],
          steps: ["强调热身标准 → 轻松跑 4–5 分钟 → 讨论感觉"],
          errors: [
            {
              wrong: "热身走过场",
              fix: "关节与动态拉伸计数检查"
            }
          ],
          dose: "4–5 分钟",
          safety: "天气热注意防晒与补水。"
        },
        {
          name: "岔气情景再练",
          focus: false,
          core: ["流程熟练：减速→深呼→报告"],
          steps: ["角色扮演：学员模拟岔气，同伴提醒流程"],
          errors: [{ wrong: "演练当玩笑", fix: "严肃强调真实场景要用" }],
          dose: "1 次",
          safety: "无"
        }
      ],
      closing: "本课强调：安全习惯。下节：50米×8 规则与场地。",
      intensityNote: "低强度认知课；跑量控制。"
    }
  },
  {
    id: 7,
    title: "50米×8 规则与场地",
    duration: 45,
    flowMinutes: { warmup: 10, special: 28, stretch: 5, summary: 2 },
    focus: ["50×8规则"],
    goal: "理解小学体测 50米×8 往返跑规则、场地布置与常见犯规",
    student: {
      knowledge: [
        "50米×8：两端线相距 50 米，共跑 8 趟（折返），合计约 400 米",
        "折返时必须踩线或过线再转身，踩空/未到线折返通常犯规或无效",
        "听到口令再出发；跑动中不抢道推挤；到终点按裁判/教练示意停止"
      ],
      drills: [
        {
          name: "场地与踩线认知",
          focus: true,
          dose: "每人走/慢跑过线折返演示 4–6 次",
          rest: "—"
        },
        {
          name: "50×2 规则练习",
          focus: true,
          dose: "3 组 × 50米×2（一来一回）",
          rest: "组间 60–90 秒"
        },
        {
          name: "犯规案例辨别",
          focus: false,
          dose: "看示范：未踩线、抢跑、窜道",
          rest: "—"
        }
      ],
      summaryLine: "本课完成：50×8 规则认知"
    },
    coach: {
      objectives: {
        knowledge: "清楚 50×8 的距离构成、踩线要求与常见犯规。",
        skill: "能在 50×2 练习中稳定完成踩线折返。",
        attitude: "尊重规则，不投机取巧漏踩线。"
      },
      keyPoints: "踩线/过线；8 趟构成；有序起跑",
      hardPoints: "紧张漏踩线；搞不清趟数",
      flow: {
        warmup: "标准热身。",
        special: "讲规则画场地 → 踩线认知 → 50×2 → 犯规辨别。",
        stretch: "常规。",
        summary: "「先踩线再转身」；预告转弯技巧。"
      },
      drills: [
        {
          name: "场地与踩线认知",
          focus: true,
          core: [
            "两端标志清晰",
            "脚掌明显触线或过线",
            "教练可用标志碟/线绳标记"
          ],
          steps: ["布置场地 → 慢速演示正确踩线 → 学员轮流"],
          errors: [
            {
              wrong: "脚在线前就转身",
              fix: "在线外贴醒目标志，要求踩到标志"
            }
          ],
          dose: "4–6 次",
          safety: "折返点周围无障碍；防滑。"
        },
        {
          name: "50×2 规则练习",
          focus: true,
          core: ["完整一来一回", "每次折返检查踩线", "配速偏稳不冲刺"],
          steps: ["示范计趟方法 → 3 组"],
          errors: [
            {
              wrong: "数不清趟",
              fix: "教练或同伴喊趟数；学员心中默数"
            }
          ],
          dose: "3×50米×2",
          safety: "分道或分批；防碰撞。"
        },
        {
          name: "犯规案例辨别",
          focus: false,
          core: ["未踩线、抢跑、推人窜道"],
          steps: ["教练演示错误 → 学员举手判断"],
          errors: [{ wrong: "觉得「差一点没事」", fix: "强调体测按规则判" }],
          dose: "课堂",
          safety: "无"
        }
      ],
      closing: "本课强调：规则与踩线。下节：转弯技巧（重点）。",
      intensityNote: "中低；本课不要求完整 50×8。"
    }
  },
  {
    id: 8,
    title: "50米×8 转弯技巧",
    duration: 50,
    flowMinutes: { warmup: 10, special: 33, stretch: 5, summary: 2 },
    focus: ["折返转弯"],
    goal: "掌握往返跑折返：提前减速、降低重心、踩线转身、小步再加速",
    student: {
      knowledge: [
        "最后 3–5 米开始减速，不要全速撞进折返点",
        "外侧脚支撑、重心降低，踩线后快速转身",
        "转身后再用 2–3 步小步加速拉开，不要原地空转或绕大圈"
      ],
      drills: [
        {
          name: "折返分解：减速→踩线→转身",
          focus: true,
          dose: "6–8 次（短距离 15–20 米折返）",
          rest: "每次走回"
        },
        {
          name: "50×2 转弯质量练",
          focus: true,
          dose: "4 组 × 50米×2",
          rest: "组间 75–90 秒"
        },
        {
          name: "错误对比（急停撞线 / 绕大圈）",
          focus: false,
          dose: "集体观摩 1–2 次",
          rest: "—"
        }
      ],
      summaryLine: "本课完成：50×8 转弯技巧"
    },
    coach: {
      objectives: {
        knowledge: "知道折返应「减速—踩线—转身—再加速」的顺序。",
        skill: "能在 50×2 中较稳定完成低重心踩线转身。",
        attitude: "追求转弯质量，不靠蛮力冲撞折返点。"
      },
      keyPoints: "提前减速；踩线转身；小步再加速",
      hardPoints: "冲进折返急停摔倒风险；转身绕大圈浪费距离",
      flow: {
        warmup: "充分活动膝踝；加 2 次短距离减速刹车练习。",
        special: "分解折返 → 50×2 质量练 → 错误对比。本课可延长专项至约 33 分钟。",
        stretch: "膝踝与大腿前后侧。",
        summary: "口令「慢一点踩线转」；预告体力分配。"
      },
      drills: [
        {
          name: "折返分解：减速→踩线→转身",
          focus: true,
          core: [
            "距线 3–5 米降速",
            "外侧脚支撑，重心下降",
            "触线后转体面向回程",
            "前 2–3 步小而快再拉开"
          ],
          steps: [
            "原地模拟转身脚步",
            "15–20 米慢速完整折返",
            "稍加快但仍强调质量",
            "个别纠错"
          ],
          errors: [
            {
              wrong: "全速撞线急停",
              fix: "在 5 米处设减速标志旗"
            },
            {
              wrong: "未踩线就转",
              fix: "脚必须踩到线/标志，同伴监督"
            },
            {
              wrong: "转身绕大圈",
              fix: "要求转身后第一步仍靠近折返线"
            }
          ],
          dose: "6–8 次短折返",
          safety: "地面防滑；禁止故意碰撞；分批。"
        },
        {
          name: "50×2 转弯质量练",
          focus: true,
          core: ["把分解动作放到完整 50 米", "配速中等，质量优先"],
          steps: ["4 组；每组反馈一次转弯评分（优/中/差）"],
          errors: [
            {
              wrong: "去程冲太快导致转弯失控",
              fix: "限制去程为 7–8 成速"
            }
          ],
          dose: "4×50米×2；组间 75–90 秒",
          safety: "分道；观察膝关节不适。"
        },
        {
          name: "错误对比",
          focus: false,
          core: ["识别急停撞线与绕大圈"],
          steps: ["教练演示 → 学员指出问题"],
          errors: [{ wrong: "笑场不认真看", fix: "提问记要点再练" }],
          dose: "1–2 次",
          safety: "演示急停时教练控制速度，防滑倒。"
        }
      ],
      closing: "本课强调：转弯质量。下节：50×8 体力分配。",
      intensityNote: "中等；低年级减少组数，先求安全转身。"
    }
  },
  {
    id: 9,
    title: "50米×8 体力分配",
    duration: 50,
    flowMinutes: { warmup: 10, special: 33, stretch: 5, summary: 2 },
    focus: ["体力分配"],
    goal: "学会 50×8 的体力分配：开局留力、中段匀速、末段再提",
    student: {
      knowledge: [
        "建议：第 1 趟约 8 成速，不要全力炸出去",
        "中间约 4–5 趟尽量匀速，结合转弯质量",
        "最后 1–2 趟再适当提速；避免第 3–4 趟就垮掉"
      ],
      drills: [
        {
          name: "分段配速喊拍练习（50×4）",
          focus: true,
          dose: "2 组 × 50米×4（教练喊：稳、匀、再提）",
          rest: "组间 2–3 分钟"
        },
        {
          name: "前快后崩 vs 匀速对比",
          focus: true,
          dose: "对比各 1 次 50×4 或讨论+半程体验",
          rest: "充分休息"
        },
        {
          name: "呼吸 + 分配结合",
          focus: false,
          dose: "1 组 50×4，边跑边维持呼吸节奏",
          rest: "—"
        }
      ],
      summaryLine: "本课完成：50×8 体力分配意识"
    },
    coach: {
      objectives: {
        knowledge: "理解「开局留力、中段匀、末段提」的分配策略。",
        skill: "能在 50×4 中表现出相对均匀的分段节奏。",
        attitude: "接受暂时不快，为完整 8 趟负责。"
      },
      keyPoints: "8 成开局；中段匀速；末段再提",
      hardPoints: "第 1 趟过猛；第 3–4 趟掉速崩盘",
      flow: {
        warmup: "标准热身 + 1 次轻松 50 米。",
        special: "分配讲解 → 50×4 喊拍 → 对比体验 → 呼吸结合。",
        stretch: "常规。",
        summary: "记住分配口诀；预告完整 50×8。"
      },
      drills: [
        {
          name: "分段配速喊拍练习（50×4）",
          focus: true,
          core: [
            "第 1 趟 8 成",
            "第 2–3 趟保持",
            "第 4 趟可略提",
            "转弯仍要质量"
          ],
          steps: ["讲口诀 → 教练旁喊分段 → 2 组"],
          errors: [
            {
              wrong: "第 1 趟就 10 成",
              fix: "指定跟随配速员或教练"
            },
            {
              wrong: "中段突然浪速忽快忽慢",
              fix: "用呼吸节奏锁住步频"
            }
          ],
          dose: "2×50米×4；组间 2–3 分钟",
          safety: "充分间歇；面色异常即停。"
        },
        {
          name: "前快后崩 vs 匀速对比",
          focus: true,
          core: ["用身体感受错误分配的代价"],
          steps: ["快开半程体验 → 休息 → 匀速半程对比 → 小结"],
          errors: [
            {
              wrong: "对比后仍好面子抢第一趟",
              fix: "下节测评强调完整表现而非第一趟"
            }
          ],
          dose: "各 1 次或半程",
          safety: "快开体验后强制走休。"
        },
        {
          name: "呼吸 + 分配结合",
          focus: false,
          core: ["分配不破坏呼吸节奏"],
          steps: ["1 组 50×4 综合"],
          errors: [{ wrong: "一提速就憋气", fix: "提速仍出声呼吸" }],
          dose: "1 组",
          safety: "同前"
        }
      ],
      closing: "本课强调：体力分配。下节：完整 50×8 组合。",
      intensityNote: "中等偏强；低年级以 50×4 为主，不勉强完整 8 趟。"
    }
  },
  {
    id: 10,
    title: "50米×8 完整组合",
    duration: 50,
    flowMinutes: { warmup: 10, special: 33, stretch: 5, summary: 2 },
    focus: ["50×8完整"],
    goal: "把转弯、体力分配与呼吸组合，完成较完整的 50米×8",
    student: {
      knowledge: [
        "完整流程：热身充分 → 按分配跑 8 趟 → 每次折返踩线 → 维持呼吸",
        "可先 50×4 热身激活，再正式 50×8（低年级可用两次 50×4 代替一次 8 趟）"
      ],
      drills: [
        {
          name: "50×4 激活",
          focus: false,
          dose: "1 组 × 50米×4（中低强度）",
          rest: "休息 3 分钟"
        },
        {
          name: "50米×8 正式组合",
          focus: true,
          dose: "1–2 组（第 2 组可降强度或改为 50×6）",
          rest: "组间 4–5 分钟"
        },
        {
          name: "复盘：趟数 / 转弯 / 分配",
          focus: true,
          dose: "个人或结对三句复盘",
          rest: "—"
        }
      ],
      summaryLine: "本课完成：50×8 完整组合"
    },
    coach: {
      objectives: {
        knowledge: "能口述完整 50×8 的技术与分配要点。",
        skill: "在保护下完成至少 1 次较完整的 50×8（或等价拆分）。",
        attitude: "认真完成全流程，复盘改进点。"
      },
      keyPoints: "规则 + 转弯 + 分配一次性整合",
      hardPoints: "后半程动作变形；漏踩线；乱趟数",
      flow: {
        warmup: "完整热身，确保膝踝激活。",
        special: "50×4 激活 → 正式 50×8 → 复盘。记录掌握情况。",
        stretch: "充分拉伸。",
        summary: "肯定坚持；预告分段跑心理（长距离）。"
      },
      drills: [
        {
          name: "50×4 激活",
          focus: false,
          core: ["唤醒转弯与踩线", "强度中低"],
          steps: ["1 组激活"],
          errors: [{ wrong: "激活就拼命", fix: "明确「热身组」" }],
          dose: "1×50米×4",
          safety: "分批。"
        },
        {
          name: "50米×8 正式组合",
          focus: true,
          core: [
            "8 趟踩线",
            "开局 8 成、中段匀、末段提",
            "转弯质量",
            "维持呼吸，不崩盘硬憋"
          ],
          steps: [
            "重申口诀",
            "正式 1 组计时或计数",
            "根据状态决定是否第 2 组降强度",
            "低年级可两次 50×4"
          ],
          errors: [
            {
              wrong: "后 3 趟漏踩线",
              fix: "同伴在折返点提示「踩！」"
            },
            {
              wrong: "中段崩掉走路过多",
              fix: "允许调整为目标完成，下次再追速度"
            }
          ],
          dose: "1–2 组；组间 4–5 分钟",
          safety: "重点防摔倒与推挤；异常立即终止。"
        },
        {
          name: "复盘",
          focus: true,
          core: ["各说一个优点与一个改进点"],
          steps: ["结对 1 分钟 → 抽查"],
          errors: [{ wrong: "只抱怨累", fix: "引导到具体技术点" }],
          dose: "课堂",
          safety: "无"
        }
      ],
      closing: "本课强调：完整组合。下节进入持续长跑：分段跑心理。",
      intensityNote: "本课偏强；2–3 年级拆分完成，勿强求计时成绩。"
    }
  },
  {
    id: 11,
    title: "分段跑心理",
    duration: 50,
    flowMinutes: { warmup: 10, special: 33, stretch: 5, summary: 2 },
    focus: ["分段心理"],
    goal: "学会把长距离切成小目标（到旗杆/再一圈），减少恐惧与放弃",
    student: {
      knowledge: [
        "把「好远」变成「先跑到那个标志」",
        "每到一个分段就重新设定下一个小目标",
        "累的时候用呼吸节奏和说话测试自查，而不是直接停住放弃"
      ],
      drills: [
        {
          name: "标志分段跑（4–6 个标志）",
          focus: true,
          dose: "2 组（每组串联多个短分段，合计约 600–1000 米）",
          rest: "组间走 2–3 分钟"
        },
        {
          name: "「再一圈」心理口令练习",
          focus: true,
          dose: "持续 5–6 分钟，每隔 1 分钟换小目标",
          rest: "—"
        },
        {
          name: "50×4 保持（复习）",
          focus: false,
          dose: "1 组",
          rest: "—"
        }
      ],
      summaryLine: "本课完成：分段跑心理"
    },
    coach: {
      objectives: {
        knowledge: "理解分段目标能降低长跑心理压力。",
        skill: "能在持续跑中按标志完成小目标串联。",
        attitude: "遇到难受先调目标与呼吸，不轻易放弃。"
      },
      keyPoints: "小目标串联；正向自我对话",
      hardPoints: "一累就全盘放弃；盯着总距离害怕",
      flow: {
        warmup: "标准热身。",
        special: "布置标志 → 分段跑 → 口令持续 → 短复习 50×4。",
        stretch: "常规。",
        summary: "「一节一节跑」；预告 800–1500 米。"
      },
      drills: [
        {
          name: "标志分段跑",
          focus: true,
          core: ["每个标志是一个完成点", "到点可微笑点头再出发", "配速轻松"],
          steps: ["摆 4–6 标志 → 讲解 → 2 组串联"],
          errors: [
            {
              wrong: "到标志就彻底停下聊天",
              fix: "允许 2 步走过渡，但要继续"
            }
          ],
          dose: "2 组约 600–1000 米总量",
          safety: "标志不影响奔跑路线安全。"
        },
        {
          name: "「再一圈」心理口令练习",
          focus: true,
          core: ["教练定时给新目标", "学员跟读短口令"],
          steps: ["5–6 分钟持续；每分钟换目标"],
          errors: [
            {
              wrong: "中途情绪崩溃",
              fix: "降速走跑结合，完成到下一个标志即表扬"
            }
          ],
          dose: "5–6 分钟",
          safety: "观察情绪与呼吸。"
        },
        {
          name: "50×4 保持",
          focus: false,
          core: ["保持转弯与分配"],
          steps: ["1 组复习"],
          errors: [{ wrong: "复习组过分认真拼成绩", fix: "定位为保持性练习" }],
          dose: "1 组",
          safety: "同前"
        }
      ],
      closing: "本课强调：分段心理。下节：800–1500 米持续跑。",
      intensityNote: "中等有氧；强调完成感。"
    }
  },
  {
    id: 12,
    title: "800–1500 米持续跑",
    duration: 50,
    flowMinutes: { warmup: 10, special: 33, stretch: 5, summary: 2 },
    focus: ["中距离持续跑"],
    goal: "在说话测试配速下完成 800–1500 米持续跑（年级分层）",
    student: {
      knowledge: [
        "2–3 年级目标约 800 米（可走跑结合）",
        "4–6 年级目标约 1000–1500 米，尽量连续跑",
        "使用分段标志与呼吸节奏，中途不无故长停"
      ],
      drills: [
        {
          name: "配速确认 2–3 分钟",
          focus: false,
          dose: "1 组说话测试跑",
          rest: "走 1 分钟"
        },
        {
          name: "主项持续跑 800–1500 米",
          focus: true,
          dose: "按年级完成对应距离",
          rest: "结束后走 3–5 分钟放松"
        },
        {
          name: "放松跑姿复盘",
          focus: true,
          dose: "指出自己是否耸肩/憋气/开局过快",
          rest: "—"
        }
      ],
      summaryLine: "本课完成：800–1500 米持续跑"
    },
    coach: {
      objectives: {
        knowledge: "知道本课年级对应的距离目标。",
        skill: "在既定配速下完成目标距离（允许低年级走跑结合）。",
        attitude: "坚持完成，为同学加油。"
      },
      keyPoints: "持续完成；配速可控；分层目标",
      hardPoints: "开局过快；中途放弃；高年级互相比速破坏配速",
      flow: {
        warmup: "完整热身。",
        special: "配速确认 → 主项持续 → 复盘。可设分段标志。",
        stretch: "充分。",
        summary: "表扬完成；预告 3 公里。"
      },
      drills: [
        {
          name: "配速确认",
          focus: false,
          core: ["说话测试通过再进入主项"],
          steps: ["2–3 分钟"],
          errors: [{ wrong: "确认段就比赛", fix: "解散追逐，跟教练" }],
          dose: "1 组",
          safety: "热透再开始。"
        },
        {
          name: "主项持续跑 800–1500 米",
          focus: true,
          core: [
            "2–3 年级约 800 米走跑结合可接受",
            "4–6 年级 1000–1500 米连续优先",
            "分段心理 + 呼吸",
            "不无故长停"
          ],
          steps: [
            "宣布分组目标",
            "出发（可分波次）",
            "途中鼓励与安全观察",
            "到点后继续走放松"
          ],
          errors: [
            {
              wrong: "前 200 米冲刺",
              fix: "前段强制跟配速员"
            },
            {
              wrong: "掉队后羞愧停下",
              fix: "允许走，目标改为「到下一个标志」"
            }
          ],
          dose: "1 次主项",
          safety: "备水；观察头晕恶心；极端天气调整计划。"
        },
        {
          name: "放松跑姿复盘",
          focus: true,
          core: ["三问：耸肩？憋气？开局过快？"],
          steps: ["举手自查 → 教练总结共性问题"],
          errors: [{ wrong: "不愿承认开局过快", fix: "用分段时间客观反馈" }],
          dose: "课堂",
          safety: "无"
        }
      ],
      closing: "本课强调：中距离持续。下节：3 公里。",
      intensityNote: "有氧中等；完成优先于配速成绩。"
    }
  },
  {
    id: 13,
    title: "3 公里长跑",
    duration: 60,
    flowMinutes: { warmup: 12, special: 40, stretch: 5, summary: 3 },
    focus: ["3公里"],
    goal: "完成约 3 公里：2–3 年级走跑结合，4–6 年级尽量连续跑",
    student: {
      knowledge: [
        "3 公里是有氧耐力课，目标是完成而不是拼命配速",
        "2–3 年级：走跑结合，按标志分段完成",
        "4–6 年级：尽量连续跑，实在难受可短走调整后再跑"
      ],
      drills: [
        {
          name: "分段热身跑",
          focus: false,
          dose: "6–8 分钟轻松跑/走跑",
          rest: "—"
        },
        {
          name: "3 公里主项（分层）",
          focus: true,
          dose: "约 3000 米（场地圈数按实际换算）",
          rest: "结束后走放松 5 分钟"
        },
        {
          name: "完成感复盘",
          focus: true,
          dose: "分享：哪个分段最难，如何挺过",
          rest: "—"
        }
      ],
      summaryLine: "本课完成：3 公里分层长跑"
    },
    coach: {
      objectives: {
        knowledge: "明确 3 公里课的分层完成标准。",
        skill: "在安全前提下完成约 3 公里运动量。",
        attitude: "互相鼓励，不嘲笑走跑结合的同学。"
      },
      keyPoints: "完成 3 公里；分层；安全",
      hardPoints: "恐惧距离；中途扎堆停；补给与情绪管理",
      flow: {
        warmup: "加长至约 12 分钟，确保充分。",
        special: "分段热身跑 → 3 公里主项（可多波次）→ 复盘。专项约 40 分钟。",
        stretch: "全面拉伸。",
        summary: "庆祝完成；预告 3–5 公里进阶课。"
      },
      drills: [
        {
          name: "分段热身跑",
          focus: false,
          core: ["把心率提起来但不累", "复习说话测试"],
          steps: ["6–8 分钟"],
          errors: [{ wrong: "热身不足就上主项", fix: "检查微出汗再开始" }],
          dose: "6–8 分钟",
          safety: "补水。"
        },
        {
          name: "3 公里主项（分层）",
          focus: true,
          core: [
            "按场地换算圈数/往返",
            "低年级走跑结合合法",
            "高年级连续优先",
            "教练沿线设鼓励点"
          ],
          steps: [
            "说明路线与分层规则",
            "分波出发",
            "记录大致完成情况",
            "到点必须继续走放松，禁止马上坐下猛休息"
          ],
          errors: [
            {
              wrong: "不会换算圈数跑少/跑多",
              fix: "每圈打卡或同伴报圈"
            },
            {
              wrong: "终点冲刺后立刻躺下",
              fix: "强制走 5 分钟再拉伸"
            }
          ],
          dose: "约 3000 米",
          safety: "备水与阴凉观察点；有病史学员降距；天气恶劣改室内方案。"
        },
        {
          name: "完成感复盘",
          focus: true,
          core: ["强化「我能完成」的体验"],
          steps: ["圆圈分享 2–3 个典型"],
          errors: [{ wrong: "只谈名次", fix: "引导谈策略与坚持" }],
          dose: "课堂",
          safety: "无"
        }
      ],
      closing: "本课强调：3 公里完成。下节：3–5 公里（高年级可选 5 公里）。",
      intensityNote: "课时约 60 分钟；强度因人而异；绝不羞辱走的学生。"
    }
  },
  {
    id: 14,
    title: "3–5 公里进阶",
    duration: 70,
    flowMinutes: { warmup: 12, special: 50, stretch: 5, summary: 3 },
    focus: ["3–5公里"],
    goal: "在 3 公里基础上进阶：多数完成 3 公里加强质量；5–6 年级可选约 5 公里",
    student: {
      knowledge: [
        "本课默认目标仍是高质量完成约 3 公里",
        "5–6 年级身体与意愿允许时，可挑战约 5 公里",
        "2–4 年级不强制 5 公里，走跑结合完成 3 公里即达标"
      ],
      drills: [
        {
          name: "分层目标确认",
          focus: false,
          dose: "课前确认自己是 3 公里组还是 5 公里挑战组",
          rest: "—"
        },
        {
          name: "主项 3 公里或约 5 公里",
          focus: true,
          dose: "按报名分组完成",
          rest: "结束后走放松 5–8 分钟"
        },
        {
          name: "补给与恢复小结",
          focus: true,
          dose: "小口补水、拉伸、分享主观感受（RPE）",
          rest: "—"
        }
      ],
      summaryLine: "本课完成：3–5 公里分层进阶"
    },
    coach: {
      objectives: {
        knowledge: "清楚本课分层：3 公里达标，5 公里可选。",
        skill: "按自身组别完成对应距离并做好放松恢复。",
        attitude: "量力选择，不盲目跟跑 5 公里。"
      },
      keyPoints: "分层自愿；完成与恢复；禁止攀比胁迫",
      hardPoints: "低年级硬跟 5 公里；高年级中途无计划崩盘",
      flow: {
        warmup: "约 12 分钟充分热身。",
        special: "确认分组 → 长距离主项（专项约 50 分钟）→ 恢复小结。",
        stretch: "全面，不省略。",
        summary: "肯定选择与坚持；预告综合测评。"
      },
      drills: [
        {
          name: "分层目标确认",
          focus: false,
          core: ["自愿 + 教练把关", "有不适史不得上 5 公里"],
          steps: ["举手分组 → 说明退出机制（可随时降组）"],
          errors: [
            {
              wrong: "被同伴起哄必须跑 5 公里",
              fix: "立即制止，强调自愿与安全"
            }
          ],
          dose: "课前",
          safety: "教练否决权。"
        },
        {
          name: "主项 3 公里或约 5 公里",
          focus: true,
          core: [
            "3 公里组：质量（呼吸、放松、分段）",
            "5 公里组：更保守开局，严格说话测试",
            "随时可降速或降组",
            "终点后继续走"
          ],
          steps: [
            "分波出发（5 公里组可早一波）",
            "沿线补给点小口饮水",
            "记录完成情况",
            "未完成者改为走完剩余以安全收场"
          ],
          errors: [
            {
              wrong: "5 公里组开局按比赛配速",
              fix: "前 1 公里强制轻松"
            },
            {
              wrong: "掉队羞愧抄近路回终点撒谎",
              fix: "强调诚实与安全，完成走距同样表扬"
            }
          ],
          dose: "3 或约 5 公里",
          safety: "必备水与观察；雷雨高温取消或改室内；疼痛立即停。"
        },
        {
          name: "补给与恢复小结",
          focus: true,
          core: ["小口补水", "拉伸", "用简单量表描述累的程度"],
          steps: ["统一走放松 → 拉伸 → 简短分享"],
          errors: [{ wrong: "猛灌水", fix: "示范小口多次" }],
          dose: "5–8 分钟+",
          safety: "恶心眩晕优先就医判断。"
        }
      ],
      closing: "本课强调：量力进阶。下节：综合测评（50×8 + 持续跑抽测）。",
      intensityNote: "约 70 分钟；5 公里仅 5–6 年级可选；低年级封顶约 3 公里走跑。"
    }
  },
  {
    id: 15,
    title: "综合测评",
    duration: 55,
    flowMinutes: { warmup: 10, special: 38, stretch: 5, summary: 2 },
    focus: ["综合测评"],
    goal: "抽测 50×8 关键技术与持续跑能力，并在学员表记录掌握情况",
    student: {
      knowledge: [
        "测评项目：呼吸节奏意识、50×8 转弯与体力分配、持续跑放松配速",
        "等级：未掌握 / 基本掌握 / 熟练掌握",
        "气氛：认真展示、为同学加油，不嘲笑"
      ],
      drills: [
        {
          name: "50米×8（或 50×4 代表）测评",
          focus: true,
          dose: "每人 1 次（低年级可用 50×4 代表关键技术）",
          rest: "按轮换"
        },
        {
          name: "持续跑抽测（600–1000 米）",
          focus: true,
          dose: "观察放松配速、呼吸与是否开局过快",
          rest: "按轮换"
        },
        {
          name: "要点口试（区别 / 呼吸 / 分配）",
          focus: true,
          dose: "简短问答",
          rest: "—"
        }
      ],
      summaryLine: "本课完成：长跑模块综合测评"
    },
    coach: {
      objectives: {
        knowledge: "回顾本模块长跑与 50×8 核心知识点。",
        skill: "在抽测中展示已学重点能力。",
        attitude: "认真测评，尊重同伴。"
      },
      keyPoints: "50×8 质量；持续跑配速；知识要点",
      hardPoints: "测评紧张变形；只顾速度忽略踩线与分配",
      flow: {
        warmup: "完整热身，保证测评安全。",
        special: "说明规则 → 轮换测评 → 学员版记录等级 → 集体总结。",
        stretch: "充分拉伸。",
        summary: "肯定进步；指出共性问题；鼓励课后巩固。"
      },
      drills: [
        {
          name: "50米×8（或 50×4 代表）测评",
          focus: true,
          core: [
            "看踩线与转弯",
            "看开局是否留力",
            "看后半是否崩盘",
            "低年级 50×4 也可评定关键技术"
          ],
          steps: [
            "讲测评标准",
            "分批进行",
            "教练在学员版勾选掌握情况",
            "允许紧张者一次重做关键折返"
          ],
          errors: [
            {
              wrong: "紧张漏踩线",
              fix: "提醒后重测折返段"
            },
            {
              wrong: "同学起哄",
              fix: "立即制止"
            }
          ],
          dose: "轮换",
          safety: "分批防撞；充分间歇。"
        },
        {
          name: "持续跑抽测",
          focus: true,
          core: ["放松配速", "呼吸", "开局控制", "跑姿不耸肩"],
          steps: ["600–1000 米观察；不必人人比成绩"],
          errors: [
            {
              wrong: "把抽测当比赛冲刺",
              fix: "重申评分看质量不是唯快"
            }
          ],
          dose: "轮换",
          safety: "同持续跑安全要求。"
        },
        {
          name: "要点口试",
          focus: true,
          core: [
            "长跑与短跑区别 2 点",
            "呼吸节奏",
            "50×8 分配口诀"
          ],
          steps: ["快速提问 → 记入综合印象"],
          errors: [{ wrong: "背不出来就全盘否定", fix: "引导关键词，鼓励为主" }],
          dose: "课堂",
          safety: "无"
        }
      ],
      closing:
        "本课强调：学期长跑入门回顾。表扬坚持与进步。后续可衔接跳绳/体能等模块，或巩固 50×8 与有氧跑。",
      intensityNote: "测评日强度适中；保证情绪安全；低年级减少项目或缩短距离。"
    }
  }
];

window.getEnduranceLesson = function (id) {
  const n = Number(id);
  return window.ENDURANCE_LESSONS.find(function (l) {
    return l.id === n;
  }) || null;
};
