describe('ForEach behavior', () => {
  it('should return sum of elements', done => {
    const elements = [2, 4, 6, 8, 10];
    let total = 0;

    expect(elements).to.have.lengthOf(5);

    purejs.default.forEach(elements, el => {
      total += el;
    });

    expect(total).to.equal(30);
    done();
  });

  it('should return iterate over an object', done => {
    const clock = sinon.useFakeTimers();
    const elements = { foo: 'bar', bar: 'baz' };

    purejs.default.forEach(elements, (el, key, obj) => {
      expect(obj).to.equal(elements);
      expect(el).to.equal(obj[key]);
    });

    clock.tick(200);
    clock.restore();
    done();
  });
});
