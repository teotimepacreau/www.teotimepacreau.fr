// plugins
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import pluginTOC from "eleventy-plugin-toc";
import embeds from "eleventy-plugin-embed-everything";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import dateFr from "./src/filters/date.js"
import { feedPlugin } from "@11ty/eleventy-plugin-rss"

// OPENGRAPH IMAGES REQUIREMENTS
import fs from "node:fs";
import path from "node:path";
import EleventyPluginOgImage from "eleventy-plugin-og-image";

// ADD STRUCTURED DATA FOR GOOGLE RICH RESULTS
import schema from "@quasibit/eleventy-plugin-schema";

import mdfigcaption from "markdown-it-image-figures";
import { type } from "node:os";
let figoptions = {
  figcaption: true,
};

export default function(eleventyConfig) {
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

  //SHORTCODE POUR COMPOSANT "CITATIONS MARGINALES"
  eleventyConfig.addPairedShortcode(
    "citationsmarginales",
    function (content, source) {
     if (content && source) { 
      let markup = `
    <blockquote class="citation-calling-sidenote">
      <p>
        ${content}
      </p>
      <sup class="sidenote-caller-counter">
      </sup>
      <span class="sidenote"><p>${source}</p></span>
    </blockquote>
    `;
      return markup;
     } else {
      let markup = `
      <span class='lettrage-superieur'>
        <sup>
        </sup>
        <span class="sidenote">${source}</span>
      </span>

      `;
        return markup;
     }
    }
  );

  //SHORTCODE POUR COMPOSANT "UPDATE"
  eleventyConfig.addPairedShortcode("update", function (content) {
    let updateDate = this.ctx.updatedate;
    let formattedDate = new Date(updateDate).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
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
    },
  });

  // EMBED VIDEO IN MARKDOWN
  eleventyConfig.addPlugin(embeds);

  // RSS
  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/feed/feed.xml",
    collection: {
      name: "all"
    },
    metadata: {
      language: "fr",
      title: "Le site web personnel de Teotime Pacreau : Développement web et conduite de projets numériques à Nantes",
      subtitle: "Le flux web du blog et des essais de Teotime Pacreau",
      base: "https://www.teotimepacreau.fr/",
      author: {
        name: "Téotime Pacreau",
        email: "teotime.pac@outlook.fr"
      }
    }
  });

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
  eleventyConfig.addFilter("date", dateFr);

  // CREER LA COLLECTION DE POSTS
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md");
  });

  // CREER LA COLLECTION DES ESSAIS
  eleventyConfig.addCollection("essais", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/essais/*.njk");
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
  eleventyConfig.addPassthroughCopy("src/media/");
  eleventyConfig.addPassthroughCopy("src/favicon/");
  eleventyConfig.addPassthroughCopy("src/filters/");
  eleventyConfig.addPassthroughCopy("src/scripts/");
  eleventyConfig.addPassthroughCopy("src/og-image/");
  eleventyConfig.addPassthroughCopy("_site/og-images/");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
