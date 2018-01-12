describe('Events behavior', () => {
  describe('onDocumentReady', function() {
    it('function should be called on document ready', function() {
      const foo = { bar: function() {} };
      sinon.spy(foo, 'bar');
      purejs.events.onDocumentReady(() => {
        foo.bar('baz');
      });
      return foo.bar.should.have.been.calledWith('baz');
    });
  });

  describe('onResize', function() {
    it('function should be called on resize', done => {
      const foo = { bar: function() {} };
      sinon.spy(foo, 'bar');
      purejs.events.onResize(() => {
        foo.bar('baz');
      });
      // foo.bar.should.not.have.been.called();
      var newwidth = window.innerWidth - 100;
      // console.log('width', window.innerHeight);
      // window.resizeTo(newwidth, window.innerHeight);
      setTimeout(() => {
        window.styleMedia.width = newwidth;
        console.log('width', window.innerHeight);
        foo.bar.should.have.been.calledWith('baz');
        done();
      }, 150);
    });
  });
});
