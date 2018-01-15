describe('Debounce behavior', () => {
  it('function should be called 99 (luftballons 😜 ) times', done => {
    const baz = { bar: () => {} };

    sinon.spy(baz, 'bar');

    window.addEventListener('resize', () => {
      baz.bar();
    });

    for (let i = 1; i < 100; i++) {
      window.innerWidth = i * 100;
      window.dispatchEvent(new Event('resize'));
    }
    setTimeout(() => {
      baz.bar.should.have.been.callCount(99);
      done();
    }, 300);
  });

  it('function should be called once', done => {
    const foo = { bar: () => {} };

    sinon.spy(foo, 'bar');

    window.addEventListener(
      'resize',
      purejs.debounce(() => {
        foo.bar();
      }, 200)
    );

    for (let i = 1; i < 100; i++) {
      window.innerWidth = i * 100;
      window.dispatchEvent(new Event('resize'));
    }
    setTimeout(() => {
      foo.bar.should.have.been.calledOnce;
      done();
    }, 300);
  });
});
