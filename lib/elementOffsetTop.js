import isInt from './isInt';
function elementOffsetTop(value) {
    if (!isInt(value)) {
        var elem = document.querySelector(value.toString());
        if (elem)
            return elem.offsetTop;
    }
    return value || 0;
}
export default elementOffsetTop;
//# sourceMappingURL=elementOffsetTop.js.map