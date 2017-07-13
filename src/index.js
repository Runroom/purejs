import { Anchor, ScrollDirection, Cookies, Touchable, handleScrollToAnchor } from '../index';

Touchable();

document.addEventListener('DOMContentLoaded', () => {
  ScrollDirection({ classUp: 'new-scroll-up' });
  Anchor({ offset: 56 });
  Cookies({ paddingBottom: true });

  document.querySelector('.section4').addEventListener('click', event => {
    event.preventDefault();
    handleScrollToAnchor('#Section4');
  });
});
