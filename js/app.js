/**
 * 训练模块单课页渲染：role=student | coach
 * 通过 TRAIN_MODULE / 各模块 data.js 适配短跑、长跑等
 */
(function () {
  function qs(name) {
    const u = new URL(window.location.href);
    return u.searchParams.get(name);
  }

  function getModuleContext() {
    var mod = window.TRAIN_MODULE || {};
    var id = mod.id || "sprint";
    var label = mod.label || mod.name || "短跑";
    var shared = mod.shared;
    var lessons = mod.lessons;
    var getLesson = mod.getLesson;
    var storage = mod.storage;
    var lessonCount = mod.lessonCount;

    // 兼容只声明 id/label 的模块（如长跑早期写法）
    if (!shared || !lessons) {
      if (id === "endurance") {
        shared = shared || window.ENDURANCE_SHARED;
        lessons = lessons || window.ENDURANCE_LESSONS;
        getLesson = getLesson || window.getEnduranceLesson;
        storage = storage || window.EnduranceStorage;
      } else if (id === "jump-rope") {
        shared = shared || window.JUMP_ROPE_SHARED;
        lessons = lessons || window.JUMP_ROPE_LESSONS;
        getLesson = getLesson || window.getJumpRopeLesson;
        storage = storage || window.JumpRopeStorage;
      } else if (id === "fitness") {
        shared = shared || window.FITNESS_SHARED;
        lessons = lessons || window.FITNESS_LESSONS;
        getLesson = getLesson || window.getFitnessLesson;
        storage = storage || window.FitnessStorage;
      } else if (id === "core") {
        shared = shared || window.CORE_SHARED;
        lessons = lessons || window.CORE_LESSONS;
        getLesson = getLesson || window.getCoreLesson;
        storage = storage || window.CoreStorage;
      } else if (id === "coordination") {
        shared = shared || window.COORDINATION_SHARED;
        lessons = lessons || window.COORDINATION_LESSONS;
        getLesson = getLesson || window.getCoordinationLesson;
        storage = storage || window.CoordinationStorage;
      } else {
        shared = shared || window.SPRINT_SHARED;
        lessons = lessons || window.SPRINT_LESSONS;
        getLesson = getLesson || window.getSprintLesson;
        storage = storage || window.SprintStorage;
        id = "sprint";
        label = label || "短跑";
      }
    }

    if (!storage && window.createLessonStorage) {
      storage = window.createLessonStorage(id + "-lesson-");
    }
    if (!storage) {
      storage = window.SprintStorage;
    }

    return {
      id: id,
      label: label,
      lessonCount: lessonCount || (lessons && lessons.length) || 12,
      shared: shared,
      lessons: lessons,
      getLesson: getLesson,
      storage: storage,
      hideFocus: !!mod.hideFocus,
      hideMastery: !!mod.hideMastery,
      hideSummary: !!mod.hideSummary
    };
  }

  function getFlowMinutes(lesson, shared) {
    var fm = (lesson && lesson.flowMinutes) || {};
    var total = (lesson && lesson.duration) || (shared && shared.duration) || 45;
    var warmup =
      fm.warmup != null
        ? fm.warmup
        : (shared && shared.warmup && shared.warmup.duration) || 10;
    var stretch =
      fm.stretch != null
        ? fm.stretch
        : (shared && shared.stretch && shared.stretch.duration) || 5;
    var summary = fm.summary != null ? fm.summary : 2;
    if (shared && shared.summaryDuration != null) {
      summary = shared.summaryDuration;
    }
    if (window.TRAIN_MODULE && window.TRAIN_MODULE.hideSummary) {
      summary = 0;
    }
    var special =
      fm.special != null
        ? fm.special
        : Math.max(0, total - warmup - stretch - summary);
    return {
      warmup: warmup,
      special: special,
      stretch: stretch,
      summary: summary,
      total: total
    };
  }

  function pad2(n) {
    return (n < 10 ? "0" : "") + n;
  }

  function addMinutesToTime(timeStr, minutes) {
    var parts = String(timeStr || "16:00").split(":");
    var h = parseInt(parts[0], 10);
    var m = parseInt(parts[1], 10);
    if (isNaN(h)) h = 16;
    if (isNaN(m)) m = 0;
    var total = h * 60 + m + (minutes || 0);
    total = ((total % (24 * 60)) + 24 * 60) % (24 * 60);
    return pad2(Math.floor(total / 60)) + ":" + pad2(total % 60);
  }

  function defaultTimeEnd(cfg, lesson, shared) {
    var flow = getFlowMinutes(lesson, shared);
    var start = (cfg && cfg.defaultTimeStart) || "16:00";
    if (flow.total === 45 && cfg && cfg.defaultTimeEnd) {
      return cfg.defaultTimeEnd;
    }
    return addMinutesToTime(start, flow.total);
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

  function displayList(items, ordered) {
    const ul = el("ul", {
      className: ordered ? "tag-list ordered" : "tag-list"
    });
    items.forEach(function (item) {
      ul.appendChild(el("li", { text: item }));
    });
    return ul;
  }

  function todayISODate() {
    var d = new Date();
    var m = String(d.getMonth() + 1).padStart(2, "0");
    var day = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + m + "-" + day;
  }

  function getConfig() {
    return window.getSiteConfig ? window.getSiteConfig() : {};
  }

  function renderCoachQr(coach) {
    var box = el("div", { className: "coach-card", id: "coach-qr-box" });
    if (!coach) {
      box.appendChild(
        el("div", { className: "note", text: "暂无教练配置" })
      );
      return box;
    }

    if (coach.qr || coach.qrDataKey) {
      var qrSrc = window.resolveCoachQrSrc
        ? window.resolveCoachQrSrc(coach)
        : window.resolveSiteAsset
          ? window.resolveSiteAsset(coach.qr)
          : "../../" + (coach.qr || "");
      box.appendChild(
        el("img", {
          className: "coach-qr-img",
          src: qrSrc,
          alt: (coach.name || "教练") + "微信二维码",
          "data-coach-id": coach.id || ""
        })
      );
    }

    box.appendChild(
      el("div", { className: "coach-card-name", text: coach.name || "教练" })
    );
    return box;
  }

  function updateCoachQrDisplay(coachId) {
    var host = document.getElementById("coach-qr-host");
    if (!host) return;
    host.innerHTML = "";
    var coach =
      (window.getCoachById && window.getCoachById(coachId)) ||
      (window.getDefaultCoach && window.getDefaultCoach());
    host.appendChild(renderCoachQr(coach));
  }

  function renderStudent(lesson, shared, root, mod) {
    mod = mod || getModuleContext();
    document.body.classList.add("role-student");
    document.title =
      "心雨少儿体能-体测方向 · 学员版 · 第" +
      lesson.id +
      "课 " +
      lesson.title;

    const storage = mod.storage || window.SprintStorage;
    const saved = (storage && storage.load(lesson.id)) || {};
    const cfg = getConfig();
    const flow = getFlowMinutes(lesson, shared);
    const defaultCoach =
      (window.getDefaultCoach && window.getDefaultCoach()) ||
      (cfg.coaches && cfg.coaches[0]) ||
      { id: "chen", name: "陈教练" };
    const coaches = cfg.coaches || [defaultCoach];
    const studentOptions = cfg.studentOptions || [];

    var initialCoachId = saved.coachId || defaultCoach.id;
    if (saved.coachName && window.getCoachByName) {
      var byName = window.getCoachByName(saved.coachName);
      if (byName) initialCoachId = byName.id;
    }
    if (!window.getCoachById || !window.getCoachById(initialCoachId)) {
      initialCoachId = defaultCoach.id;
    }

    const sheet = el("div", { className: "sheet", id: "print-area" });

    sheet.appendChild(
      el("h2", {
        className: "sheet-title",
        text: "心雨少儿体能-体测方向 · 学员训练表"
      })
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
          flow.total +
          "分钟"
      })
    );

    // 左：学员 + 日期/时间（上下）；右：指导教练
    const headerRow = el("div", { className: "sheet-header-row" });
    const leftCol = el("div", { className: "sheet-header-left" });

    const studentInput = el("input", {
      type: "text",
      id: "studentName",
      name: "studentName",
      placeholder: "输入或从列表选择",
      autocomplete: "off",
      value: saved.studentName || ""
    });
    const studentToggle = el("button", {
      type: "button",
      className: "student-picker-toggle",
      "aria-label": "打开学员备选列表",
      text: "▾"
    });
    const studentList = el("ul", {
      className: "student-picker-list",
      id: "student-picker-list",
      hidden: "hidden"
    });
    studentOptions.forEach(function (name) {
      var item = el("li", {
        className: "student-picker-item",
        role: "option",
        tabindex: "0",
        text: name
      });
      item.addEventListener("click", function () {
        studentInput.value = name;
        studentList.setAttribute("hidden", "hidden");
        studentPicker.classList.remove("is-open");
        studentInput.focus();
      });
      studentList.appendChild(item);
    });

    const studentPicker = el("div", { className: "student-picker" }, [
      studentInput,
      studentToggle,
      studentList
    ]);

    function openStudentList() {
      // 每次打开都展示完整备选，不按输入过滤
      studentList.removeAttribute("hidden");
      studentPicker.classList.add("is-open");
    }

    function closeStudentList() {
      studentList.setAttribute("hidden", "hidden");
      studentPicker.classList.remove("is-open");
    }

    studentToggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (studentList.hasAttribute("hidden")) openStudentList();
      else closeStudentList();
    });
    studentInput.addEventListener("focus", function () {
      openStudentList();
    });
    studentInput.addEventListener("click", function () {
      openStudentList();
    });
    document.addEventListener("click", function (e) {
      if (!studentPicker.contains(e.target)) closeStudentList();
    });

    leftCol.appendChild(
      el("div", { className: "field" }, [
        el("label", { for: "studentName", text: "学员名称" }),
        studentPicker
      ])
    );

    const datetimeBlock = el("div", { className: "datetime-stack" });
    datetimeBlock.appendChild(
      el("div", { className: "field" }, [
        el("label", { for: "classDate", text: "上课日期" }),
        el("input", {
          type: "date",
          id: "classDate",
          name: "classDate",
          value: saved.classDate || todayISODate()
        })
      ])
    );

    const timeWrap = el("div", { className: "time-range-fields" }, [
      el("input", {
        type: "time",
        id: "timeStart",
        name: "timeStart",
        value: saved.timeStart || cfg.defaultTimeStart || "16:00"
      }),
      el("span", { className: "sep", text: "至" }),
      el("input", {
        type: "time",
        id: "timeEnd",
        name: "timeEnd",
        value: saved.timeEnd || defaultTimeEnd(cfg, lesson, shared)
      })
    ]);
    datetimeBlock.appendChild(
      el("div", { className: "field" }, [
        el("label", { for: "timeStart", text: "上课时间" }),
        timeWrap
      ])
    );
    leftCol.appendChild(datetimeBlock);
    headerRow.appendChild(leftCol);

    const coachSelect = el("select", {
      id: "coachId",
      name: "coachId"
    });
    coaches.forEach(function (c) {
      var opt = el("option", { value: c.id, text: c.name });
      if (c.id === initialCoachId) opt.selected = true;
      coachSelect.appendChild(opt);
    });
    coachSelect.addEventListener("change", function () {
      updateCoachQrDisplay(coachSelect.value);
    });

    const coachField = el("div", { className: "field field-coach sheet-header-right" });
    coachField.appendChild(el("label", { for: "coachId", text: "指导教练" }));
    coachField.appendChild(coachSelect);
    const qrHost = el("div", { id: "coach-qr-host", className: "coach-qr-host" });
    qrHost.appendChild(
      renderCoachQr(
        (window.getCoachById && window.getCoachById(initialCoachId)) ||
          defaultCoach
      )
    );
    coachField.appendChild(qrHost);
    headerRow.appendChild(coachField);
    sheet.appendChild(headerRow);

    // 热身：仅展示
    const warm = el("div", { className: "section" });
    warm.appendChild(
      el("div", {
        className: "section-head",
        html: "一、热身（" + flow.warmup + "分钟）"
      })
    );
    const warmBody = el("div", { className: "section-body" });
    warmBody.appendChild(el("div", { className: "sub-label", text: "活动关节" }));
    warmBody.appendChild(displayList(shared.warmup.joints));
    warmBody.appendChild(el("div", { className: "sub-label", text: "动态拉伸" }));
    warmBody.appendChild(displayList(shared.warmup.dynamic));
    warmBody.appendChild(
      el("div", {
        className: "sub-label",
        text:
          "心肺激活（按顺序" +
          (shared.warmup.cardioNote ? "，" + shared.warmup.cardioNote : "") +
          "）"
      })
    );
    warmBody.appendChild(displayList(shared.warmup.cardio, true));
    warm.appendChild(warmBody);
    sheet.appendChild(warm);

    // 本课要点（可选，长跑等理论课使用）
    var knowledge = (lesson.student && lesson.student.knowledge) || [];
    if (knowledge.length) {
      const know = el("div", { className: "section" });
      know.appendChild(
        el("div", { className: "section-head", text: "本课要点" })
      );
      const knowBody = el("div", { className: "section-body" });
      knowBody.appendChild(displayList(knowledge, true));
      know.appendChild(knowBody);
      sheet.appendChild(know);
    }

    // 专项
    const special = el("div", { className: "section" });
    special.appendChild(
      el("div", {
        className: "section-head",
        text: "二、专项训练（" + flow.special + "分钟）"
      })
    );
    const specialBody = el("div", { className: "section-body" });
    const masterySaved = saved.mastery || {};

    var hideFocus = mod && mod.hideFocus;
    var hideMastery = mod && mod.hideMastery;

    lesson.student.drills.forEach(function (d, idx) {
      const row = el("div", {
        className: "drill-row" + (d.focus && !hideFocus ? " focus" : "")
      });
      const nameRow = el("div", { className: "drill-name" }, [
        document.createTextNode(d.name)
      ]);
      if (d.focus && !hideFocus) {
        nameRow.appendChild(el("span", { className: "tag-focus", text: "重点" }));
      }
      row.appendChild(nameRow);
      row.appendChild(
        el("div", {
          className: "drill-dose",
          text: d.dose + (d.rest ? " · 间歇：" + d.rest : "")
        })
      );

      if (
        !hideMastery &&
        (d.focus ||
          (mod && (mod.id === "jump-rope" || mod.id === "coordination")))
      ) {
        const mastery = el("div", { className: "mastery" });
        mastery.appendChild(el("span", { className: "label", text: "掌握情况：" }));
        var levelClass = {
          未掌握: "mastery-none",
          基本掌握: "mastery-basic",
          熟练掌握: "mastery-good"
        };
        shared.masteryOptions.forEach(function (opt) {
          var selected = masterySaved[d.name] === opt;
          var btn = el("button", {
            type: "button",
            className:
              "mastery-option " +
              (levelClass[opt] || "") +
              (selected ? " is-selected" : ""),
            "data-drill": d.name,
            "data-value": opt,
            text: opt
          });
          btn.addEventListener("click", function () {
            var group = mastery.querySelectorAll(".mastery-option");
            Array.prototype.forEach.call(group, function (b) {
              b.classList.remove("is-selected");
            });
            btn.classList.add("is-selected");
          });
          mastery.appendChild(btn);
        });
        row.appendChild(mastery);
      }
      specialBody.appendChild(row);
    });
    special.appendChild(specialBody);
    sheet.appendChild(special);

    // 拉伸：仅展示
    const stretch = el("div", { className: "section" });
    stretch.appendChild(
      el("div", {
        className: "section-head",
        text: "三、拉伸（" + flow.stretch + "分钟）"
      })
    );
    const stretchBody = el("div", { className: "section-body" });
    stretchBody.appendChild(displayList(shared.stretch.parts));
    stretch.appendChild(stretchBody);
    sheet.appendChild(stretch);

    if (flow.summary > 0 && !(mod && mod.hideSummary)) {
      const summary = el("div", { className: "section" });
      summary.appendChild(
        el("div", {
          className: "section-head",
          text: "四、总结（" + flow.summary + "分钟）"
        })
      );
      summary.appendChild(
        el("div", {
          className: "section-body",
          html: "<span class='note'>" + (lesson.student.summaryLine || "本课完成") + "</span>"
        })
      );
      sheet.appendChild(summary);
    }

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
    const mastery = {};
    document.querySelectorAll(".mastery-option.is-selected").forEach(function (btn) {
      var drill = btn.getAttribute("data-drill");
      var value = btn.getAttribute("data-value");
      if (drill && value) mastery[drill] = value;
    });

    var coachId = (document.getElementById("coachId") || {}).value || "";
    var coach =
      (window.getCoachById && window.getCoachById(coachId)) ||
      (window.getDefaultCoach && window.getDefaultCoach());

    return {
      studentName: (document.getElementById("studentName") || {}).value || "",
      classDate: (document.getElementById("classDate") || {}).value || "",
      timeStart: (document.getElementById("timeStart") || {}).value || "",
      timeEnd: (document.getElementById("timeEnd") || {}).value || "",
      coachId: coachId || (coach && coach.id) || "",
      coachName: (coach && coach.name) || "",
      mastery: mastery
    };
  }

  function renderCoach(lesson, shared, root, mod) {
    mod = mod || getModuleContext();
    document.body.classList.add("role-coach");
    document.title =
      "心雨少儿体能-体测方向 · 教练员版 · 第" +
      lesson.id +
      "课 " +
      lesson.title;

    const c = lesson.coach;
    const flow = getFlowMinutes(lesson, shared);
    const sheet = el("div", { className: "sheet", id: "print-area" });

    sheet.appendChild(
      el("h2", {
        className: "sheet-title",
        text: "心雨少儿体能-体测方向 · 教练员教案"
      })
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
          flow.total +
          "分钟"
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
    const flowSec = el("div", { className: "section" });
    flowSec.appendChild(
      el("div", {
        className: "section-head coach",
        text: "课时流程（" + flow.total + "分钟）"
      })
    );
    const flowBody = el("div", { className: "section-body" });
    var flowPairs = [
      ["热身 " + flow.warmup + "′", c.flow.warmup],
      ["专项 " + flow.special + "′", c.flow.special],
      ["拉伸 " + flow.stretch + "′", c.flow.stretch]
    ];
    if (flow.summary > 0 && !(mod && mod.hideSummary) && c.flow.summary) {
      flowPairs.push(["总结 " + flow.summary + "′", c.flow.summary]);
    }
    flowPairs.forEach(function (pair) {
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
    flowSec.appendChild(flowBody);
    sheet.appendChild(flowSec);

    // 专项教法
    const drillsSec = el("div", { className: "section" });
    drillsSec.appendChild(
      el("div", { className: "section-head coach", text: "专项教法" })
    );
    const drillsBody = el("div", { className: "section-body" });

    var hideFocus = mod && mod.hideFocus;

    c.drills.forEach(function (d) {
      const block = el("div", {
        className: "drill-row" + (d.focus && !hideFocus ? " focus" : "")
      });
      const title = el("div", { className: "drill-name" }, [
        document.createTextNode(d.name)
      ]);
      if (d.focus && !hideFocus) {
        title.appendChild(el("span", { className: "tag-focus", text: "重点" }));
      }
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

    const mod = getModuleContext();
    const id = qs("id") || "1";
    const role = (qs("role") || "student").toLowerCase();
    const lesson = mod.getLesson ? mod.getLesson(id) : null;
    const shared = mod.shared;
    const storage = mod.storage || window.SprintStorage;

    if (!lesson) {
      root.innerHTML =
        '<div class="panel"><p>未找到该课次。请返回 <a href="index.html">' +
        mod.label +
        "总表</a>。</p></div>";
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
      renderCoach(lesson, shared, root, mod);
    } else {
      collect = renderStudent(lesson, shared, root, mod);
    }

    const hintBar = document.getElementById("hint-bar");
    if (hintBar) {
      hintBar.innerHTML =
        role === "student"
          ? mod.hideMastery
            ? '<span class="note">学员训练表：可填写姓名与日期后点「保存记录」；「打印表格 / 保存图片」仅输出下方表格内容（不含顶部按钮）。</span>'
            : '<span class="note">学员掌握情况表：先填写再点「保存记录」；「打印表格 / 保存图片」仅输出下方表格内容（不含顶部按钮）。</span>'
          : '<span class="note">教练员教案：「打印表格 / 保存图片」仅输出下方教案内容。</span>';
    }

    const saveBtn = document.getElementById("btn-save");
    const clearBtn = document.getElementById("btn-clear");
    const printBtn = document.getElementById("btn-print");
    const imageBtn = document.getElementById("btn-image");

    function persistStudentIfNeeded() {
      if (role === "student" && collect && storage) {
        storage.save(lesson.id, collect());
      }
    }

    function buildExportFilename() {
      var studentName = "";
      var nameInput = document.getElementById("studentName");
      if (nameInput && nameInput.value) studentName = nameInput.value.trim();
      var roleLabel = role === "coach" ? "教练教案" : "学员训练表";
      var parts = [
        mod.label,
        "第" + lesson.id + "课",
        window.ExportSheetImage.safeName(lesson.title),
        roleLabel
      ];
      if (studentName) parts.push(window.ExportSheetImage.safeName(studentName));
      return parts.join("-") + ".png";
    }

    if (role !== "student") {
      if (saveBtn) saveBtn.style.display = "none";
      if (clearBtn) clearBtn.style.display = "none";
    } else {
      if (saveBtn) {
        saveBtn.addEventListener("click", function () {
          const data = collect();
          storage.save(lesson.id, data);
          alert("已保存本课学员记录（本机浏览器）。");
        });
      }
      if (clearBtn) {
        clearBtn.addEventListener("click", function () {
          if (confirm("确定清空本课已保存的学员记录？")) {
            storage.clear(lesson.id);
            location.reload();
          }
        });
      }
    }

    if (printBtn) {
      printBtn.addEventListener("click", function () {
        persistStudentIfNeeded();
        if (window.ExportSheetImage && window.ExportSheetImage.printPrintArea) {
          window.ExportSheetImage.printPrintArea();
        } else {
          window.print();
        }
      });
    }

    if (imageBtn) {
      imageBtn.addEventListener("click", function () {
        persistStudentIfNeeded();
        var original = imageBtn.textContent;
        imageBtn.disabled = true;
        imageBtn.textContent = "生成中…";
        window.ExportSheetImage.exportPrintArea(buildExportFilename())
          .then(function () {
            imageBtn.disabled = false;
            imageBtn.textContent = original;
          })
          .catch(function (err) {
            imageBtn.disabled = false;
            imageBtn.textContent = original;
            alert((err && err.message) || "保存图片失败");
          });
      });
    }
  }

  function initModuleIndex() {
    const tbody = document.getElementById("lesson-tbody");
    const mod = getModuleContext();
    if (!tbody || !mod.lessons) return;

    var showDuration = mod.id === "endurance";

    mod.lessons.forEach(function (lesson) {
      const tr = el("tr");
      tr.appendChild(el("td", { text: String(lesson.indexLabel || lesson.id) }));
      tr.appendChild(el("td", { text: lesson.title }));
      if (showDuration) {
        var mins = (lesson.duration || (mod.shared && mod.shared.duration) || 45) + "′";
        tr.appendChild(el("td", { text: mins }));
      }
      tr.appendChild(el("td", { text: lesson.focus.join("、") }));
      tr.appendChild(el("td", { text: lesson.goal }));
      const actions = el("div", { className: "actions no-print" });
      actions.appendChild(
        el("a", {
          className: "btn btn-primary",
          href: "lesson.html?id=" + lesson.id + "&role=student",
          text: "学员"
        })
      );
      actions.appendChild(
        el("a", {
          className: "btn btn-coach",
          href: "lesson.html?id=" + lesson.id + "&role=coach",
          text: "教练"
        })
      );
      tr.appendChild(el("td", { className: "no-print" }, [actions]));
      tbody.appendChild(tr);
    });

    const printBtn = document.getElementById("btn-print");
    if (printBtn) {
      printBtn.addEventListener("click", function () {
        if (window.ExportSheetImage && window.ExportSheetImage.printPrintArea) {
          window.ExportSheetImage.printPrintArea();
        } else {
          window.print();
        }
      });
    }

    const imageBtn = document.getElementById("btn-image");
    if (imageBtn && window.ExportSheetImage) {
      imageBtn.addEventListener("click", function () {
        var original = imageBtn.textContent;
        imageBtn.disabled = true;
        imageBtn.textContent = "生成中…";
        var fileName =
          mod.label + "-" + mod.lessonCount + "课时总表.png";
        window.ExportSheetImage.exportPrintArea(fileName)
          .then(function () {
            imageBtn.disabled = false;
            imageBtn.textContent = original;
          })
          .catch(function (err) {
            imageBtn.disabled = false;
            imageBtn.textContent = original;
            alert((err && err.message) || "保存图片失败");
          });
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (document.body.dataset.page === "lesson") initLessonPage();
    var page = document.body.dataset.page || "";
    if (
      page === "module-index" ||
      page === "sprint-index" ||
      page === "endurance-index" ||
      page === "jump-rope-index" ||
      page === "fitness-index" ||
      page === "core-index" ||
      page === "coordination-index"
    ) {
      initModuleIndex();
    }
  });
})();
