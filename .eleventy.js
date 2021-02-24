const eleventyVue = require("@11ty/eleventy-plugin-vue");
const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, cls, alt, sizes) {
  let metadata = await Image(src, {
    widths: [300],
    formats: ["avif", "webp", "jpeg"],
    outputDir: "./_site/assets/images",
    urlPath: "/assets/images/",
  });

  let imageAttributes = {
    alt,
    sizes,
    class: cls,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes, {whitespaceMode: "inline"});
}

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

  eleventyConfig.addPassthroughCopy("assets/fonts/*.woff");
  eleventyConfig.addPassthroughCopy("assets/fonts/*.woff2");

  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

  eleventyConfig.addPlugin(eleventyVue);
};
