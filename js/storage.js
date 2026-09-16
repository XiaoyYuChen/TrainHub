/**
 * 学员版本地存储：按模块 + 课次保存抬头与掌握情况
 * key: {moduleId}-lesson-{id}  例如 sprint-lesson-1 / jump-rope-lesson-1
 * 新模块无需在此登记，调用 createLessonStorage(id + "-lesson-") 即可
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

    return { load: load, save: save, clear: clear, prefix: prefix };
  }

  window.createLessonStorage = createLessonStorage;
  window.getModuleStorage = function (moduleId) {
    return createLessonStorage(String(moduleId || "module") + "-lesson-");
  };
})();
