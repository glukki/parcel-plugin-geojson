'use strict'

exports = module.exports = function (bundler) {
  bundler.parser.registerExtension('geojson', './assets/JSONAsset')
}
