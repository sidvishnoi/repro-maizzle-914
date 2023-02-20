// Maizzle config
// @ts-check
const path = require("path");
const { tmpdir } = require("os");

/** @param {string[]} paths */
const p = (...paths) => path.join(__dirname, ...paths);

module.exports = {
  build: {
    tailwind: {
      // css: 'src/css/tailwind.css',
      config: require("./tailwind.config.js"),
    },
    browsersync: {
      port: 5050,
    },
    layouts: {
      root: p("src/layouts"),
      tagName: "layout",
    },
    templates: {
      source: p("src/templates"),
      destination: {
        path: path.join(tmpdir(), "maizzle-emails"),
      },
      assets: {
        source: p("src/images"),
        destination: "images",
      },
    },
    components: {
      root: p("src/components"),
    },
    fail: "verbose",
  },
  locals: {
    // add your locals here
  },
};
