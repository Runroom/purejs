describe('Debounce behavior', () => {
  it('function should be called after 200ms', done => {
    const foo = {
      bar: () => {
        console.log('trigger');
      }
    };
    const testFunction = () => {
      foo.bar('baz');
    };

    sinon.spy(foo, 'bar');
    purejs.debounce(testFunction, 200);

    setTimeout(() => {
      foo.bar.should.have.been.calledWith('baz');
      done();
    }, 200);
  });
});
