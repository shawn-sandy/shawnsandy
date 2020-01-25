module.exports = function(eleventyConfig) {
  return {
    dir: {
      output: "dist",
      input: "projects",
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
