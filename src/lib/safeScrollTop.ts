export default function safeScrollTop(): number {
  return window.pageYOffset !== undefined
    ? window.pageYOffset
    : ((document.documentElement || document.body.parentNode || document.body) as any).scrollTop;
}
