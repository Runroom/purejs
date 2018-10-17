describe('Safe scrollTop', () => {
  it('window offset top should be top of container', done => {
    purejs.default
      .anchorTo({ element: '#sample' })
      .then(() => {
        expect(purejs.default.safeScrollTop()).to.equal(document.querySelector('#sample').offsetTop);
        done();
      })
      .catch(err => console.log(err));
  });
});
