import jsCookies from '../node_modules/js-cookie';
import events from './events';

let opts = {
  element: 'js-cookies',
  button: 'js-cookies-accept',
  cookieName: 'accept_cookies',
  visibleClass: false,
  paddingBottom: false
};

function handleExtend(settings) {
  opts = Object.assign({}, opts, settings);
}

function addPaddingToPage() {
  const element = document.querySelector(`.${opts.element}`);
  const elementHeight = element ? element.offsetHeight : 0;

  document.documentElement.style.paddingBottom = `${elementHeight}px`;
}

function cleanPaddingToPage() {
  document.documentElement.style.paddingBottom = 0;
}

export const getPolicyCookie = () => jsCookies.get(opts.cookieName);
export const removePolicyCookie = () => jsCookies.remove(opts.cookieName);

export default function cookies(settings) {
  if (settings) {
    handleExtend(settings);
  }

  const accepted = getPolicyCookie();

  if (accepted === undefined) {
    if (opts.paddingBottom) addPaddingToPage();
    if (opts.visibleClass) {
      document.querySelector(`.${opts.element}`).classList.add(opts.visibleClass);
    } else {
      document.querySelector(`.${opts.element}`).style.display = 'block';
    }
  }

  document.querySelector(`.${opts.button}`).addEventListener('click', event => {
    event.preventDefault();
    jsCookies.set(opts.cookieName, 'true', { expires: 365 });
    if (opts.visibleClass) {
      document.querySelector(`.${opts.element}`).classList.remove(opts.visibleClass);
    } else {
      document.querySelector(`.${opts.element}`).style.display = 'none';
    }
    if (opts.paddingBottom) cleanPaddingToPage();
  });

  events.onResize(addPaddingToPage);
}