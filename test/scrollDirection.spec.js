describe('Scroll direction', () => {
  before(async () => {
    // await purejs.default.anchorTo({ element: '#container3', speed: 100 });
    // window.addEventListener('scroll', async () => {
    //   scrollDirectionValue = await purejs.default.scrollDirection();
    // });
  });

  it('should return 1 on scroll down', done => {
    purejs.default.anchorTo({ element: '#container3', speed: 500 });
    expect(purejs.default.scrollDirection()).to.equal(1);
    done();
  });

  it('should return -1 on scroll up', done => {
    purejs.default.anchorTo({ element: '#container2', speed: 500 });
    expect(purejs.default.scrollDirection()).to.equal(-1);
    done();
  });

  it('should return 0 on scroll top', done => {
    purejs.default.anchorTo({ element: 0, speed: 100 }).then(() => {
      expect(purejs.default.scrollDirection()).to.equal(0);
      done();
    });
  });
});
