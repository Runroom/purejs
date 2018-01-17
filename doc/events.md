# Events

Creates safe event listeners of the Dom.

```javascript
import { events } from '@runroom/purejs';

// Usage
events.onDocumentReady(() => {
  // My awesome code
});

events.onResize(() => {
  // My awesome code
});
```

## Methods

### `onDocumentReady(function)`

Executes the function passed as parameter once the DOM is ready.

### `onResize(function)`

Executes the function passed as parameter on resize of the window. It has a debounce method to prevent firing it so often and checks only the changes of the window width (because issues on mobile navigation, which triggers resize on height modification).