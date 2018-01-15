describe('Cookies behavior', () => {
  beforeEach(() => {
    purejs.cookies();
  });

  it('should not exist cookie by default', () => {
    expect(purejs.getPolicyCookie()).to.be.undefined;
  });
  it('element should have visible class', () => {
    expect(document.querySelector('.js-cookies').className).to.have.string('cookies--state-visible');
  });
  it('element should not be visible', () => {
    expect(purejs.getPolicyCookie()).to.be.undefined;
    document.querySelector('.js-cookies-accept').click();
    expect(document.querySelector('.js-cookies').className).to.not.have.string('cookies--state-visible');
    expect(purejs.getPolicyCookie()).to.equal('true');
  });
  it('cookie should be deleted', () => {
    expect(purejs.getPolicyCookie()).to.not.be.undefined;
    purejs.removePolicyCookie();
    expect(purejs.getPolicyCookie()).to.be.undefined;
  });
});
