function cookies() {
    var setCookie = function (name, value, days) {
        if (value === void 0) { value = 1; }
        if (days === void 0) { days = 365; }
        var d = new Date();
        d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + value + ";expires=" + d.toUTCString() + ";path=/";
    };
    var getCookie = function (name) {
        var ca = decodeURIComponent(document.cookie).split(';');
        var concatName = name + "=";
        for (var i = 0; i < ca.length; i += 1) {
            var c = ca[i].trim();
            if (c.indexOf(concatName) === 0) {
                return c.substring(concatName.length, c.length);
            }
        }
        return '';
    };
    var removeCookie = function (name) {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    };
    return {
        get: getCookie,
        set: setCookie,
        remove: removeCookie
    };
}
export default cookies();
//# sourceMappingURL=cookies.js.map