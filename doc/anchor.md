# Anchor

Adds an anchor link functionality with animation. you can set the offset top of the anchor.

```javascript
import { anchor, scrollToAnchor } from '@runroom/purejs';

// Default settings
const settings = {
  element: 'js-anchor',
  attribute: 'data-anchor',
  offsetTop: 0
};
```

| Setting | Description |
| ------- |:------------|
| element | `{string}` The class for the anchor trigger element |
| attribute | `{string}` The attribute of this element to look for the anchor |
| offsetTop | `{integer}` Size (in pixels) of the offset top of the document |

## Methods

### `anchor(opts)`

The **anchor** method initialize the function adding event listeners to all anchor elements in the document. You can pass a custom setting.

### `scrollToAnchor(element)`

The **scrollToAnchor** method executes the anchor to a single element passed as parameter. This parameter should be an ID (ie. #my-element)