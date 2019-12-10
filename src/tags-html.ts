/*!
 * Tags-Html v1.0.0 (https://github.com/yonicb/tags-html/)
 * Copyright 2019 The Tags-Html Author
 * Copyright 2019 Yoni Calsin.
 * Licensed under MIT (https://github.com/yonicb/tags-html/blob/master/LICENSE)
 */

// Root Elements
const rootTags = [
   'html',
];

// Document Metadata
const metadataTags = [
   'head',
   'title',
   'base',
   'link',
   'meta',
   'style',
];

// Scripting
const scriptingTags = [
   'script',
   'noscript',
];

// Sections
const sectionsTags = [
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
   'address',
   'main',
];

// Content Grouping
const groupContentTags = [
   'p',
   'hr',
   'pre',
   'blockquote',
   'ol',
   'ul',
   'li',
   'dl',
   'dt',
   'dd',
   'figure',
   'figcaption',
   'div',
];

// Text level semantics
const textSemanticsTags = [
   'a',
   'em',
   'strong',
   'small',
   's',
   'cite',
   'q',
   'dfn',
   'abbr',
   'data',
   'time',
   'code',
   'var',
   'samp',
   'kbd',
   'sub',
   'sup',
   'i',
   'b',
   'u',
   'mark',
   'ruby',
   'rt',
   'rp',
   'bdi',
   'bdo',
   'span',
   'br',
   'wbr',
];

// Editions
const editionsTags = [
   'ins',
   'del',
];

// Embedded Content
const embeddedTags = [
   'img',
   'iframe',
   'embed',
   'object',
   'param',
   'video',
   'audio',
   'source',
   'track',
   'canvas',
   'map',
   'area',
   'svg',
   'math',
];

// Tabular Data
const tabularTags = [
   'table',
   'caption',
   'colgroup',
   'col',
   'tbody',
   'thead',
   'tfoot',
   'tr',
   'td',
   'th',
];

// Forms
const formsTags = [
   'form',
   'fieldset',
   'legend',
   'label',
   'input',
   'button',
   'select',
   'datalist',
   'optgroup',
   'option',
   'textarea',
   'keygen',
   'output',
   'progress',
   'meter',
];

// Interactive elements
const interactiveTags = [
   'details',
   'summary',
   'command',
   'menu',
];

const TagsHtml = [
   ...rootTags,
   ...metadataTags,
   ...scriptingTags,
   ...sectionsTags,
   ...groupContentTags,
   ...textSemanticsTags,
   ...editionsTags,
   ...embeddedTags,
   ...tabularTags,
   ...formsTags,
   ...interactiveTags,
];
if (typeof exports !== 'undefined') {
   if (typeof module !== 'undefined' && module.exports) {
      // tslint:disable-next-line: max-line-length
      exports = module.exports = TagsHtml,
         // tslint:disable-next-line: no-unused-expression
         rootTags,
         // tslint:disable-next-line: no-unused-expression
         metadataTags,
         // tslint:disable-next-line: no-unused-expression
         scriptingTags,
         // tslint:disable-next-line: no-unused-expression
         sectionsTags,
         // tslint:disable-next-line: no-unused-expression
         groupContentTags,
         // tslint:disable-next-line: no-unused-expression
         textSemanticsTags,
         // tslint:disable-next-line: no-unused-expression
         editionsTags,
         // tslint:disable-next-line: no-unused-expression
         embeddedTags,
         // tslint:disable-next-line: no-unused-expression
         tabularTags,
         // tslint:disable-next-line: no-unused-expression
         formsTags,
         // tslint:disable-next-line: no-unused-expression
         interactiveTags;
   }
   // tslint:disable-next-line: max-line-length
   exports.TagsHtml = TagsHtml,
      // tslint:disable-next-line: no-unused-expression
      rootTags,
      // tslint:disable-next-line: no-unused-expression
      metadataTags,
      // tslint:disable-next-line: no-unused-expression
      scriptingTags,
      // tslint:disable-next-line: no-unused-expression
      sectionsTags,
      // tslint:disable-next-line: no-unused-expression
      groupContentTags,
      // tslint:disable-next-line: no-unused-expression
      textSemanticsTags,
      // tslint:disable-next-line: no-unused-expression
      editionsTags,
      // tslint:disable-next-line: no-unused-expression
      embeddedTags,
      // tslint:disable-next-line: no-unused-expression
      tabularTags,
      // tslint:disable-next-line: no-unused-expression
      formsTags,
      // tslint:disable-next-line: no-unused-expression
      interactiveTags;
}
