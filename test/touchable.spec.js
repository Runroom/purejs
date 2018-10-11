describe('Touchable behavior', () => {
  it('should return false', done => {
    expect(purejs.default.touchable()).is.not.ok;
    done();
  });
});
