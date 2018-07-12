# Debounce

> Further reading: [https://davidwalsh.name/javascript-debounce-function](https://davidwalsh.name/javascript-debounce-function)

Ensuring a given task doesn't fire so often that it bricks browser performance.

```javascript
import { debounce } from '@runroom/purejs';

// Usage
window.addEventListener('resize', debounce(() => {
  // Your awesome code
}));
```
> Note: for a better resize event [check this](./events.md)
