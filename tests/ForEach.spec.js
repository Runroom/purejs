describe('ForEach behavior', () => {
  const elements = [2, 4, 6, 8, 10];
  let total = 0;

  purejs.ForEach(elements, index => {
    total += elements[index];
  });

  it('should have length of 5', () => expect(elements).to.have.lengthOf(5));
  it('should return 30', () => expect(total).to.equal(30));
});
