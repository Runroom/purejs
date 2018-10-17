import debounce from './lib/debounce';
import elementOffsetTop from './lib/elementOffsetTop';
import forEach from './lib/forEach';
import safeScrollTop from './lib/safeScrollTop';
import scrollDirection from './lib/scrollDirection';
import touchable from './lib/touchable';
declare const purejs: {
    anchorTo: (arg1: {
        element: string | number;
        offset?: number | undefined;
    }, arg2: ((err?: any, value?: any) => void) | undefined) => Promise<{}>;
    animateTo: (arg1: {
        element: string | number;
        offset?: number | undefined;
        speed?: number | undefined;
    }, arg2: ((err?: any, value?: any) => void) | undefined) => Promise<{}>;
    cookies: {
        get: (name: string) => string;
        set: (name: string, value?: string | number, days?: number) => void;
        remove: (name: string) => void;
    };
    debounce: typeof debounce;
    elementOffsetTop: typeof elementOffsetTop;
    events: {
        onDocumentReady: (callback: () => void) => void;
        onResizeWidth: (callback: () => void) => void;
    };
    forEach: typeof forEach;
    isInt: (n: any) => boolean;
    safeScrollTop: typeof safeScrollTop;
    scrollDirection: typeof scrollDirection;
    touchable: typeof touchable;
};
export default purejs;
