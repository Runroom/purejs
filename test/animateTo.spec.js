describe('Animate To', () => {
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

  it('should animate to second container', done => {
    purejs.default
      .animateTo({ element: '#container2' })
      .then(() => {
        expect(purejs.default.safeScrollTop()).to.equal(document.querySelector('#container2').offsetTop);
        done();
      })
      .catch(err => console.log(err));
  });

  it('should animate to third container faster', done => {
    purejs.default
      .animateTo({ element: '#container3', speed: 200 })
      .then(() => {
        expect(purejs.default.safeScrollTop()).to.equal(document.querySelector('#container3').offsetTop);
        done();
      })
      .catch(err => console.log(err));
  });

  it('should animate to integer position - offset', done => {
    purejs.default
      .animateTo({ element: 300, speed: 200, offset: 80 })
      .then(() => {
        expect(purejs.default.safeScrollTop()).to.equal(300 - 80);
        done();
      })
      .catch(err => console.log(err));
  });
});
