import test from 'tape';

test('timing test', t => {
  t.equal(typeof Date.now, 'function');
  const start = Date.now();
  t.ok("I'm truthy");

  setTimeout(() => {
    t.equal(Date.now() - start, 100);
  }, 100);
  t.end();
});
