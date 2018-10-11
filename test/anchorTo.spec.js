describe('Anchor To', () => {
  beforeEach(() => {
    purejs.default.anchorTo(0);
  });

  it('window offset should be on top of container', done => {
    expect(purejs.default.safeScrollTop()).to.equal(0);
    done();
  });

  it('sample container should exist', done => {
    expect(document.querySelector('#sample')).to.not.be.null;
    done();
  });

  it('should anchor to first container', done => {
    purejs.default
      .anchorTo({ element: '#container1' })
      .then(() => {
        expect(purejs.default.safeScrollTop()).to.equal(document.querySelector('#container1').offsetTop);
        done();
      })
      .catch(err => console.log(`Error: ${err}`));
  });

  it('should anchor to second container (- offset)', done => {
    purejs.default
      .anchorTo({ element: '#container2', offset: 80 })
      .then(() => {
        expect(purejs.default.safeScrollTop()).to.equal(document.querySelector('#container2').offsetTop - 80);
        done();
      })
      .catch(err => console.log(`Error: ${err}`));
  });

  it('should anchor to integer position', done => {
    purejs.default
      .anchorTo({ element: 200 })
      .then(() => {
        expect(purejs.default.safeScrollTop()).to.equal(200);
        done();
      })
      .catch(err => console.log(`Error: ${err}`));
  });
});
