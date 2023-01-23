describe('Element Offset Top', () => {
  it('should return same element offset top', () => {
    expect(purejs.elementOffsetTop('#container1')).toBe(
      document.querySelector('#container1').offsetTop
    );
  });

  it('should return same integer offset top', () => {
    expect(purejs.elementOffsetTop(200)).toBe(200);
  });
});
