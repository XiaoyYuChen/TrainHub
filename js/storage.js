/**
 * 学员版本地存储：按课次保存抬头与掌握情况
 * key: sprint-lesson-{id}
 */
window.SprintStorage = (function () {
  const prefix = "sprint-lesson-";

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

  return { load, save, clear };
})();
