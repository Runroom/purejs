describe('Cookies behavior', () => {
  beforeEach(() => {
    const fixture = `<div class="sample">
      <div class="js-cookies">
        <button class="js-cookies-accept"></button>
      </div>
    </div>`;

    document.body.insertAdjacentHTML('afterbegin', fixture);
    purejs.Cookies();
  });
  afterEach(() => {
    document.body.removeChild(document.querySelector('.sample'));
    purejs.removePolicyCookie();
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
});
