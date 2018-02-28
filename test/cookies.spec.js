describe('Cookies behavior', () => {
  it('should not exist cookie by default 😩', done => {
    expect(purejs.cookies.get('foo')).to.be.empty;
    done();
  });
  it('cookie should be created 😃 🍪', done => {
    expect(purejs.cookies.get('foo')).to.be.empty;
    purejs.cookies.set('foo');
    expect(purejs.cookies.get('foo')).to.equal('1');
    done();
  });
  it('cookie should be deleted 😭', done => {
    expect(purejs.cookies.get('foo')).to.equal('1');
    purejs.cookies.remove('foo');
    expect(purejs.cookies.get('foo')).to.be.empty;
    done();
  });
});
