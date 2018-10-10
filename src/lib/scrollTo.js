import safeScrollTop from './safeScrollTop';

// For a best approach to fix the header height
// https://css-tricks.com/hash-tag-links-padding/

function scrollTo() {
  /**
   * t = current time
   * b = start value
   * c = change in value
   * d = speed
   */
  const easeInOutQuad = (t, b, c, d) => {
    let currentTime = t / (d / 2);
    if (currentTime < 1) return (c / 2) * currentTime * currentTime + b;
    currentTime -= 1;
    return (-c / 2) * (currentTime * (currentTime - 2) - 1) + b;
  };

  const isInt = n => Number(n) === n;

  function getElementOffsetTop(value) {
    if (!isInt(value)) {
      const elem = document.querySelector(value);
      if (elem) return elem.offsetTop;
    }
    return value || 0;
  }

  function anchor(element, offset = 0) {
    const target = getElementOffsetTop(element);
    if (!isInt(element)) {
      document.location.hash = element;
    }
    window.scrollTo(0, target - offset);
  }

  function animate(element, speed = 500, offset = 0) {
    const start = safeScrollTop();
    const target = getElementOffsetTop(element);
    const change = target - start - offset;
    const increment = 20;
    let currentTime = 0;

    (function animateScroll() {
      currentTime += increment;
      const val = easeInOutQuad(currentTime, start, change, speed);
      window.scroll(0, val);
      if (currentTime < speed) setTimeout(animateScroll, increment);
    })();
  }

  return {
    anchor,
    animate
  };
}

export default scrollTo();
