import anchorTo from './lib/anchorTo';
import animateTo from './lib/animateTo';
import debounce from './lib/debounce';
import elementOffsetTop from './lib/elementOffsetTop';
import forEach from './lib/forEach';
import safeScrollTop from './lib/safeScrollTop';
import scrollDirection from './lib/scrollDirection';
import touchable from './lib/touchable';
declare const purejs: {
    anchorTo: typeof anchorTo;
    animateTo: typeof animateTo;
    debounce: typeof debounce;
    elementOffsetTop: typeof elementOffsetTop;
    events: {
        onDocumentReady: (callback: () => void) => void;
        onResizeWidth: (callback: () => void) => void;
    };
    forEach: typeof forEach;
    isExplorer: () => boolean;
    isInt: (n: any) => boolean;
    isNan: (n: any) => boolean;
    safeScrollTop: typeof safeScrollTop;
    scrollDirection: typeof scrollDirection;
    touchable: typeof touchable;
};
export default purejs;
