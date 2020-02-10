describe('Animate To', () => {
  beforeEach(() => {
    purejs.default.anchorTo({ element: 0 });
  });

  it('window offset should be on top of container', done => {
    const clock = sinon.useFakeTimers();
    clock.tick(600);
    expect(purejs.default.safeScrollTop()).to.equal(0);
    clock.restore();
    done();
  });

  it('sample container should exist', done => {
    expect(document.querySelector('#sample')).to.not.be.null;
    done();
  });

  it('should animate to second container', done => {
    const myFunc = () => {
      return true;
    };
    const spiedMyFunc = sinon.spy(myFunc);
    const clock = sinon.useFakeTimers();

    purejs.default
      .animateTo({ element: '#container2' }, spiedMyFunc)
      .then(async () => {
        clock.tick(600);
        expect(spiedMyFunc.called).to.be.true;
        expect(purejs.default.safeScrollTop()).to.equal(document.querySelector('#container2').offsetTop);
        clock.restore();
        done();
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      });
  });

  it('should animate to third container faster', done => {
    const clock = sinon.useFakeTimers();
    purejs.default
      .animateTo({ element: '#container3', speed: 200 })
      .then(async () => {
        clock.tick(250);
        expect(purejs.default.safeScrollTop()).to.equal(document.querySelector('#container3').offsetTop);
        clock.restore();
        done();
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      });
  });

  it('should animate to integer position - offset', done => {
    const clock = sinon.useFakeTimers();
    purejs.default
      .animateTo({ element: 300, speed: 200, offset: 80 })
      .then(() => {
        clock.tick(250);
        expect(purejs.default.safeScrollTop()).to.equal(300 - 80);
        clock.restore();
        done();
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      });
  });

  it('should throw an error', done => {
    const myFunc = () => {};
    const spiedMyFunc = sinon.spy(myFunc);

    purejs.default.animateTo({ element: 'nonsense' }, spiedMyFunc).catch(err => {
      expect(spiedMyFunc.called).to.not.be.true;
      expect(err).to.equal(`The element doesn't exists or is not a number`);
      done();
    });
  });
});
