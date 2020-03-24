module.exports = function(eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    notify: true,
    open: true
  });
  eleventyConfig.addPassthroughCopy({
    "../projects/**/styles/**/*.css": "styles"
  });

  eleventyConfig.addPassthroughCopy({
    "../projects/**/js/**/*.js": "js"
  });

  eleventyConfig.addPassthroughCopy({
    "../projects/shawnsandy/images/": "images"
  });

  return {
    dir: {
      output: "../dist",
      input: "../projects",
      includes: "../eleventy/_includes",
      data: "../eleventy/_data"
    },
    templateFormats: ["njk", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
    pathPrefix: "/"
  };
};
