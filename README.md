# PureJS

[![npm version](https://img.shields.io/npm/v/@runroom/purejs.svg)](https://www.npmjs.com/package/@runroom/purejs)
![node](https://img.shields.io/node/v/@runroom/purejs.svg)

[![CI](https://github.com/Runroom/purejs/actions/workflows/ci.yaml/badge.svg)](https://github.com/Runroom/purejs/actions/workflows/ci.yaml)
[![QA](https://github.com/Runroom/purejs/actions/workflows/qa.yaml/badge.svg)](https://github.com/Runroom/purejs/actions/workflows/qa.yaml)
[![codecov](https://codecov.io/gh/Runroom/purejs/branch/3.x/graph/badge.svg)](https://codecov.io/gh/Runroom/purejs)

PureJS is a pack of pure javascript, non-jquery, functions exported as [Node.js](https://nodejs.org/) modules.

## Quickstart

Install the package as your project dependency

```bash
npm install @runroom/purejs
```

Use it importing the whole library or the methods you need

```javascript
import events from "@runroom/purejs/lib/events";

events.onDocumentReady(() => {
    // your code
});
```

## Supported modules

- [anchorTo](./doc/anchorTo.md)
- [animateTo](./doc/animateTo.md)
- [~~cookies~~ (Deprecated)](./doc/cookies.md)
- [debounce](./doc/debounce.md)
- [events](./doc/events.md)
- [forEach](./forEach.md)
- [safeScrollTop](./doc/safeScrollTop.md)
- [scrollDirection](./doc/scrollDirection.md)
- [touchable](./doc/touchable.md)
