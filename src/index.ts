/*!
 * Tags Html v1.0.3 (https://github.com/yonicb/tags-html/)
 * Copyright 2019 The Tags Html Author
 * Copyright 2019 Yoni Calsin.
 * Licensed under MIT (https://github.com/yonicb/tags-html/blob/master/LICENSE)
 */
import rootTags from '../lib/root.tags';
import metadataTags from '../lib/metadata.tags';
import scriptingTags from '../lib/scripting.tags';
import sectionsTags from '../lib/section.tags';
import groupContentTags from '../lib/group-content.tags';
import textSemanticsTags from '../lib/text-semantics.tags';
import editionsTags from '../lib/edition.tags';
import embeddedTags from '../lib/embedded.tags';
import tabularTags from '../lib/tabular.tags';
import formsTags from '../lib/formts.tags';
import interactiveTags from '../lib/interactive.tags';

// All tags HTML5
const allTags = [
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

module.exports = allTags;
module.exports.rootTags = rootTags;
module.exports.metadataTags = metadataTags;
module.exports.scriptingTags = scriptingTags;
module.exports.sectionsTags = sectionsTags;
module.exports.groupContentTags = groupContentTags;
module.exports.textSemanticsTags = textSemanticsTags;
module.exports.editionsTags = editionsTags;
module.exports.embeddedTags = embeddedTags;
module.exports.tabularTags = tabularTags;
module.exports.formsTags = formsTags;
module.exports.interactiveTags = interactiveTags;
