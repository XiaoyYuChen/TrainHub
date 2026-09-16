/**
 * 小学生核心力量 · A / S / SS 三档课程
 * A 1–3年级 · S 4–5年级 · SS 6年级+
 * 组数 3–4 组：A/S 推荐 15–20–15 或 15–20–25–20；SS 推荐 20–25–20 或 20–25–25–20
 * 同一数据源驱动学员版 / 教练员版
 */
window.CORE_SHARED = {
  duration: 45,
  audience: "1–6年级",
  summaryDuration: 0,
  warmup: {
    duration: 10,
    joints: ["颈", "肩", "腰", "髋", "膝", "踝"],
    dynamic: [
      "提膝",
      "提胯",
      "K字拉伸",
      "最伟大拉伸",
      "弓步正压",
      "侧压"
    ],
    cardio: ["原地小碎步", "前后小碎步", "转髋跳", "胯下击掌", "开合跳"],
    cardioNote:
      "按顺序完成 1–2 组；转髋跳、开合跳幅度由小到大；组间走回 20–30 秒。1–2 年级开合跳可改开合踏步"
  },
  stretch: {
    duration: 5,
    parts: ["胸", "肩", "腰背", "髋屈肌", "大腿前侧", "大腿后侧", "小腿"]
  },
  masteryOptions: ["未掌握", "基本掌握", "熟练掌握"]
};

window.CORE_DRILL_BANK = {
  平板支撑: {
    core: [
      "肘或手撑，肩在支撑点正上方，身体一条线",
      "轻轻收腹、夹臀，不塌腰、不耸肩、不憋气",
      "低年级优先跪姿平板（肩—髋—膝斜线）"
    ],
    steps: [
      "先跪姿找一条线，再按能力决定是否伸膝",
      "按本课秒数完成，中途变形立即跪姿续完或休息"
    ],
    errors: [
      { wrong: "塌腰或屁股过高", fix: "侧面示范；口令「尾巴骨收一点」" },
      { wrong: "憋气、肩耸到耳朵", fix: "边撑边小声数数；肩下沉" }
    ],
    safety: "肘下垫子；腰痛立刻改为跪姿或结束该组；禁止趴人加压。"
  },
  躺底双抬腿: {
    core: [
      "仰卧，双手可轻按身侧或垫在臀下，双腿并拢缓抬、缓放",
      "下放时腰不离开垫，放不稳就屈膝或少放低",
      "呼气抬起，吸气慢放"
    ],
    steps: ["先屈膝抬腿体会腰贴垫 → 再伸膝按次数完成"],
    errors: [
      { wrong: "腿放下时腰拱起拍垫", fix: "只放到 45° 或改屈膝" },
      { wrong: "甩腿借惯性", fix: "口令「3 秒抬、3 秒放」" }
    ],
    safety: "腰始终可插入一只手的感觉则立刻屈膝；禁止脚踝负重。"
  },
  小飞机: {
    core: [
      "俯卧，手脚同时离垫，像小燕飞 / 小飞机，肚脐仍轻贴垫",
      "眼睛看垫前方，不要过度抬头后仰",
      "可静力保持，也可小幅度慢起慢落"
    ],
    steps: ["先只抬手 4 次，再手脚同抬", "按次数完成，落地要轻"],
    errors: [
      { wrong: "头抬很高、腰过度反弓", fix: "鼻子对垫，口令「长长的飞机」" },
      { wrong: "只甩腿不抬手", fix: "先练抬手，再手脚一起" }
    ],
    safety: "髋下可薄垫；腰痛者只抬手或缩短次数。"
  },
  蹬自行车: {
    core: [
      "仰卧，双腿在空中交替蹬车，膝保持微屈",
      "低年级肩可不离垫；稳后再让肩胛轻离垫、对侧肘膝相向",
      "慢控，腰不左右乱摆，不靠甩肘"
    ],
    steps: ["分解：先空中蹬腿 → 再按能力加对侧转肩", "按次数完成"],
    errors: [
      { wrong: "手拉头、肘乱甩", fix: "手轻触耳侧或放身侧，身体小幅度转" },
      { wrong: "腿完全伸直砸垫", fix: "膝保持微屈，脚不碰垫" }
    ],
    safety: "颈部酸则肩不离垫只蹬腿；禁止比谁蹬得快。"
  },
  动物爬行: {
    core: [
      "以熊爬为主：手脚撑地、膝离垫，对侧手脚交替前移",
      "背平、核心收紧，屁股不过高、不塌腰",
      "1–2 年级可膝着地爬或改短距离；也可穿插蟹爬（胸朝上、手脚撑地）换口气"
    ],
    steps: [
      "先原地撑稳 3 秒找背平",
      "再爬规定步数，分道进行",
      "一组结束走回起点"
    ],
    errors: [
      { wrong: "塌腰或屁股耸得很高", fix: "口令「背像桌子」；缩短步距" },
      { wrong: "同侧手脚一起动、扭来扭去", fix: "口令「左手右脚、右手左脚」" }
    ],
    safety: "地面防滑、一人一道；腕膝不适改跪爬；禁止互相追逐踩手。"
  },
  俄罗斯转体: {
    core: [
      "坐姿稍后倾，胸挺起，双手体前合掌或轻握，左右转肩",
      "转的是肩和胸，不是只甩胳膊；脚可点地降低难度",
      "核心收紧，眼睛随手转向"
    ],
    steps: ["先双脚点地转肩 → 稳定后再尝试脚离地", "左右合计按次数完成"],
    errors: [
      { wrong: "弓背含胸左右晃", fix: "胸口朝前上方，像坐在斜板上" },
      { wrong: "手幅度很大但腰不动", fix: "双手贴在胸口，先转肩" }
    ],
    safety: "后倾角度小；头晕或腰不适立即脚着地或停止。"
  },
  并腿提踵: {
    core: [
      "双脚并拢或内侧轻贴，前脚掌撑地，脚跟慢起慢落",
      "膝微屈但不晃，身体正直，可轻扶墙保持平衡",
      "顶峰稍停，脚后跟尽量有控制地放下"
    ],
    steps: ["扶墙慢速体会 → 脱手或轻扶按次数完成"],
    errors: [
      { wrong: "快速颠脚、脚尖内八", fix: "2 秒起 2 秒落；第二脚趾朝前" },
      { wrong: "重心后倒或耸肩", fix: "扶墙；肩下沉，眼睛平视" }
    ],
    safety: "地面防滑；小腿抽筋立即停下牵拉；不垫过高的鞋跟做。"
  },
  跪姿俯卧撑: {
    core: [
      "膝着垫，髋伸直，肩、髋、膝成一条斜线，不是坐在脚跟上",
      "双手位置与俯卧撑相同，胸落向两手中间",
      "核心轻收，臀部不左右晃、不先抬"
    ],
    steps: [
      "示范「斜线跪撑」与「撅屁股假撑」对比",
      "慢速按次数完成，强调胸靠近垫再推起"
    ],
    errors: [
      { wrong: "髋折起来变成跪坐", fix: "屁股向前送，身体拉成斜板" },
      { wrong: "只弯胳膊、胸不下降", fix: "用口令「胸口找垫子」" }
    ],
    safety: "膝下必须有垫；腕不适可提高手位（手撑矮箱）。"
  },
  箭步走: {
    core: [
      "向前迈大步成弓步，前膝对脚尖、不内扣，后膝向下降但不砸地",
      "上身正直，核心轻收，后脚蹬地把身体带向前一步",
      "左右腿交替走完规定步数，步幅以能站稳为准"
    ],
    steps: [
      "先原地弓步 4 次/侧找膝向",
      "再箭步走规定步数，分道进行",
      "走完一组走回"
    ],
    errors: [
      { wrong: "前膝内扣或明显超过脚尖", fix: "步子迈大一点；膝对第二脚趾" },
      { wrong: "上身趴到前腿、后膝砸垫", fix: "胸口朝前；后膝轻轻降" }
    ],
    safety: "地面平整；失衡可扶同伴肩或墙；膝痛改原地浅弓步。不做突然下震。"
  },
  卷腹: {
    core: [
      "仰卧屈膝，只把肩胛离垫，下腰不离开垫子",
      "下巴微收，眼睛看大腿，呼气抬起、吸气落下",
      "腹肌发力，不是甩脖子"
    ],
    steps: ["示范肩胛离垫即可 → 按次数慢速完成"],
    errors: [
      { wrong: "整背离开垫变成仰卧起坐", fix: "手指向前方，只抬到指尖看得到膝盖" },
      { wrong: "下巴磕胸口", fix: "下巴与胸口留一个拳头空" }
    ],
    safety: "颈部不适改为双手帮托后脑（只托不拉）。"
  },
  俯卧撑: {
    core: [
      "手略宽于肩撑地，指尖朝前，身体从头到脚跟成一条线",
      "下落时肘约向外 45°，胸部接近垫面，不塌腰、不耸肩",
      "推起时呼气，身体整体上移，不先抬臀",
      "完不成标准动作立即改为跪姿俯卧撑，保证一条线"
    ],
    steps: [
      "先做俯撑静力 5–8 秒找一条线",
      "慢速分解：下 3 拍、停 1 拍、起 3 拍",
      "按本课组次数完成，力竭者无缝切换跪姿"
    ],
    errors: [
      { wrong: "塌腰或撅臀", fix: "口令「肚子轻轻收、身体像木板」；可先跪姿" },
      { wrong: "只点头或只沉肩", fix: "眼睛看垫前约 30 厘米，胸对着两手中间落" },
      { wrong: "憋气、甩肘内扣", fix: "下落吸、推起呼；肘朝斜后方走" }
    ],
    safety: "垫上完成；腕痛可改拳撑或跪姿；禁止他人压背加阻力。"
  },
  深蹲跳: {
    core: [
      "先下蹲至大腿约平行，再双脚同时跳起，摆臂辅助",
      "落地前脚掌过渡全脚，膝微屈缓冲，尽量无声",
      "跳起不要追求高度，身体正直，膝对脚尖"
    ],
    steps: [
      "先做慢速深蹲 4 次找位置",
      "再小幅度跳 4 次体会落地",
      "按次数完成，组间必须走动休息"
    ],
    errors: [
      { wrong: "落地砸地、膝内扣或打直", fix: "口令「像弹簧」；降低跳起高度" },
      { wrong: "还没蹲稳就连续猛跳", fix: "每次落地站稳再蹲；可改深蹲不跳" }
    ],
    safety: "地面平整防滑；膝痛改为深蹲不跳；禁止互相比谁跳得高。"
  },
  平板支撑交替肘撑: {
    core: [
      "从高平板开始：左肘落下、右肘落下成肘平板，再左手撑起、右手撑起回高平板，算 1 次",
      "肩稳定，髋不左右大幅晃、不塌腰、不撅臀",
      "做不稳可跪姿交替肘撑，或改普通平板计时"
    ],
    steps: [
      "先高平板 5 秒 → 肘平板 5 秒找一条线",
      "再慢速分解左右落下、左右撑起",
      "按次数完成，变形立刻跪姿或改平板保持"
    ],
    errors: [
      { wrong: "换撑时屁股扭来扭去", fix: "放慢；口令「肚子收住再换手」" },
      { wrong: "塌腰或肩耸到耳朵", fix: "先停成平板，合格再继续" }
    ],
    safety: "腕肘下有垫；肩痛改跪姿或只做平板；禁止比谁更快换手。"
  }
};

function coreDisplayName(name, opts) {
  var n = (opts && opts.label) || name;
  return opts && opts.part ? opts.part + " · " + n : n;
}

function corePyramid(scheme, unit) {
  var rest = "组间 30–40 秒";
  if (scheme === "ss") {
    return {
      dose: "3 组 20–25–20 " + unit + "（可 4 组 20–25–25–20）",
      rest: rest,
      coachDose:
        "默认 3 组金字塔 20–25–20 " +
        unit +
        "；体能好者 4 组 20–25–25–20。组间走动 30–40 秒。"
    };
  }
  return {
    dose: "3 组 15–20–15 " + unit + "（可 4 组 15–20–25–20）",
    rest: rest,
    coachDose:
      "默认 3 组金字塔 15–20–15 " +
      unit +
      "；体能好者 4 组 15–20–25–20。组间走动 30–40 秒。"
  };
}

function coreStudentDrill(name, opts) {
  return {
    name: coreDisplayName(name, opts),
    focus: false,
    dose: opts.dose,
    rest: opts.rest
  };
}

function coreCoachDrill(name, opts) {
  var base = window.CORE_DRILL_BANK[name];
  return {
    name: coreDisplayName(name, opts),
    focus: false,
    core: base.core,
    steps: base.steps,
    errors: base.errors,
    dose: opts.coachDose || opts.dose,
    safety: base.safety
  };
}

function coreLessonDrills(items) {
  return {
    student: items.map(function (it) {
      return coreStudentDrill(it.name, it);
    }),
    coach: items.map(function (it) {
      return coreCoachDrill(it.name, it);
    })
  };
}

function coreItem(name, extra) {
  extra = extra || {};
  var pyr = corePyramid(extra.scheme || "as", extra.unit || "次");
  var item = {
    name: name,
    dose: extra.dose || pyr.dose,
    rest: extra.rest || pyr.rest,
    coachDose: extra.coachDose || pyr.coachDose
  };
  if (extra.label) item.label = extra.label;
  return item;
}

window.CORE_LESSONS = [
  (function () {
    var items = [
      coreItem("平板支撑", { unit: "秒" }),
      coreItem("躺底双抬腿"),
      coreItem("小飞机", { label: "小燕飞 / 小飞机" }),
      coreItem("蹬自行车", { label: "空中蹬自行车" }),
      coreItem("动物爬行", { unit: "步" }),
      coreItem("俄罗斯转体"),
      coreItem("并腿提踵", { label: "提踵" })
    ];
    var drills = coreLessonDrills(items);
    return {
      id: 1,
      indexLabel: "A",
      title: "A级 · 1–3年级入门",
      focus: [
        "平板支撑",
        "躺底双抬腿",
        "小燕飞 / 小飞机",
        "空中蹬自行车",
        "动物爬行",
        "俄罗斯转体",
        "提踵"
      ],
      goal: "7 项入门；3–4 组，推荐 15–20–15 或 15–20–25–20",
      student: {
        knowledge: [
          "本课 7 项：平板支撑 → 躺底双抬腿 → 小燕飞/小飞机 → 空中蹬自行车 → 动物爬行 → 俄罗斯转体 → 提踵",
          "每项做 3 组或 4 组。3 组次数（平板用秒）按 15 → 20 → 15；4 组按 15 → 20 → 25 → 20",
          "平板撑不住可跪姿；动物爬行以熊爬为主，不比谁快"
        ],
        drills: drills.student,
        summaryLine: "本课完成：A级核心力量（7 项金字塔）"
      },
      coach: {
        objectives: {
          knowledge: "知道本课 7 项及 3/4 组金字塔（15–20–15 或 15–20–25–20）。",
          skill: "能完成跪姿或标准平板的一条线，小燕飞手脚离垫，熊爬背平。",
          attitude: "听口令换项，不憋气比赛，做不完就降阶。"
        },
        keyPoints: "金字塔组数、一条线、跪姿/点地降阶合法",
        hardPoints: "平板塌腰、双抬腿拱腰、爬行撅臀、转体弓背",
        flow: {
          warmup:
            "四列横队；关节活动各 8 次 → 动态拉伸按顺序各 6 次/侧 → 心肺按顺序：原地小碎步→前后小碎步→转髋跳→胯下击掌→开合跳（可改踏步）。1 组即可。",
          special:
            "按表顺序整班完成 7 项。默认 3 组金字塔 15–20–15（平板为秒，爬行为步）；体能好的班改 4 组 15–20–25–20。组间走动。1 年级平板优先跪姿，双抬腿可屈膝，转体双脚点地。",
          stretch: "胸、髋屈肌、腰背、大腿前后侧、小腿各 15–20 秒，不弹振。",
          summary: "问哪一项最容易变形（常见：平板塌腰或爬行撅臀）；预告 S 级加跪姿俯卧撑、箭步走与卷腹。"
        },
        drills: drills.coach,
        closing:
          "A级强调动作质量。不做标准俯卧撑、不做深蹲跳。小燕飞与小飞机为同一动作，课堂统一口令即可。",
        intensityNote:
          "1 年级可把金字塔改成 10–15–10，平板跪姿；2–3 年级按表。全程禁止负重与互相加压。"
      }
    };
  })(),

  (function () {
    var items = [
      coreItem("平板支撑", { unit: "秒" }),
      coreItem("躺底双抬腿"),
      coreItem("小飞机", { label: "小燕飞 / 小飞机" }),
      coreItem("蹬自行车", { label: "空中蹬自行车" }),
      coreItem("跪姿俯卧撑"),
      coreItem("俄罗斯转体"),
      coreItem("箭步走", { unit: "步" }),
      coreItem("卷腹"),
      coreItem("并腿提踵", { label: "提踵" })
    ];
    var drills = coreLessonDrills(items);
    return {
      id: 2,
      indexLabel: "S",
      title: "S级 · 4–5年级巩固",
      focus: [
        "平板支撑",
        "躺底双抬腿",
        "小燕飞 / 小飞机",
        "空中蹬自行车",
        "跪姿俯卧撑",
        "俄罗斯转体",
        "箭步走",
        "卷腹",
        "提踵"
      ],
      goal: "9 项巩固；3–4 组，推荐 15–20–15 或 15–20–25–20",
      student: {
        knowledge: [
          "本课 9 项：平板支撑 → 躺底双抬腿 → 小燕飞/小飞机 → 空中蹬自行车 → 跪姿俯卧撑 → 俄罗斯转体 → 箭步走 → 卷腹 → 提踵",
          "每项做 3 组或 4 组。3 组按 15 → 20 → 15；4 组按 15 → 20 → 25 → 20（平板用秒，箭步走用步）",
          "跪姿俯卧撑要斜线一条，不要坐在脚跟上；箭步走膝对脚尖"
        ],
        drills: drills.student,
        summaryLine: "本课完成：S级核心力量（9 项金字塔）"
      },
      coach: {
        objectives: {
          knowledge: "知道在 A 级 7 项上增加跪姿俯卧撑、箭步走、卷腹，组数仍用同一套金字塔。",
          skill: "多数完成伸膝平板 15–20 秒、跪姿俯卧撑完整次数、箭步走不内扣。",
          attitude: "第 3、4 组开始变形就降阶，不硬撑。"
        },
        keyPoints: "金字塔不变、跪姿一条线、箭步走膝向",
        hardPoints: "跪姿俯卧撑变成跪坐、箭步走膝内扣、卷腹甩脖子",
        flow: {
          warmup:
            "关节 → 动态拉伸 → 心肺按顺序 1–2 组（原地小碎步→前后小碎步→转髋跳→胯下击掌→开合跳）。",
          special:
            "按表 9 项顺序。默认 3 组 15–20–15，体能好者 4 组 15–20–25–20。平板能伸膝则伸膝，变形即跪姿续完。箭步走分道，一组走完走回。",
          stretch: "胸、髋屈肌、腰背、腘绳肌、小腿各 15–20 秒。",
          summary: "记录跪姿俯卧撑与箭步走谁最容易变形；预告 SS 级换标准俯卧撑、深蹲跳与交替肘撑。"
        },
        drills: drills.coach,
        closing:
          "S级仍不做标准俯卧撑和深蹲跳。体能好者可尝试 1–2 次标准俯撑作为「试一试」，不计入组数。",
        intensityNote:
          "4 年级按 3 组即可；5 年级可靠近 4 组。跪姿撑不满组内减少幅度但不改成砸地。仍禁止负重。"
      }
    };
  })(),

  (function () {
    var items = [
      coreItem("平板支撑", { scheme: "ss", unit: "秒" }),
      coreItem("躺底双抬腿", { scheme: "ss" }),
      coreItem("小飞机", { scheme: "ss", label: "小燕飞" }),
      coreItem("蹬自行车", { scheme: "ss", label: "空中蹬自行车" }),
      coreItem("俯卧撑", { scheme: "ss" }),
      coreItem("俄罗斯转体", { scheme: "ss" }),
      coreItem("深蹲跳", { scheme: "ss" }),
      coreItem("卷腹", { scheme: "ss" }),
      coreItem("平板支撑交替肘撑", { scheme: "ss" })
    ];
    var drills = coreLessonDrills(items);
    return {
      id: 3,
      indexLabel: "SS",
      title: "SS级 · 6年级+强化",
      focus: [
        "平板支撑",
        "躺底双抬腿",
        "小燕飞",
        "空中蹬自行车",
        "俯卧撑",
        "俄罗斯转体",
        "深蹲跳",
        "卷腹",
        "平板支撑交替肘撑"
      ],
      goal: "9 项强化；3–4 组，推荐 20–25–20 或 20–25–25–20",
      student: {
        knowledge: [
          "本课 9 项：平板支撑 → 躺底双抬腿 → 小燕飞 → 空中蹬自行车 → 俯卧撑 → 俄罗斯转体 → 深蹲跳 → 卷腹 → 平板支撑交替肘撑",
          "每项做 3 组或 4 组。3 组按 20 → 25 → 20；4 组按 20 → 25 → 25 → 20（平板用秒）",
          "俯卧撑做不了立刻改跪姿接满；深蹲跳落地要轻；交替肘撑左右落下再撑起算 1 次"
        ],
        drills: drills.student,
        summaryLine: "本课完成：SS级核心力量（9 项金字塔）"
      },
      coach: {
        objectives: {
          knowledge: "知道 SS 用更高金字塔（20–25–20 / 20–25–25–20），并用标准俯卧撑、深蹲跳、交替肘撑替换跪姿与箭步走。",
          skill: "多数完成标准俯卧撑与 20 秒以上平板；深蹲跳轻落地；交替肘撑髋不大幅左右晃。",
          attitude: "高强度下仍保证一条线，不允许塌腰凑次数。"
        },
        keyPoints: "更高金字塔、俯卧撑可跪姿接满、深蹲跳缓冲、交替肘撑不扭髋",
        hardPoints: "第 3 组俯卧撑塌腰、深蹲跳砸地、交替肘撑左右晃",
        flow: {
          warmup:
            "热身充分；心肺按顺序 1–2 组，专项前把呼吸平下来。",
          special:
            "按表 9 项。默认 3 组 20–25–20，体能好者 4 组 20–25–25–20。深蹲跳放在转体之后、卷腹之前，落地无声。交替肘撑放最后，做不稳改跪姿交替或普通平板计时接满该组秒数。",
          stretch: "拉长胸、髋屈肌、腰腹与小腿，避免次日过度僵。",
          summary: "回顾哪一项第 3 组开始变形；布置可在家做的提踵与小燕飞。"
        },
        drills: drills.coach,
        closing:
          "SS 用标准俯卧撑、深蹲跳和交替肘撑提高强度。体测周深蹲跳可改深蹲不跳，交替肘撑改平板计时。",
        intensityNote:
          "第 3、4 组允许次数落到该组下限，不允许塌腰完成。有腰史者转体脚着地、双抬腿改屈膝；肩腕不适者俯卧撑跪姿、交替肘撑改平板。"
      }
    };
  })()
];

window.getCoreLesson = function (id) {
  const n = Number(id);
  return window.CORE_LESSONS.find((l) => l.id === n) || null;
};

window.TRAIN_MODULE = {
  id: "core",
  label: "核心力量",
  name: "核心力量",
  lessonCount: 3,
  hideFocus: true,
  hideMastery: true,
  hideSummary: true,
  shared: window.CORE_SHARED,
  lessons: window.CORE_LESSONS,
  getLesson: window.getCoreLesson
};
