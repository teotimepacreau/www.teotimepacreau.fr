// plugins
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginTOC = require("eleventy-plugin-toc");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const embeds = require("eleventy-plugin-embed-everything");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

// OPENGRAPH IMAGES REQUIREMENTS
const fs = require("node:fs");
const path = require("node:path");
const EleventyPluginOgImage = require("eleventy-plugin-og-image");

// ADD STRUCTURED DATA FOR GOOGLE RICH RESULTS
const schema = require("@quasibit/eleventy-plugin-schema");

let mdfigcaption = require("markdown-it-image-figures");
let figoptions = {
  figcaption: true,
};

module.exports = function (eleventyConfig) {
  
  //  SHORTCODE MISE EN FORME BLOC DE CODES
  eleventyConfig.addPlugin(syntaxHighlight);

  //SHORTCODE POUR COMPOSANT "CITATIONS"
  eleventyConfig.addPairedShortcode(
    "blockquote",
    function (content, author, source) {
      let markup = `
  <figure class="figure-blockquote">
    <blockquote>
      ${content}
    </blockquote>
    <figcaption class="figcaption-blockquote-cite">
      ${author}`;

      // Check if source is provided (not undefined)
      if (source) {
        markup += ` - <cite>${source}</cite>`;
      }

      markup += `
    </figcaption>
  </figure>`;

      return markup;
    }
  );

  //SHORTCODE POUR COMPOSANT "UPDATE"
  eleventyConfig.addPairedShortcode("update", function (content) {
    let updateDate = this.ctx.updatedate
    let formattedDate = new Date(updateDate).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });
    let markup = `
  <p class="post-update">
  <span>Mise à jour du <time datetime="${formattedDate}">${formattedDate}</time></span>${content}</p>`;

    return markup;
  });

  // AUTO GENERATED OPENGRAPH IMAGES
  eleventyConfig.addPlugin(EleventyPluginOgImage, {
    outputDir: "_site/og-images",
    urlPath: "/og-images/",
    satoriOptions: {
      fonts: [
        {
          name: "Satoshi-Variable",
          data: fs.readFileSync("./src/fonts/Satoshi-Variable.woff"),
          weight: 500,
          style: "normal",
        },
      ],
      width: 448,
    height: 256,
    },
  });

  // EMBED VIDEO IN MARKDOWN
  eleventyConfig.addPlugin(embeds);

  // RSS
  eleventyConfig.addPlugin(pluginRss);

  // ADD STRUCTURED DATA FOR GOOGLE RICH RESULTS
  eleventyConfig.addPlugin(schema);
  eleventyConfig.addFilter("iso8601", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toISO();
  });

  // Markdown configuration
  eleventyConfig.setLibrary(
    "md",
    markdownIt({
      html: true,
      linkify: true,
      typographer: true,
    })
      .use(markdownItAnchor)
      .use(mdfigcaption, figoptions)
  );

  // Table of content (require markdown anchor)
  eleventyConfig.addPlugin(pluginTOC, {
    wrapperClass: "table-of-content",
    wrapperLabel: "Table de contenu",
    headingTag: "h2",
  });

  // Convertir les dates en format FR
  eleventyConfig.addFilter("date", require("./src/filters/date.js"));

  // CREER LA COLLECTION DE POSTS
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md");
  });

  // CREER L'ARRAY DE TAGS
  eleventyConfig.addCollection("tagList", function (collection) {
    let tagSet = new Set();
    collection.getAll().forEach((item) => {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    });

    return [...tagSet];
  });

  // Monitor instant change for CSS
  eleventyConfig.addWatchTarget("src/css/");

  // Copy paste folders in _site
  eleventyConfig.addPassthroughCopy("src/css/");
  eleventyConfig.addPassthroughCopy("src/_includes/");
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addPassthroughCopy("src/fonts/");
  eleventyConfig.addPassthroughCopy("src/img/");
  eleventyConfig.addPassthroughCopy("src/favicon/");
  eleventyConfig.addPassthroughCopy("src/filters/");
  eleventyConfig.addPassthroughCopy("src/scripts/");
  eleventyConfig.addPassthroughCopy("src/og-images/");
  eleventyConfig.addPassthroughCopy("_site/og-images/");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    // Control which files Eleventy will process
    templateFormats: ["md", "njk", "html"],
    // Pre-process *.md files with:
    markdownTemplateEngine: "njk",
    // Pre-process *.html files with:
    htmlTemplateEngine: "njk",
  };
};
