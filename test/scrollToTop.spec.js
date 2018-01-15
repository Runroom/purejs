describe('Scroll to top behavior', () => {
  it('button should not be created', () => {
    purejs.scrollToTop({ createButton: false });
    const el = document.querySelector('.js-scrollTop');
    expect(el).to.be.null;
  });

  it('button should be created', done => {
    purejs.scrollToAnchor('sample');
    purejs.scrollToTop({ createButton: true }).then(() => {
      expect(window.pageYOffset).to.be.equal(document.querySelector('#sample').offsetTop);
      expect(document.querySelector('.js-scrollTop')).to.not.be.null;
    });
    // expect(document.querySelector('.js-scrollTop').style.display).to.be.equal('none');

    // purejs.scrollToAnchor('#footer');
    // expect(window.pageYOffset).to.be.above(2000);
    // expect(document.querySelector('.js-scrollTop').style.display).to.be.equal('block');

    // document.querySelector('.js-scrollTop').click();
    // setTimeout(() => {
    //   // expect(window.pageYOffset).to.be.equal(0);
    //   done();
    // }, 200);
  });
});
