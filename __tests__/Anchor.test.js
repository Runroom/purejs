'use strict';
import Anchor, { scrollToAnchor } from '../src/Anchor';

document.body.innerHTML = `<ul>
    <li><a href="" class="trigger1 js-anchor" data-anchor="#test1"></a></li>
    <li class="trigger2 js-anchor" data-anchor="#test2"></li>
  </ul>
  <div id="test1"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div>
  <div id="test2"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div>`;

describe('Anchor behavior', () => {
  Anchor();

  it('window offset should be 0', () => expect(window.pageYOffset).toEqual(0));
  document.querySelector('.trigger1').click();
  console.log('offset', document.getElementById('test1').offsetTop);
  it('window offset should be 0', () => expect(window.pageYOffset).toEqual(20));
});
