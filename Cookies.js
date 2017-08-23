import jsCookies from './node_modules/js-cookie';

let opts = {
  element: '.js-cookies',
  button: '.js-cookiesAccept',
  cookie: 'accept_cookies',
  visibleClass: 'cookies--state-visible',
  paddingBottom: false
};

function handleExtend(settings) {
  opts = Object.assign({}, opts, settings);
}

function addPaddingToPage() {
  const element = document.querySelector(opts.element);
  const elementHeight = element.offsetHeight;

  document.documentElement.style.paddingBottom = `${elementHeight}px`;
}

function cleanPaddingToPage() {
  document.documentElement.style.paddingBottom = 0;
}

export default function Cookies(settings) {
  if (settings) {
    handleExtend(settings);
  }

  const accepted = jsCookies.get(opts.cookie);

  if (accepted === undefined) {
    if (opts.paddingBottom) addPaddingToPage();
    document.querySelector(opts.element).classList.add(opts.visibleClass);
  }

  document.querySelector(opts.button).addEventListener('click', event => {
    event.preventDefault();
    jsCookies.set(opts.cookie, 'true', { expires: 365 });
    document.querySelector(opts.element).classList.remove(opts.visibleClass);
    if (opts.paddingBottom) cleanPaddingToPage();
  });

  window.addEventListener('resize', addPaddingToPage, false);
}
