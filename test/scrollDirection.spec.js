describe('Scroll direction', () => {
  let scrollDirectionValue = 0;
  before(() => {
    purejs.default.anchorTo({ element: '#container2', speed: 100 });
    window.addEventListener('scroll', () => {
      scrollDirectionValue = purejs.default.scrollDirection();
    });
  });

  it('should return 1 on scroll down', done => {
    setTimeout(() => {
      expect(scrollDirectionValue).to.equal(1);
      done();
    }, 50);
  });

  it('should return -1 on scroll up', done => {
    purejs.default.anchorTo({ element: '#container1', speed: 100 });
    setTimeout(() => {
      expect(scrollDirectionValue).to.equal(-1);
      done();
    }, 50);
  });

  it('should return 0 on scroll top', done => {
    purejs.default.anchorTo({ element: 0, speed: 100 });
    setTimeout(() => {
      expect(scrollDirectionValue).to.equal(0);
      done();
    }, 150);
  });
});
