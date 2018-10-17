function debounce(callback, waitMilliseconds, isImmediate) {
    if (waitMilliseconds === void 0) { waitMilliseconds = 50; }
    var timeoutId;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var context = this;
        var doLater = function () {
            timeoutId = undefined;
            if (!isImmediate) {
                callback.apply(context, args);
            }
        };
        var shouldCallNow = isImmediate && timeoutId === undefined;
        if (timeoutId !== undefined) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(doLater, waitMilliseconds);
        if (shouldCallNow) {
            callback.apply(context, args);
        }
    };
}
export default debounce;
//# sourceMappingURL=debounce.js.map