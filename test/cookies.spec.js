describe('Cookies behavior', () => {
  it('should not exist cookie by default 😩', done => {
    expect(purejs.default.cookies.get('foo')).to.be.empty;
    done();
  });
  it('cookie should be created 😃 🍪', done => {
    expect(purejs.default.cookies.get('foo')).to.be.empty;
    purejs.default.cookies.set('foo');
    expect(purejs.default.cookies.get('foo')).to.equal('1');
    done();
  });
  it('cookie should be deleted 😭', done => {
    expect(purejs.default.cookies.get('foo')).to.equal('1');
    purejs.default.cookies.remove('foo');
    expect(purejs.default.cookies.get('foo')).to.be.empty;
    done();
  });
});
