# AnimateTo

Creates a method to scroll with animation to a certain element or value.

```javascript
import animateTo from '@runroom/purejs/lib/animateTo';

// Usage
animateTo({ element: 300 });
//or
animateTo({ element: '#section', speed: 500 })
```

It will anchor to a certain value or element in the window. If a class or id is passed, it will search it on the window and will get its offset top.

| Setting | Description                                        |
| ------- | :------------------------------------------------- |
| element | `{integer|string}` Number, element class or id     |
| speed   | `{integer}` Speed of the animation. Default is 500 |
| offset  | `{integer}` Offset of the scroll. Default is 0     |
