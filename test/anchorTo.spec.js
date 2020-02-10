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
    const myFunc = () => {};
    const spiedMyFunc = sinon.spy(myFunc);

    purejs.default
      .anchorTo({ element: '#container1' }, spiedMyFunc)
      .then(() => {
        expect(purejs.default.safeScrollTop()).to.equal(document.querySelector('#container1').offsetTop);
        expect(spiedMyFunc.called).to.be.true;
        done();
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      });
  });

  it('should anchor to second container (- offset)', done => {
    const myFunc = () => {};
    const spiedMyFunc = sinon.spy(myFunc);

    purejs.default
      .anchorTo({ element: '#container2', offset: 80 }, spiedMyFunc)
      .then(() => {
        expect(purejs.default.safeScrollTop()).to.equal(document.querySelector('#container2').offsetTop - 80);
        expect(spiedMyFunc.called).to.be.true;
        done();
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      });
  });

  it('should anchor to integer position', done => {
    const myFunc = () => {};
    const spiedMyFunc = sinon.spy(myFunc);

    purejs.default
      .anchorTo({ element: 200 }, spiedMyFunc)
      .then(() => {
        expect(purejs.default.safeScrollTop()).to.equal(200);
        expect(spiedMyFunc.called).to.be.true;
        done();
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      });
  });

  // it('should throw an error', async done => {
  // const res = await purejs.default.anchorTo({ element: 'nonsense' });
  // console.log(purejs.default.anchorTo({ element: 'nonsense' }));
  // done();
  // .then((err, val) => {
  //   console.log('Enters', err, val);
  //   done();
  // })
  // .catch(err => {
  //   expect(err).to.equal('Some error');
  //   console.log(`Error: ${err}`);
  //   done();
  // });
  // });
});
