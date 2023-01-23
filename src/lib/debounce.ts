// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
export type Procedure = (...args: any[]) => void;

function debounce<F extends Procedure>(callback: F, waitMilliseconds = 50, isImmediate: false): F {
  let timeoutId: any;

  return function (this: any, ...args: any[]) {
    const context = this;

    const doLater = function () {
      timeoutId = undefined;
      if (!isImmediate) {
        callback.apply(context, args);
      }
    };

    const shouldCallNow = isImmediate && timeoutId === undefined;

    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(doLater, waitMilliseconds);

    if (shouldCallNow) {
      callback.apply(context, args);
    }
  } as any;
}

export default debounce;
