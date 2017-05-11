'use strict';

import { Anchor, Cookies, Touchable } from '../index';

Touchable();

document.addEventListener("DOMContentLoaded", function(event) {
    Anchor.init({ offset: 56 });
    Cookies.init({ padding_bottom: true });
});
