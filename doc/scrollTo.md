# ScrollTo

Create a window top animation to a given position.

```javascript
import { scrollTo } from '@runroom/purejs';

// Usage
const elementTop = document.querySelector('.my-element').offsetTop;
scrollTo(elementTop, 200)
```

| Parameters | Description |
| ---------- |:------------|
| position | `{integer}` |
| duration | `{integer}` Dureation of the animation. Default is 500 |