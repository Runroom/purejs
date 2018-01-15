describe('Scroll Direction behavior', () => {
  beforeEach(() => {
    const fixture = `<div class="sample">
      <div id="container1" style="height: 600px;">&nbsp;</div>
      <div id="container2" style="height: 600px;">&nbsp;</div>
      <div style="height: 600px;">&nbsp;</div>
    </div>`;

    document.body.insertAdjacentHTML('afterbegin', fixture);
    purejs.scrollDirection();
  });
  afterEach(() => {
    document.body.removeChild(document.querySelector('.sample'));
  });

  it('should not have scroll direction class', () => {
    expect(document.documentElement.className).to.not.have.string('scroll');
  });
  it('should have scroll-down class', () => {
    purejs.scrollToAnchor('#container2');
    expect(document.documentElement.className).to.contain('scroll-down');
    expect(document.documentElement.className).to.not.contain('scroll-up');
  });
  it('should have scroll-up class', () => {
    purejs.scrollToAnchor('#container1');
    expect(document.documentElement.className).to.contain('scroll-up');
    expect(document.documentElement.className).to.not.contain('scroll-down');
  });
});
