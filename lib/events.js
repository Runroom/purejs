function events() {
    // see: http://youmightnotneedjquery.com/#ready
    function onDocumentReady(callback) {
        var state = document.readyState;
        if (state === 'complete' || state === 'interactive') {
            return callback();
        }
        document.addEventListener('DOMContentLoaded', function () {
            callback();
        });
    }
    function onResizeWidth(callback) {
        var timer;
        var windowWidth = window.innerWidth;
        window.addEventListener('resize', function () {
            if (windowWidth !== window.innerWidth) {
                windowWidth = window.innerWidth;
                if (timer)
                    clearTimeout(timer);
                timer = setTimeout(function () {
                    callback(windowWidth);
                }, 100);
            }
        });
    }
    return {
        onDocumentReady: onDocumentReady,
        onResizeWidth: onResizeWidth
    };
}
export default events();
//# sourceMappingURL=events.js.map