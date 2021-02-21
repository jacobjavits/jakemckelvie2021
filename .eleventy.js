const eleventyVue = require("@11ty/eleventy-plugin-vue");

module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "md",
    "html",
    "css", // css is not yet a recognized template extension in Eleventy
    "njk",
    "jpg",
    "png",
    "svg"
  ]);

  eleventyConfig.addPassthroughCopy("fonts/*.woff2");

  eleventyConfig.addPlugin(eleventyVue);
};
