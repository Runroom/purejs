describe('Anchor behavior', () => {
  before(() => {
    purejs.anchor();
  });

  it('window offset should be 0', () => {
    expect(window.pageYOffset).to.equal(0);
  });
  it('sample container should exist', () => expect(document.querySelector('#sample')).to.not.be.null);
  it('should scroll to first container on click', () => {
    document.querySelector('.anchor1').click();
    expect(window.pageYOffset).to.equal(document.querySelector('#container1').offsetTop);
  });
  it('should scroll to second container on click', () => {
    document.querySelector('.anchor2').click();
    expect(window.pageYOffset).to.equal(document.querySelector('#container2').offsetTop);
  });
  it('should scroll to third container manually', () => {
    purejs.scrollToAnchor('#container3');
    expect(window.pageYOffset).to.equal(document.querySelector('#container3').offsetTop);
  });
});
