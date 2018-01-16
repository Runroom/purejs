describe('Touchable behavior', () => {
  it('should add non-touch class to html element', done => {
    purejs.touchable();
    expect(document.documentElement.className).to.have.string('non-touch');
    done();
  });
});
