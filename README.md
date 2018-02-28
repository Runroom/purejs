# PureJS

[![Build Status](https://travis-ci.org/Runroom/purejs.svg?branch=master)](https://travis-ci.org/Runroom/purejs.svg)
[![Coverage Status](https://coveralls.io/repos/github/Runroom/purejs/badge.svg?branch=master)](https://coveralls.io/github/Runroom/purejs?branch=master)
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
  purejs.cookies.get('mycookie');
  // ...
});

// or
import { cookies, events } from '@runroom/purejs'

events.onDocumentReady(() => {
  cookies.get('mycookie');
  // ...
});
```

## Supported modules

* [Cookies](./doc/cookies.md)
* [Debounce](./doc/debounce.md)
* [Events](./doc/events.md)
* [ForEach](./forEach.md)
* [SafeScrollTop](./doc/safeScrollTop.md)
* [ScrollDirection](./doc/scrollDirection.md)
* [ScrollTo](./doc/scrollTo.md)
* [Touchable](./doc/touchable.md)
