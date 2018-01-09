'use strict';

import Touchable from '../src/Touchable';

test('should add class non-touch to html element', () => {
  Touchable();
  expect(document.documentElement.className).toEqual('non-touch');
});
