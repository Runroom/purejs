# Runroom Utility Kit

> Work in progress

Runroom utility kit is a pack of non-jquery javascript modules that can be extended using NPM

To install use either

```
$ yarn add runroom-utility-kit --dev

$ npm install --dev runroom-utility-kit
```

## List of modules

### Anchor ⚓️

**Anchor** is a module that adds an anchor link functionality.

Default setting values:
```
{
    trigger: '.js-anchor',
    offset: 0
}
```

Usage:

```
import { Anchor } from 'runroom-utility-kit';

var settings = {...};
Anchor.init(settings);
```