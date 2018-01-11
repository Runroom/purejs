import jsCookies from '../node_modules/js-cookie';
import Events from './Events';

let opts = {
  element: 'js-cookies',
  button: 'js-cookies-accept',
  cookieName: 'accept_cookies',
  visibleClass: 'cookies--state-visible',
  paddingBottom: false
};

function handleExtend(settings) {
  opts = Object.assign({}, opts, settings);
}

function addPaddingToPage() {
  const element = document.querySelector(`.${opts.element}`);
  const elementHeight = element.offsetHeight;

  document.documentElement.style.paddingBottom = `${elementHeight}px`;
}

function cleanPaddingToPage() {
  document.documentElement.style.paddingBottom = 0;
}

export const getPolicyCookie = () => jsCookies.get(opts.cookieName);
export const removePolicyCookie = () => jsCookies.remove(opts.cookieName);

export default function Cookies(settings) {
  if (settings) {
    handleExtend(settings);
  }

  const accepted = getPolicyCookie();

  if (accepted === undefined) {
    if (opts.paddingBottom) addPaddingToPage();
    document.querySelector(`.${opts.element}`).classList.add(opts.visibleClass);
  }

  document.querySelector(`.${opts.button}`).addEventListener('click', event => {
    event.preventDefault();
    jsCookies.set(opts.cookieName, 'true', { expires: 365 });
    document.querySelector(`.${opts.element}`).classList.remove(opts.visibleClass);
    if (opts.paddingBottom) cleanPaddingToPage();
  });

  Events.onResize(addPaddingToPage);
}
