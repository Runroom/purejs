# PureJS

[![Build Status](https://travis-ci.org/Runroom/purejs.svg?branch=master)](https://travis-ci.org/Runroom/purejs.svg)
[![Coverage Status](https://coveralls.io/repos/github/Runroom/purejs/badge.svg?branch=master)](https://img.shields.io/coveralls/github/Runroom/purejs/master.svg)

PureJS is a pack of pure javascript, non-jquery, functions exported as [Node.js](https://nodejs.org/) modules.

## Quickstart

Install the package as your project dependency

```bash
$ yarn add @runroom/purejs
```

Use it importing the whole library or the methods you need

```javascript
import events from '@runroom/purejs/lib/events'

events.onDocumentReady(() => {
  // your code
});
```

## Supported modules

* [anchorTo](./doc/anchorTo.md)
* [animateTo](./doc/animateTo.md)
* [~~cookies~~ (Deprecated)](./doc/cookies.md)
* [debounce](./doc/debounce.md)
* [events](./doc/events.md)
* [forEach](./forEach.md)
* [safeScrollTop](./doc/safeScrollTop.md)
* [scrollDirection](./doc/scrollDirection.md)
* [touchable](./doc/touchable.md)
