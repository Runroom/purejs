describe('Is Integer', () => {
  it('should be number', done => {
    expect(purejs.default.isInt(30)).is.ok;
    done();
  });

  it('should not be number', done => {
    expect(purejs.default.isInt('200')).is.not.ok;
    done();
  });
});
