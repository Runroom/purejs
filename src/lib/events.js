function events() {
  // see: http://youmightnotneedjquery.com/#ready
  function onDocumentReady(callback) {
    const complete = document.readyState === 'complete';
    const notLoading = document.readyState !== 'loading';
    const ready = document.attachEvent ? complete : notLoading;
    if (ready) {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  }

  function onResizeWidth(callback) {
    let timer;
    let windowWidth = window.innerWidth;

    window.addEventListener('resize', () => {
      if (windowWidth !== window.innerWidth) {
        windowWidth = window.innerWidth;
        if (timer) clearTimeout(timer);
        timer = setTimeout(callback, 100);
      }
    });
  }

  return {
    onDocumentReady,
    onResizeWidth
  };
}

export default events();
