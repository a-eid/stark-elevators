const withCSS = require("@zeit/next-css")
const path = require("path")

module.exports = withCSS({
  cssLoaderOptions: { url: false },
  webpack: config => {
    config.resolve.modules.push(path.resolve("."))
    return config
  },
})
