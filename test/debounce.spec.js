describe('Debounce behavior', () => {
  it('function should be called 5 times', done => {
    const baz = {
      bar: () => {}
    };
    sinon.spy(baz, 'bar');

    const clock = sinon.useFakeTimers();
    const func = baz.bar;

    func();
    func();
    func();
    func();
    func();

    clock.tick(600);
    baz.bar.should.have.been.callCount(5);

    clock.restore();
    done();
  });

  it('function should be called once', done => {
    const baz = {
      bar: () => {}
    };
    sinon.spy(baz, 'bar');

    const clock = sinon.useFakeTimers();
    const func = purejs.default.debounce(baz.bar);

    func();
    func();
    func();
    func();
    func();

    clock.tick(600);
    baz.bar.should.have.been.callCount(1);

    clock.restore();
    done();
  });
});
