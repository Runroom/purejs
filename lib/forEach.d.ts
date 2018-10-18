/**
 * https://jsperf.com/for-vs-foreach/37
 * https://coderwall.com/p/kvzbpa/don-t-use-array-foreach-use-for-instead
 */
declare function forEach(haystack: any, callback: (value: any, index: number | string, haystack: any) => void, scope?: void): void;
export default forEach;
