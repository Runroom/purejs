# ScrollTo

Creates two methods for anchor and scroll with animation to a certain element or value.

```javascript
import { scrollTo } from '@runroom/purejs';

// Usage
const elementTop = document.querySelector('.my-element').offsetTop;
scrollTo.anchor(0)
scrollTo.animate(elementTop, 200)
```

## Methods

### anchor()

It will anchor to a certain value or element in th window. If a class or id is passed, it will search it on the window and will get its offset top.

| Parameters | Description |
| ---------- |:------------|
| element | `{integer|string}` Number, element class or id |
| offset | `{integer}` Offset of the scroll. Default is 0 |

### animate()

Same as anchor, the difference is that it will animate the scroll to the position.

| Setting | Description |
| ------- |:------------|
| element | `{integer|string}` Number, element class or id |
| speed | `{integer}` Speed of the animation. Default is 500 |
| offset | `{integer}` Offset of the scroll. Default is 0 |
