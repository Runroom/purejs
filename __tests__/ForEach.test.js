'use strict';
import ForEach from '../src/ForEach';

test('should return 30', () => {
  const elements = [2, 4, 6, 8, 10];
  let total = 0;

  ForEach(elements, index => {
    total = total + elements[index];
  });

  expect(total).toEqual(30);
});
