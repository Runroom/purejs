describe('ForEach behavior', () => {
  const elements = [2, 4, 6, 8, 10];
  let total = 0;

  purejs.default.forEach(elements, index => {
    total += elements[index];
  });

  it('should return sum of elements', done => {
    expect(elements).to.have.lengthOf(5);
    expect(total).to.equal(30);
    done();
  });
});
