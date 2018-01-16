describe('Scroll behaviors', () => {
  before(() => {
    purejs.anchor();
    purejs.scrollDirection();
  });

  describe('anchor.js', () => {
    it('window offset should be on top of container', done => {
      expect(purejs.safeScrollTop()).to.equal(0);
      done();
    });

    it('sample container should exist', done => {
      expect(document.querySelector('#sample')).to.not.be.null;
      done();
    });

    it('should scroll to first container on click', done => {
      document.querySelector('.anchor1').click();
      expect(purejs.safeScrollTop()).to.equal(document.querySelector('#container1').offsetTop);
      done();
    });

    it('should scroll to second container on click', done => {
      document.querySelector('.anchor2').click();
      expect(purejs.safeScrollTop()).to.equal(document.querySelector('#container2').offsetTop);
      done();
    });

    it('should scroll to third container manually', done => {
      purejs.scrollToAnchor('#container3');
      expect(purejs.safeScrollTop()).to.equal(document.querySelector('#container3').offsetTop);
      done();
    });
  });

  describe('safeScrollTop.js', () => {
    it('window offset top should be top of container', done => {
      purejs.scrollToAnchor('#sample');
      expect(purejs.safeScrollTop()).to.equal(document.querySelector('#sample').offsetTop);
      done();
    });
  });

  describe('scrollDirection.js', () => {
    it('should not have scroll direction class', done => {
      expect(document.documentElement.className).to.not.have.string('scroll');
      done();
    });

    it('should have scroll-down class', done => {
      purejs.scrollToAnchor('#container2');
      expect(purejs.safeScrollTop()).to.equal(document.querySelector('#container2').offsetTop);

      setTimeout(() => {
        expect(document.documentElement.className).to.contain('scroll-down');
        expect(document.documentElement.className).to.not.contain('scroll-up');
        done();
      }, 100);
    });

    it('should have scroll-up class', done => {
      purejs.scrollToAnchor('#container1');
      expect(purejs.safeScrollTop()).to.equal(document.querySelector('#container1').offsetTop);

      setTimeout(() => {
        expect(document.documentElement.className).to.contain('scroll-up');
        expect(document.documentElement.className).to.not.contain('scroll-down');
        done();
      }, 100);
    });
  });

  describe('scrollTo.js', () => {
    it('should be on top of container', done => {
      purejs.scrollToAnchor('#sample');
      expect(purejs.safeScrollTop()).to.equal(document.querySelector('#sample').offsetTop);
      done();
    });

    it('should be on top of selected element', done => {
      purejs.scrollTo(document.querySelector('#container3').offsetTop);

      setTimeout(() => {
        expect(purejs.safeScrollTop()).to.equal(document.querySelector('#container3').offsetTop);
        done();
      }, 600);
    });
  });

  describe('scrollToTop.js', () => {
    it('button should not be created', done => {
      expect(() => {
        purejs.scrollToTop({ createButton: false });
      }).to.throw('Element .js-scrollTop not found');
      done();
    });

    it('button should be created', done => {
      purejs.scrollToAnchor('#sample');
      expect(purejs.safeScrollTop()).to.be.equal(document.querySelector('#sample').offsetTop);

      expect(() => {
        purejs.scrollToTop({ createButton: true });
      }).to.not.throw('Element .js-scrollTop not found');
      expect(document.querySelector('.js-scrollTop')).to.not.be.null;
      expect(document.querySelector('.js-scrollTop').style.display).to.be.equal('none');

      purejs.scrollToAnchor('#footer');

      setTimeout(() => {
        expect(purejs.safeScrollTop()).to.be.above(1000);
        expect(document.querySelector('.js-scrollTop').style.display).to.be.equal('block');

        document.querySelector('.js-scrollTop').click();

        setTimeout(() => {
          expect(purejs.safeScrollTop()).to.be.equal(0);
          expect(document.querySelector('.js-scrollTop').style.display).to.be.equal('none');
          done();
        }, 600);
      }, 300);
    });
  });
});
