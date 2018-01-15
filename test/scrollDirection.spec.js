describe('Scroll Direction behavior', () => {
  before(() => {
    purejs.scrollDirection();
  });

  it('should not have scroll direction class', () => {
    expect(document.documentElement.className).to.not.have.string('scroll');
  });
  it('should have scroll-down class', () => {
    purejs.scrollToAnchor('#container2');
    expect(window.pageYOffset).to.equal(document.querySelector('#container2').offsetTop);

    setTimeout(() => {
      expect(document.documentElement.className).to.contain('scroll-down');
      expect(document.documentElement.className).to.not.contain('scroll-up');
    }, 100);
  });
  it('should have scroll-up class', () => {
    purejs.scrollToAnchor('#container1');
    expect(window.pageYOffset).to.equal(document.querySelector('#container1').offsetTop);

    setTimeout(() => {
      expect(document.documentElement.className).to.contain('scroll-up');
      expect(document.documentElement.className).to.not.contain('scroll-down');
    }, 100);
  });
});
