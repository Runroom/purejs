describe('Touchable behavior', () => {
  beforeEach(() => {
    purejs.touchable();
  });
  it('should add non-touch class to html element', () =>
    expect(document.documentElement.className).to.have.string('non-touch'));
});
