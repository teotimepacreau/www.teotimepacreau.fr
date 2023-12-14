// plugins
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const pluginTOC = require('eleventy-plugin-nesting-toc');
const lazyImagesPlugin = require('eleventy-plugin-lazyimages');
const pluginRss = require("@11ty/eleventy-plugin-rss");
const embeds = require("eleventy-plugin-embed-everything");
let mdfigcaption = require('markdown-it-image-figures');
let figoptions = {
    figcaption: true
};



module.exports = function(eleventyConfig) {
  // EMBED VIDEO IN MARKDOWN
  eleventyConfig.addPlugin(embeds);
  
  // RSS
  eleventyConfig.addPlugin(pluginRss);
  
  // Markdown configuration
  eleventyConfig.setLibrary("md", markdownIt({
    html: true,
    linkify: true,
    typographer: true,
  })
  .use(markdownItAnchor)
  .use(mdfigcaption, figoptions));

  // Table of content (require markdown anchor)
  eleventyConfig.addPlugin(pluginTOC, {
    wrapperClass: 'table-of-content',
    ul: 'true',
    headingTag: 'h2',
  })


  // Tags 1.1
  function filterTagList(tags) {
    return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
  }

  eleventyConfig.addFilter("filterTagList", filterTagList)

  // Tags 1.2 : Create an array of all tags
  eleventyConfig.addCollection("tagList", function(collection) {
    let tagSet = new Set();
    collection.getAll().forEach(item => {
      (item.data.tags || []).forEach(tag => tagSet.add(tag));
    });

    return filterTagList([...tagSet]);
  });
  // ... Eleventy date en FR
  eleventyConfig.addFilter("date", require("./src/filters/date.js"));
  // ... Img lazy laoding
  eleventyConfig.addPlugin(lazyImagesPlugin);
  // ... copy paster folders in _site
  eleventyConfig.addPassthroughCopy("src/css/");
  eleventyConfig.addPassthroughCopy("src/_includes/");
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addPassthroughCopy("src/fonts/");
  eleventyConfig.addPassthroughCopy("src/img/");
  eleventyConfig.addPassthroughCopy("src/favicon/");
  eleventyConfig.addPassthroughCopy("src/filters/");
  eleventyConfig.addPassthroughCopy("src/scripts/");
  // ... posts collection
  eleventyConfig.addCollection('posts', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/blog/*.md');
  })
// ... Monitor instant change for CSS
  eleventyConfig.addWatchTarget("src/css/");

return {
  dir: {
    input: 'src',
    includes: '_includes',
    output: '_site',
  },
  // Control which files Eleventy will process
  templateFormats: ['md', 'njk', 'html'],
  // Pre-process *.md files with:
  markdownTemplateEngine: 'njk',
  // Pre-process *.html files with:
  htmlTemplateEngine: 'njk',
};
}