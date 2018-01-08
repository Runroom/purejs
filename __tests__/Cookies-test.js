'use strict';

import Cookies from '../src/Cookies';

test('should not have visible class', () => {
  const el = document.querySelector('js-cookies');
  Cookies();
  expect(el.className).not.toContain('cookies--state-visible');
});
