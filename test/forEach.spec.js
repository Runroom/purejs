describe('ForEach behavior', () => {
  const elements = [2, 4, 6, 8, 10];
  let total = 0;

  purejs.forEach(elements, element => {
    total += element;
  });

  it('should return sum of elements', done => {
    expect(elements).to.have.lengthOf(5);
    expect(total).to.equal(30);
    done();
  });
});
