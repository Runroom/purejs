describe('Scroll behaviors', () => {
  describe('safeScrollTop.js', () => {
    it('window offset top should be top of container', done => {
      purejs.default.scrollTo.anchor('#sample');
      expect(purejs.default.safeScrollTop()).to.equal(document.querySelector('#sample').offsetTop);
      purejs.default.scrollTo.anchor(0);
      done();
    });
  });

  describe('scrollTo.js', () => {
    it('window offset should be on top of container', done => {
      expect(purejs.default.safeScrollTop()).to.equal(0);
      done();
    });

    it('sample container should exist', done => {
      expect(document.querySelector('#sample')).to.not.be.null;
      done();
    });

    it('should anchor to first container', done => {
      purejs.default.scrollTo.anchor('#container1');
      expect(purejs.default.safeScrollTop()).to.equal(document.querySelector('#container1').offsetTop);
      done();
    });

    it('should animate to second container', done => {
      purejs.default.scrollTo.animate('#container2');
      setTimeout(() => {
        expect(purejs.default.safeScrollTop()).to.equal(document.querySelector('#container2').offsetTop);
        done();
      }, 600);
    });

    it('should animate to third container faster', done => {
      purejs.default.scrollTo.animate('#container3', 200);
      setTimeout(() => {
        expect(purejs.default.safeScrollTop()).to.equal(document.querySelector('#container3').offsetTop);
        done();
      }, 300);
    });
  });

  describe('scrollDirection.js', () => {
    let scrollDirectionValue = 0;
    before(() => {
      purejs.default.scrollTo.anchor('#container2');
      window.addEventListener('scroll', () => {
        scrollDirectionValue = purejs.default.scrollDirection();
      });
    });

    it('should return -1 on scroll up', done => {
      purejs.default.scrollTo.animate(0, 200);
      setTimeout(() => {
        expect(scrollDirectionValue).to.equal(-1);
      }, 50);
      setTimeout(() => {
        expect(purejs.default.safeScrollTop()).to.equal(0);
        done();
      }, 300);
    });

    it('should return 1 on scroll down', done => {
      purejs.default.scrollTo.animate('#container2', 200);
      setTimeout(() => {
        expect(scrollDirectionValue).to.equal(1);
        done();
      }, 50);
      setTimeout(() => {
        expect(purejs.default.safeScrollTop()).to.equal(document.querySelector('#container2').offsetTop);
        done();
      }, 300);
    });
  });
});
