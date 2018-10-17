/**
 * https://jsperf.com/for-vs-foreach/37
 * https://coderwall.com/p/kvzbpa/don-t-use-array-foreach-use-for-instead
 */
declare function forEach(haystack: any[], callback: () => void, scope?: void): void;
export default forEach;
