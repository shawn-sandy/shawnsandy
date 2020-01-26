module.exports = function(eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    notify: true,
    open: true
  });
  eleventyConfig.addPassthroughCopy({
    "../projects/**/styles/**/*.css": "styles"
  });
  // eleventyConfig.setTemplateFormats([
  //   "jpg",
  //   "png",
  //   "svg",
  //   "css" // css is not yet a recognized template extension in Eleventy
  // ]);

  eleventyConfig.addPassthroughCopy({
    "../projects/**/styles/**/*.css": "styles"
  });

  eleventyConfig.addPassthroughCopy({
    "../projects/**/images/**.*": "images"
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
