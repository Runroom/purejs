export default function ScrollTo(startPoint, duration = 500) {
  const start = document.body.scrollTop;
  const change = startPoint - start;
  const increment = 20;

  let currentTime = 0;

  (function animateScroll() {
    currentTime += increment;
    const val = Math.easeInOutQuad(currentTime, start, change, duration);
    document.body.scrollTop = val;
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  })();
}

/**
 * t = current time
 * b = start value
 * c = change in value
 * d = duration
 */
Math.easeInOutQuad = (t, b, c, d) => {
  let currentTime = t / (d / 2);
  if (currentTime < 1) return c / 2 * currentTime * currentTime + b;
  currentTime -= 1;
  return -c / 2 * (currentTime * (currentTime - 2) - 1) + b;
};
