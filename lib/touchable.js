// https://github.com/Microsoft/TypeScript/issues/21517#issuecomment-365699236
function touchable() {
    var touchsupport = ('ontouchstart' in window) ||
        window.navigator.maxTouchPoints > 0 ||
        window.navigator.msMaxTouchPoints > 0;
    return !!touchsupport;
}
export default touchable;
//# sourceMappingURL=touchable.js.map