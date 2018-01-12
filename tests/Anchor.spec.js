describe('Anchor behavior', () => {
  beforeEach(() => {
    const fixture = `<div class="sample">
      <ul class="list">
        <li><a class="anchor1 js-anchor" data-anchor="container1"></a></li>
        <li class="anchor2 js-anchor" data-anchor="container2"></li>
      </ul>
      <div id="container1" style="height: 600px;">&nbsp;</div>
      <div id="container2" style="height: 600px;">&nbsp;</div>
      <div id="container3" style="height: 600px;">&nbsp;</div>
      <div style="height: 600px;">&nbsp;</div>
    </div>`;

    document.body.insertAdjacentHTML('afterbegin', fixture);
    purejs.anchor();
  });
  afterEach(() => {
    document.body.removeChild(document.querySelector('.sample'));
  });

  it('window offset should be 0', () => expect(window.pageYOffset).to.equal(0));
  it('sample container should exist', () => expect(document.querySelector('.sample')).to.not.be.null);
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
