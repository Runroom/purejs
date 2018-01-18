# ScrollToTop

Creates a scroll to top button.

```javascript
import { scrollToTop, createScrollTopButton } from '@runroom/purejs';

// Default settings
const settings = {
  element: 'js-scrollTop',
  hiddenClass: null,
  createButton: true,
  scrollOffset: 0.25
};
```

| Setting | Description |
| ------- |:------------|
| element | `{string}` The class for the scroll to top button |
| hiddenClass | `{string}` The class for the button visibility. By default it will show/hide the button. |
| createButton | `{boolean}` To create, or not, the button automatically.|
| scrollOffset | `{float}` The percent of the page where the button will appear. |

## Methods

### `scrollToTop(opts)`

The **scrollToTop** method initialize the function adding the button and the event listeners to the window scroll. You can pass a custom setting.

### `createScrollTopButton()`

The **createScrollTopButton** method creates the button manually.