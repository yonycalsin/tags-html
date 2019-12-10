/*!
 * Tags-Html v1.0.0 (https://github.com/yonicb/tags-html/)
 * Copyright 2019 The Tags-Html Author
 * Copyright 2019 Yoni Calsin.
 * Licensed under MIT (https://github.com/yonicb/tags-html/blob/master/LICENSE)
 */
const rootTags = [
    'html',
];
const metadataTags = [
    'head',
    'title',
    'base',
    'link',
    'meta',
    'style',
];
const scriptingTags = [
    'script',
    'noscript',
];
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
const editionsTags = [
    'ins',
    'del',
];
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
        exports = module.exports = TagsHtml,
            rootTags,
            metadataTags,
            scriptingTags,
            sectionsTags,
            groupContentTags,
            textSemanticsTags,
            editionsTags,
            embeddedTags,
            tabularTags,
            formsTags,
            interactiveTags;
    }
    exports.TagsHtml = TagsHtml,
        rootTags,
        metadataTags,
        scriptingTags,
        sectionsTags,
        groupContentTags,
        textSemanticsTags,
        editionsTags,
        embeddedTags,
        tabularTags,
        formsTags,
        interactiveTags;
}
