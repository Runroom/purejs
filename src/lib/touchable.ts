// https://github.com/Microsoft/TypeScript/issues/21517#issuecomment-365699236
function touchable(): boolean {
  const touchsupport =
    // @ts-expect-error TS2551
    (('ontouchstart' in window) as any) || window.navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0;
  return !!touchsupport;
}

export default touchable;
