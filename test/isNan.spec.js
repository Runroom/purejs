describe('Is NaN', () => {
  it('should be a number', done => {
    expect(purejs.default.isNan(30)).is.not.ok;
    done();
  });

  it('should not be number', done => {
    expect(purejs.default.isNan(parseFloat('purejs'))).is.ok;
    done();
  });
});
