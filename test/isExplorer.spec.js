describe('Is Explorer', () => {
  it('should not be Internet Explorer', done => {
    expect(purejs.default.isExplorer()).is.not.ok;
    done();
  });
});
