module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "md",
    "html",
    "css", // css is not yet a recognized template extension in Eleventy
    "woff2",
    "ttf",
    "njk",
    "jpg",
    "png"
  ]);
};
