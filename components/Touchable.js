export default function Touchable() {
    let touchsupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);

    if (!touchsupport) {
        document.documentElement.classList.add('non-touch');
    }
};
