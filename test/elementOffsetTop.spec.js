describe('Element Offset Top', () => {
  it('should return same element offset top', done => {
    expect(purejs.default.elementOffsetTop('#container1')).to.equal(document.querySelector('#container1').offsetTop);
    done();
  });

  it('should return same integer offset top', done => {
    expect(purejs.default.elementOffsetTop(200)).to.equal(200);
    done();
  });
});
