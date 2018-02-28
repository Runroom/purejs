let lastScrollTop = 0;
let opts = {
  deltaUp: 10,
  deltaDown: 10,
  classUp: 'scroll-up',
  classDown: 'scroll-down'
};

function clearElementClass() {
  document.documentElement.classList.remove(opts.classUp);
  document.documentElement.classList.remove(opts.classDown);
}

function onPageScroll() {
  const currentScrollTop = this.scrollY || this.scrollTop || 0;

  if (currentScrollTop <= 0) {
    clearElementClass();
    lastScrollTop = currentScrollTop;
  } else if (currentScrollTop > lastScrollTop) {
    if (Math.abs(lastScrollTop - currentScrollTop) >= opts.deltaDown) {
      if (!document.documentElement.classList.contains(opts.classDown)) {
        clearElementClass();
        document.documentElement.classList.add(opts.classDown);
      }
      lastScrollTop = currentScrollTop;
    }
  } else if (Math.abs(lastScrollTop - currentScrollTop) >= opts.deltaUp) {
    if (!document.documentElement.classList.contains(opts.classUp)) {
      clearElementClass();
      document.documentElement.classList.add(opts.classUp);
    }
    lastScrollTop = currentScrollTop;
  }
}

function handleExtend(settings) {
  opts = Object.assign({}, opts, settings);
}

export default function scrollDirection(settings) {
  if (settings) handleExtend(settings);

  if (window.addEventListener) {
    window.addEventListener('scroll', onPageScroll);
  }
}
