/**
 * https://jsperf.com/for-vs-foreach/37
 * https://coderwall.com/p/kvzbpa/don-t-use-array-foreach-use-for-instead
 */
function forEach(haystack: any[], callback: () => void, scope?: void) {
  if (Object.prototype.toString.call(haystack) === '[object Object]') {
    const keyHaystack = Object.keys(haystack) as any[];
    for (let i = 0, len = keyHaystack.length; i < len; i += 1) {
      if (Object.prototype.hasOwnProperty.call(keyHaystack, i)) {
        callback.call(scope, haystack[keyHaystack[i]], keyHaystack[i], haystack);
      }
    }
  } else {
    for (let i = 0, len = haystack.length; i < len; i += 1) {
      callback.call(scope, haystack[i], i, haystack);
    }
  }
}

export default forEach;
