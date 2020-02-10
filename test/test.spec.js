const mochaAsync = fn => {
  return done => {
    fn.call().then(done, err => {
      done(err);
    });
  };
};

describe('Test', () => {
  beforeEach(
    mochaAsync(async () => {
      await purejs.default.anchorTo(0);
    })
  );
});
