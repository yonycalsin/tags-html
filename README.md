<p align="center">
  <a href="https://github.com/yonicb/tags-html" target="blank"><img src="https://i.ibb.co/Gx11swj/tags-html-logo.png" width="120" alt="Tags-Html Logo" /></a>
</p>

<p align="center" style="max-width: 600px; margin: 10px auto;">
🎁 Utility to analyze a byte to unit chain and vice versa, unit converter ‍🌈, from KB to YB and includes many functions that will allow you to make your project more professional
</p>
<p align="center" style="max-width: 450px; margin: auto;">
   <a href="https://github.com/yonicb/tags-html"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square" /></a>
   <a href="https://github.com/yonicb/tags-html"><img src="https://img.shields.io/spiget/stars/1000?color=brightgreen&label=Star&logo=github" /></a>
   <a href="https://www.npmjs.com/tags-html" target="_blank">
   <img src="https://img.shields.io/npm/v/tags-html" alt="NPM Version" /></a>
   <a href="https://www.npmjs.com/tags-html" target="_blank">
   <img src="https://img.shields.io/npm/l/tags-html" alt="Package License" /></a>
   <a href="https://www.npmjs.com/tags-html" target="_blank">
   <img src="https://img.shields.io/npm/dm/tags-html" alt="NPM Downloads" /></a>
   <a href="https://github.com/yonicb/tags-html" target="_blank">
   <img src="https://s3.amazonaws.com/assets.coveralls.io/badges/coveralls_95.svg" alt="Coverage" /></a>
   <a href="https://github.com/yonicb/tags-html"><img src="https://img.shields.io/badge/Github%20Page-tags.html-yellow?style=flat-square&logo=github" /></a>
   <a href="https://github.com/yonicb"><img src="https://img.shields.io/badge/Author-Yoni%20Calsin-blueviolet?style=flat-square&logo=appveyor" /></a>
   <a href="https://twitter.com/yonicalsin" target="_blank">
   <img src="https://img.shields.io/twitter/follow/yonicalsin.svg?style=social&label=Follow"></a>
</p>

## 🌐 Description

<p>
Under the hood, cbytes uses javascript, but also provides compatibility with a wide range of other libraries, such as: ReactJs, Vuejs, Angular, which allows the easy use of countless third-party add-ons that are available.
</p>

## 📦 Installation
<p>
To start using cbytes, you must install it with the npm or yarn package manager, as shown in the next section,
</p>

``` properties
// To install using npm
npm install cbytes -S

// To install using yarn
yarn add cbytes
```

## ▶️ Getting started
<p>
To use the powerful function offered by cbytes is very simple, first we will import the package. Example:</p>

```js
// If you use nodejs, reajs, vuejs, or angular
const cbytes = require("cbytes");

// If you use ES6+
import cbytes from "cbytes";
```

<p>
Example
</p>


```js
cbytes.sizeToObject(6442450944)
// return: { unit: 'GB', size: 6, format: '6GB' }

cbytes.objectToFormat({ unit: 'TB', size: 6.5, format: '6.5TB' })
// Return: '6.5TB'

cbytes.objectToFormat({ unit: 'KB', size: 7, format: '7KB' }, {
    separator: " "
})
// Return: '7 KB'


cbytes.formatToObject("7KB")
// Return: { unit: 'KB', size: 7, format: '7KB' }


cbytes(6291456)
// Return: '6MB'

cbytes(1000)
// Return: '1000B'

cbytes(6.88456654, {
    everyThousand: ' '
})
// Return: '6.88 456 654B'

/**
 * Options to convert from bytes to units
 * */
cbytes(6291456, {
  separator: ' ',
  decimals: 2
})
// Return: '6.00 MB'


cbytes('6GB')
// Return: 6442450944

```

### Multiples using the prefixes of the International System

| Unit  | Bytes                             | Factor        |
|----|-----------------------------------|---------------|
| B  |                 1                 | 2<sup>0</sup> |
| KB |                1024               | 2<sup>10</sup> |
| MB |             1 048 576             | 2<sup>20</sup> |
| GB |           1 073 741 824           | 2<sup>30</sup> |
| TB |         1 099 511 627 776         | 2<sup>40</sup> |
| PB |       1 125 899 906 842 624       | 2<sup>50</sup> |
| EX |     1 152 921 504 606 846 976     | 2<sup>60</sup> |
| ZB |   1 180 591 620 717 411 303 424   | 2<sup>70</sup> |
| YB | 1 208 925 819 614 629 174 706 176 | 2<sup>80</sup> |

### Arguments

| Name    | Type     | Description        |
|---------|----------|--------------------|
| value   | `number` \| `string` | Value in bytes     |
| options | `Object` | Conversion options |

### Options

| Property          | Type   | Description                                                                             |
|-------------------|--------|-----------------------------------------------------------------------------------------|
| decimals | `number` | Maximum number of decimals to include in the output. Default value is all decimals |
| everyThousand | `string` | Example of values: `' '`, `','` and `.`... Default value to `''`. |
| separator | `string` | Separator to use between number and unit. Default value to `''`. |


## 🎩 Stay in touch

* Author [Yoni Calsin](https://github.com/yonicb)
* Twitter [Yoni Calsin](https://twitter.com/yonicalsin)

## 📜 License

Tags-Html is [MIT licensed](LICENSE).
