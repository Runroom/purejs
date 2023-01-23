describe('Is Explorer', () => {
  it('should not be Internet Explorer', () => {
    expect(purejs.isExplorer()).toBeFalsy();
  });
});
