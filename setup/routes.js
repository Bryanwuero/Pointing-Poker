const Glob = require('glob')
const plugins = []
Glob.sync('../src/api/**/**/*.route.js', {
  realpath: true,
  cwd: __dirname
}).forEach((filepath) => {
  plugins.push(require(filepath))
})

module.exports = plugins
