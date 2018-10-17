import safeScrollTop from './safeScrollTop';
var lastScrollTop = 0;
var status = 0;
function scrollDirection(deltaUp, deltaDown) {
    if (deltaUp === void 0) { deltaUp = 10; }
    if (deltaDown === void 0) { deltaDown = 10; }
    var currentScrollTop = safeScrollTop() || 0;
    if (currentScrollTop <= 0) {
        lastScrollTop = currentScrollTop;
        status = 0;
    }
    else if (currentScrollTop > lastScrollTop) {
        if (Math.abs(lastScrollTop - currentScrollTop) >= deltaDown) {
            lastScrollTop = currentScrollTop;
            status = 1;
        }
    }
    else if (Math.abs(lastScrollTop - currentScrollTop) >= deltaUp) {
        lastScrollTop = currentScrollTop;
        status = -1;
    }
    return status;
}
export default scrollDirection;
//# sourceMappingURL=scrollDirection.js.map