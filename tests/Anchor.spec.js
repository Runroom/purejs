// import { beforeEach, afterEach } from 'mocha';
// import Anchor from 'Anchor';

// before(() => {
//   var Anchor = require('../src/Anchor');
// });

beforeEach(() => {
  const fixture = '<div class="foo"></div>';

  document.body.insertAdjacentHTML('afterbegin', fixture);
  // Anchor();
});
afterEach(() => {
  document.body.removeChild(document.querySelector('.foo'));
});

describe('Anchor behavior', () => {
  it('window offset should be 0', () => expect(window.pageYOffset).to.equal(0));
  it('element exists', () => expect(document.querySelector('.foo')).to.not.be.null);
  // document.querySelector('.trigger1').click();
  // console.log('offset', document.getElementById('test1').offsetTop);
  // it('window offset should be 0', () => expect(window.pageYOffset).toEqual(20));
});
