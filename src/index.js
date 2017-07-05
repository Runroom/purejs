import { Anchor, Cookies, Touchable, handleScrollToAnchor } from '../index';

Touchable();

document.addEventListener('DOMContentLoaded', () => {
  Anchor({ offset: 56 });
  Cookies({ paddingBottom: true });

  document.querySelector('.section4').addEventListener('click', event => {
    event.preventDefault();
    handleScrollToAnchor('#Section4');
  });
});
