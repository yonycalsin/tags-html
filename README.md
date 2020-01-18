<p align="center">
  <a href="https://github.com/yonicb/tags-html" target="blank"><img src="https://i.ibb.co/Gx11swj/tags-html-logo.png" width="120" alt="Tags-Html Logo" /></a>
</p>

<p align="center" style="max-width: 600px; margin: 10px auto;">
📖 List of all standard HTML5 tags 😄
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

- [🌐 Description](#🌐-description)
- [📦 Installation](#📦-installation)
- [▶️ Getting started](#▶️-getting-started)
  - [⛷️ Options](#options)
- [🎩 Stay in touch](#🎩-stay-in-touch)
- [📜 License](#📜-License)

## 🌐 Description

<p>
Under the hood, cbytes uses javascript, but also provides compatibility with a wide range of other libraries, such as: ReactJs, Vuejs, Angular, which allows the easy use of countless third-party add-ons that are available.
</p>

## 📦 Installation
<p>
To start using cbytes, you must install it with the npm or yarn package manager, as shown in the next section,
</p>

```ts
// To install using npm
npm install --save tags-html

// To install using yarn
yarn add tags-html
```

## ▶️ Getting started
<p>
To use the powerful function offered by cbytes is very simple, first we will import the package. Example:</p>

```js
// If you use ES5-
const htmlTags = require("tags-html");

// If you use ES6+ or Typescript
import htmlTags from "tags-html";
```

<p>
Example
</p>


```js
// Import
import htmlTags, { interactiveTags, formsTags, tabularTags } from "tags-html";

const allTags = htmlTags
/* Return: 
[
  'html',
  'head',
  'title',
  'base',
  'link',
  'meta',
  'style',
  'script',
  'noscript',
  'body',
  'section',
  'nav',
  'article',
  'aside',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'header',
  'footer',
  ... more items,
*/

const interactiveTags = interactiveTags
// Return: [ 'details', 'summary', 'command', 'menu' ]

const formsTags = formsTags
/* Return: [
    'form',     'fieldset',
    'legend',   'label',
    'input',    'button',
    'select',   'datalist',
    'optgroup', 'option',
    'textarea', 'keygen',
    'output',   'progress',
    'meter'
  ]
*/

const tabularTags = tabularTags
/* Return: [
    'table',    'caption',
    'colgroup', 'col',
    'tbody',    'thead',
    'tfoot',    'tr',
    'td',       'th'
  ]
*/

```

### ⛷️ Options

| Group    | Count     |
|---------|----------|
| rootTags   | `1` |
| metadataTags | `6` |
| scriptingTags   | `2` |
| sectionsTags   | `15` |
| groupContentTags   | `13` |
| textSemanticsTags   | `20` |
| editionsTags   | `2` |
| embeddedTags   | `14` |
| tabularTags   | `10` |
| formsTags   | `15` |
| interactiveTags   | `4` |
| ***total*** |  `111`|


## 🎩 Stay in touch

* Author [Yoni Calsin](https://github.com/yonicb)
* Twitter [Yoni Calsin](https://twitter.com/yonicalsin)

## 📜 License

Tags-Html is [MIT licensed](LICENSE).
