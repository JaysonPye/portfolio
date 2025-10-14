/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.addPassthroughCopy("favicon.svg");
  eleventyConfig.addPassthroughCopy("github.svg");
  eleventyConfig.addPassthroughCopy("link.svg");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("jaysonpye_resume.pdf");
  eleventyConfig.addWatchTarget("css");
  eleventyConfig.addWatchTarget("scripts");

  eleventyConfig.setLayoutsDirectory("_layouts");

  eleventyConfig.setBrowserSyncConfig({
    files: "./_site/**/*",
    open: true,
  });
  eleventyConfig.addCollection("projects", (api) =>
    api
      .getAll()
      .filter(
        (i) =>
          i.data.tags?.includes("project") &&
          !i.data.eleventyExcludeFromCollections,
      )
      .sort((a, b) => b.date - a.date),
  );

  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
}
