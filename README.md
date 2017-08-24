# Pure JS

Pure JS is a pack of pure javascript non-jquery functions exported as [Node.js](https://nodejs.org/) modules.

## Installation

```
$ yarn add pure-js
$ npm i pure-js
```

## Supported modules

### Anchor ⚓️
------------

Adds an anchor link functionality. Of course it can be replaced with the html href attribute, but this function provides an offset option which adds more space to manage your fixed headers.

If it's used along with the **ScrollDirection** function, you must set the option as **true**.

```javascript
import { Anchor, handleScrollToAnchor } from 'pure-js';

// Default settings
const settings = {
  trigger: '.js-anchor',
  scrollDirection: false,
  offset: 0
};

// You can use the default function to act on all triggers
Anchor(settings);

// Or you can just call the method to a single element
handleScrollToAnchor('#my-element');
```

| Setting       | Description           |
| ------------- |:----------------------|
| trigger | `{string}` The class of the link element |
| scrollDirection | `{boolean}` use or not the ScrollDirection module |
| offset | `{integer}` size (in pixels) of the offset top of the document |

### Cookies 🍪
--------------

Adds the functionality to your _cookies policy_ modal. You can use any markup and this module will be in charge of creating the acceptance cookies and show/hide the modal

It uses **js-cookie** to manage Cookies setting.

```javascript
import { Cookies } from 'pure-js';

// Default settings
const settings = {
  element: '.js-cookies',
  button: '.js-cookies-accept',
  cookieName: 'accept_cookies',
  visibleClass: 'cookies--state-visible',
  paddingBottom: false
};

Cookies();
```

| Setting       | Description           |
| ------------- |:----------------------|
| element | `{string}` The class of the cookie policy element |
| button | `{string}` The class of the accept button |
| cookieName | `{string}` The name of the accept cookie |
| visibleClass | `{string}` The class of the element to make it visible |
| paddingBottom | `{boolean}` To add a padding at the bottom of the document to prevent element overlay |

### ForEach ☔️
--------------

### GoTop 🔝
------------

### ScrollDirection ⬆⬇
-----------------------

### ScrollTo 🚀
---------------

### ScrollTop 🙊
----------------

### Touchable 👆🏽
----------------
