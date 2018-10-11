describe('Events onDocumentReady', () => {
  it('function should be called on document ready', done => {
    const foo = { bar: () => {} };
    sinon.spy(foo, 'bar');
    purejs.default.events.onDocumentReady(() => {
      foo.bar('baz');
    });
    foo.bar.should.have.been.calledWith('baz');
    done();
  });
});

describe('Events onResizeWidth', () => {
  it('function should be called on resize width', done => {
    const foo = { bar: () => {} };
    sinon.spy(foo, 'bar');

    const clock = sinon.useFakeTimers();

    purejs.default.events.onResizeWidth(() => {
      foo.bar('baz');
    });

    window.innerWidth -= 100;
    window.dispatchEvent(new Event('resize'));

    clock.tick(150);

    foo.bar.should.have.been.calledWith('baz');

    clock.restore();
    done();
  });

  it('function should not be called on resize height', done => {
    const foo = { bar: () => {} };
    sinon.spy(foo, 'bar');

    const clock = sinon.useFakeTimers();

    purejs.default.events.onResizeWidth(() => {
      foo.bar('baz');
    });

    window.innerHeight -= 100;
    window.dispatchEvent(new Event('resize'));

    clock.tick(150);
    foo.bar.should.not.have.been.calledWith('baz');

    clock.restore();
    done();
  });
});
