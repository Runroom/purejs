describe('ForEach behavior', () => {
  it('should return sum of elements', () => {
    const elements = [2, 4, 6, 8, 10];
    let total = 0;

    expect(elements).toHaveLength(5);

    purejs.forEach(elements, (el) => {
      total += el;
    });

    expect(total).toBe(30);
  });

  it('should return iterate over an object', () => {
    const elements = { foo: 'bar', bar: 'baz' };

    purejs.forEach(elements, (el, key, obj) => {
      expect(obj).toBe(elements);
      expect(el).toBe(obj[key]);
    });
  });
});
