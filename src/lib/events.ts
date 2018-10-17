function events() {
  // see: http://youmightnotneedjquery.com/#ready
  function onDocumentReady(callback: () => void) {
    const state = document.readyState;
    if (state === 'complete' || state === 'interactive') {
      return callback();
    }

    document.addEventListener('DOMContentLoaded', () => {
      callback();
    });
  }

  function onResizeWidth(callback: () => void) {
    let timer: any;
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
