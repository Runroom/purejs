'use strict';
import jsCookies from 'js-cookie';
import Cookies, { getPolicyCookie } from '../src/Cookies';

document.body.innerHTML = `<div class="js-cookies">
  <button class="js-cookies-accept"></button>
</div>`;

describe('Cookies behavior', () => {
  const el = document.querySelector('.js-cookies');
  const elButton = document.querySelector('.js-cookies-accept');
  Cookies();

  it('should not exist cookie by default', () => expect(getPolicyCookie()).toBeFalsy());
  it('element should have visible class', () => expect(el.className).toContain('cookies--state-visible'));
  it('element should not be visible', () => {
    expect(getPolicyCookie()).toBeFalsy();
    elButton.click();
    expect(el.className).not.toContain('cookies--state-visible');
    expect(getPolicyCookie()).toBeTruthy();
  });
});
