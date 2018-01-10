// import Anchor from '../src/Anchor';

describe('Anchor behavior', () => {
  beforeEach(() => {
    const fixture = '<div class="foo"></div>';

    document.body.insertAdjacentHTML('afterbegin', fixture);
  });

  // remove the html fixture from the DOM
  afterEach(() => {
    document.body.removeChild(document.getElementById('fixture'));
  });

  // call the init function of calculator to register DOM elements
  beforeEach(() => {
    Anchor();
  });

  // it('sample', () => assert.equal([1, 2, 3].indexOf(4), -1));
  it('window offset should be 0', () => expect(window.pageYOffset).to.equal(0));
  // it('window phantom', () => {
  //   expect(window.callPhantom).to.exist();
  //   window.callPhantom({ type: 'render' });
  // });
  it('element exists', () => expect(document.querySelector('.foo')).to.not.be.null);
  // document.querySelector('.trigger1').click();
  // console.log('offset', document.getElementById('test1').offsetTop);
  // it('window offset should be 0', () => expect(window.pageYOffset).toEqual(20));
});
