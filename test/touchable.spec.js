describe('Touchable behavior', () => {
  it('should add non-touch class to html element', done => {
    purejs.touchable();
    expect(document.documentElement.className).to.have.string('non-touch');
    document.documentElement.classList.remove('non-touch');
    done();
  });

  it('should not add class to html element', done => {
    purejs.touchable(false);
    expect(document.documentElement.className).to.not.have.string('non-touch');
    done();
  });
});
