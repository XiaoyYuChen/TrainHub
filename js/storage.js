/**
 * 学员版本地存储：按模块 + 课次保存抬头与掌握情况
 * key: {module}-lesson-{id}  例如 sprint-lesson-1 / endurance-lesson-1
 */
(function () {
  function createLessonStorage(prefix) {
    function key(lessonId) {
      return prefix + String(lessonId);
    }

    function load(lessonId) {
      try {
        const raw = localStorage.getItem(key(lessonId));
        if (!raw) return null;
        return JSON.parse(raw);
      } catch (e) {
        return null;
      }
    }

    function save(lessonId, data) {
      localStorage.setItem(key(lessonId), JSON.stringify(data));
    }

    function clear(lessonId) {
      localStorage.removeItem(key(lessonId));
    }

    return { load, save, clear, prefix: prefix };
  }

  window.createLessonStorage = createLessonStorage;
  window.SprintStorage = createLessonStorage("sprint-lesson-");
  window.EnduranceStorage = createLessonStorage("endurance-lesson-");
  window.JumpRopeStorage = createLessonStorage("jump-rope-lesson-");
  window.FitnessStorage = createLessonStorage("fitness-lesson-");
  window.CoreStorage = createLessonStorage("core-lesson-");
  window.CoordinationStorage = createLessonStorage("coordination-lesson-");
})();
