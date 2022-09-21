describe('Is Integer', () => {
  it('should be number', () => {
    expect(purejs.isInt(30)).toBeTruthy();
  });

  it('should not be number', () => {
    expect(purejs.isInt('200')).toBeFalsy();
  });
});
