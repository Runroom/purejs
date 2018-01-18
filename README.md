# PureJS

[![Build Status](https://travis-ci.org/Runroom/purejs.svg?branch=master)](https://travis-ci.org/Runroom/purejs.svg)
[![Dependency Status](https://dependencyci.com/github/Runroom/purejs/badge)](https://dependencyci.com/github/Runroom/purejs)

PureJS is a pack of pure javascript, non-jquery, functions exported as [Node.js](https://nodejs.org/) modules.

## Quickstart

Install the package as your project dependency

```bash
$ yarn add @runroom/purejs
```

Use it importing the whole library or the methods you need

```javascript
import purejs from '@runroom/purejs';

purejs.events.onDocumentReady(() => {
  purejs.cookies();
  // ...
});

// or
import { cookies, events } from '@runroom/purejs'

events.onDocumentReady(() => {
  cookies();
  // ...
});
```

## Supported modules

* [Anchor](./doc/anchor.md)
* [Cookies](./doc/cookies.md)
* [Debounce](./doc/debounce.md)
* [Events](./doc/events.md)
* [ForEach](./forEach.md)
* [SafeScrollTop](./doc/safeScrollTop.md)
* [ScrollDirection](./doc/scrollDirection.md)
* [ScrollTo](./doc/scrollTo.md)
* [ScrollToTop](./doc/scrollToTop.md)
* [Touchable](./doc/touchable.md)
