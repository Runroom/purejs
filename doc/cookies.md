# Cookies

> Dependency: [js-cookie](https://www.npmjs.com/package/js-cookie) to manage Cookies setting

Adds the **functionality** to your _cookies policy_ modal. You can use any markup and this module will be in charge of creating/requesting the acceptance cookie to show/hide the modal.

```javascript
import { cookies, getPolicyCookie, removePolicyCookie } from '@runroom/purejs';

// Default settings
const settings = {
  element: 'js-cookies',
  button: 'js-cookies-accept',
  cookieName: 'accept_cookies',
  visibleClass: false,
  paddingBottom: false
};
```

| Setting       | Description           |
| ------------- |:----------------------|
| element | `{string}` The class of the cookie modal |
| button | `{string}` The class of the accept cookie modal button |
| cookieName | `{string}` The name of the accept cookie |
| visibleClass | `{string}` The class of the element to make it visible. |
| paddingBottom | `{boolean}` To add a padding at the bottom of the document to prevent element overlay |

## Methods

### `cookies(opts)`

The **cookies** method initialize the function checking if the cookie exists and making your cookies modal visible or not. You can pass a custom setting.

### `getPolicyCookie()`

The **getPolicyCookie** method returns the created cookie.

### `removePolicyCookie()`

The **removePolicyCookie** method removes the created cookie.