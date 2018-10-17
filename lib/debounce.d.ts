export declare type Procedure = (...args: any[]) => void;
declare function debounce<F extends Procedure>(callback: F, waitMilliseconds: number | undefined, isImmediate: false): F;
export default debounce;
