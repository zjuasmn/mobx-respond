# mobx-respond [![npm package][npm-badge]][npm] [![GitHub issues](https://img.shields.io/github/issues/zjuasmn/mobx-respond.svg)](https://github.com/zjuasmn/mobx-respond/issues) [![Build Status](https://travis-ci.org/zjuasmn/mobx-respond.svg?branch=master)](https://travis-ci.org/zjuasmn/mobx-respond) [![Coverage Status](https://coveralls.io/repos/github/zjuasmn/mobx-respond/badge.svg?branch=master)](https://coveralls.io/github/zjuasmn/mobx-respond?branch=master)

[npm-badge]: https://img.shields.io/npm/v/mobx-respond.svg?style=flat-square
[npm]: https://www.npmjs.org/package/mobx-respond

Responsive web design script with mobx. The goal of this lib is to provide a CSS3 min/max-width media query like function in javascript, so you can perform different action in different size of screen. So you can do things easily like:

- show custom message when viewport is too small.
- jump to mobile version site when viewport is too small.


## Installation

Using [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/):
```bash
$ npm install --save mobx-respond
or
$ yarn add mobx-respond
```

Use CDN

- Include mobx first [https://unpkg.com/mobx/lib/mobx.umd.js](https://unpkg.com/mobx/lib/mobx.umd.js)
- Then include [https://unpkg.com/mobx-respond/umd/mobx-respond.js](https://unpkg.com/mobx-respond/umd/mobx-respond.js)

Then get the `respond` class:

```js
// using ES6 modules
import Respond from 'mobx-respond'

// using CommonJS modules
var Respond = require('mobx-respond').Respond

// using CDN
var Respond = mobxRespond.Respond

var respond = new Respond()
```

## Usage

- ** construtor(config) **

default `config` is
```js
{
    xs: [null, 767],
    sm: [768, 991],
    md: [992, 1199],
    lg: [1200, null],
};
```

## Props

- **`getter` width**
- type: `number`

Width of current viewport

- **`getter` height**
- type: `number`

Height of current viewport

- **`getter` XXX**
- type: `boolean`

Whether current viewport satisfied the configuration of **XXX**



## Demo
