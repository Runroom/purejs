describe('Is NaN', () => {
  it('should be a number', () => {
    expect(purejs.isNan(30)).toBeFalsy();
  });

  it('should not be number', () => {
    expect(purejs.isNan(parseFloat('purejs'))).toBeTruthy();
  });
});
