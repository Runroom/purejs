describe('Scroll behaviors', () => {
  before(() => {
    purejs.scrollDirection();
  });

  describe('safeScrollTop.js', () => {
    it('window offset top should be top of container', done => {
      purejs.scrollTo.anchor('#sample');
      expect(purejs.safeScrollTop()).to.equal(document.querySelector('#sample').offsetTop);
      purejs.scrollTo.anchor(0);
      done();
    });
  });

  describe('scrollTo.js', () => {
    it('window offset should be on top of container', done => {
      expect(purejs.safeScrollTop()).to.equal(0);
      done();
    });

    it('sample container should exist', done => {
      expect(document.querySelector('#sample')).to.not.be.null;
      done();
    });

    it('should anchor to first container', done => {
      purejs.scrollTo.anchor('#container1');
      expect(purejs.safeScrollTop()).to.equal(document.querySelector('#container1').offsetTop);
      done();
    });

    it('should animate to second container', done => {
      purejs.scrollTo.animate('#container2');
      setTimeout(() => {
        expect(purejs.safeScrollTop()).to.equal(document.querySelector('#container2').offsetTop);
        done();
      }, 600);
    });

    it('should animate to third container faster', done => {
      purejs.scrollTo.animate('#container3', 200);
      setTimeout(() => {
        expect(purejs.safeScrollTop()).to.equal(document.querySelector('#container3').offsetTop);
        done();
      }, 300);
    });
  });

  describe('scrollDirection.js', () => {
    it('should not have scroll direction class', done => {
      purejs.scrollTo.anchor(0);
      setTimeout(() => {
        expect(document.documentElement.className).to.not.have.string('scroll');
        done();
      }, 100);
    });

    it('should have scroll-down class', done => {
      purejs.scrollTo.anchor('#container2');
      expect(purejs.safeScrollTop()).to.equal(document.querySelector('#container2').offsetTop);

      setTimeout(() => {
        expect(document.documentElement.className).to.contain('scroll-down');
        expect(document.documentElement.className).to.not.contain('scroll-up');
        done();
      }, 100);
    });

    it('should have scroll-up class', done => {
      purejs.scrollTo.anchor('#container1');
      expect(purejs.safeScrollTop()).to.equal(document.querySelector('#container1').offsetTop);

      setTimeout(() => {
        expect(document.documentElement.className).to.contain('scroll-up');
        expect(document.documentElement.className).to.not.contain('scroll-down');
        done();
      }, 100);
    });
  });
});
