# Cookies

> Deprecated since 3.x

Create, Read and Deletes cookies.

```javascript
import { cookies } from "@runroom/purejs";
```

## Methods

### `get('cookie-name')`

The **get** method returns the cookie value if exists, otherwise it returns an empty value.

### `set('cookie-name', 'value', days)`

The **set** method created a cookie. Parameters are `name` _(string)_,

| Parameters | Description                                                                                                            |
| ---------- | :--------------------------------------------------------------------------------------------------------------------- |
| name       | `{string}` \* Mandatory. The name for the cookie.                                                                      |
| value      | `{n}` The value can be any type of value. Default is 1                                                                 |
| days       | `{integer}` The days that the cookie will be available, by default is one year because of legal issues. Default is 365 |

### `remove('cookie-name')`

The **remove** method removes the created cookie.
