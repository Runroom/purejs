describe('Events behavior', () => {
  describe('onDocumentReady', () => {
    it('function should be called on document ready', done => {
      const foo = { bar: () => {} };
      sinon.spy(foo, 'bar');
      purejs.events.onDocumentReady(() => {
        foo.bar('baz');
      });
      foo.bar.should.have.been.calledWith('baz');
      done();
    });
  });

  describe('onResize', () => {
    it('function should be called on resize', done => {
      const foo = { bar: () => {} };
      sinon.spy(foo, 'bar');
      purejs.events.onResize(() => {
        foo.bar('baz');
      });
      window.innerWidth = window.innerWidth - 100;
      window.dispatchEvent(new Event('resize'));
      setTimeout(() => {
        foo.bar.should.have.been.calledWith('baz');
        done();
      }, 150);
    });
  });
});
