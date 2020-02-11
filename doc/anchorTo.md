# AnchorTo

Creates a methods to anchor a certain element or value.

```javascript
import anchorTo from '@runroom/purejs/lib/anchorTo';

// Usage
anchorTo({ element: 300 });
//or
anchorTo({ element: '#section' })
```

It will anchor to a certain value or element in th window. If a class or id is passed, it will search it on the window and will get its offset top.

| Parameters | Description                                    |
| ---------- | :--------------------------------------------- |
| element    | `{integer|string}` Number, element class or id |
| offset     | `{integer}` Offset of the scroll. Default is 0 |
