describe('Cookies behavior', () => {
  beforeEach(() => {
    purejs.cookies();
  });

  it('should not exist cookie by default', done => {
    expect(purejs.getPolicyCookie()).to.be.undefined;
    done();
  });
  it('element should have visible class', done => {
    expect(document.querySelector('.js-cookies').className).to.have.string('cookies--state-visible');
    done();
  });
  it('element should not be visible', done => {
    expect(purejs.getPolicyCookie()).to.be.undefined;
    document.querySelector('.js-cookies-accept').click();
    expect(document.querySelector('.js-cookies').className).to.not.have.string('cookies--state-visible');
    expect(purejs.getPolicyCookie()).to.equal('true');
    done();
  });
  it('cookie should be deleted', done => {
    expect(purejs.getPolicyCookie()).to.not.be.undefined;
    purejs.removePolicyCookie();
    expect(purejs.getPolicyCookie()).to.be.undefined;
    done();
  });
});
