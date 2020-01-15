# md5

[![npm](https://img.shields.io/npm/v/@dikman/md5.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/@dikman/md5)
[![Downloads](https://img.shields.io/npm/dt/@dikman/md5.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/@dikman/md5)
[![Monthly Downloads](https://img.shields.io/npm/dm/@dikman/md5.svg)](https://www.npmjs.com/package/@dikman/md5)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@dikman/md5.svg)](https://bundlephobia.com/result?p=@dikman/md5)
[![License](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](/LICENSE)

The library for calculating Message-Digest algorithm 5 (MD5) for browser-side. It is fully compatible with UTF-8 encoding.

This library is an adaptation of [webtoolkit.md5](https://github.com/killmenot/webtoolkit.md5) for TypeScript. It was being made for a collection.

## Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [API](#api)
- [Calculate a MD5](#calculate-a-md5)
- [License](#license)
- [Generated](#generated)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```
npm install @dikman/md5
```

## API

```js
function md5(str: string): string;
```

## Calculate a MD5

```js
import { md5 } from '@dikman/md5';

console.log(md5('hello'));
// "5d41402abc4b2a76b9719d911017c592"
```

## License

The MIT License (MIT)

Copyright (c) 2020 Dmitriy Kuznetsov

## Generated

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22.
