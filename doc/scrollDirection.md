# ScrollDirection

Adds classes to the `documentElement` on scroll up or down. You can define the delta when it will be executed, from both sides.

```javascript
import { scrollDirection } from '@runroom/purejs';

// Default settings
const settings = {
  deltaUp: 10,
  deltaDown: 10,
  classUp: 'scroll-up',
  classDown: 'scroll-down'
};
```

| Setting | Description |
| ------- |:------------|
| deltaUp | `{integer}` Delta of the window top where the function will be triggered |
| deltaDown | `{integer}` Delta of the window bottom where the function will be triggered |
| classUp | `{string}` The class to be added on scroll up |
| classDown | `{string}` The class to be added on scroll down |