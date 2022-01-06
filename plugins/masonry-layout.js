/* eslint-disable no-unused-vars */
if (process.browser) {
  const Masonry = require('masonry-layout')
  const jQueryBridget = require('jquery-bridget')
  jQueryBridget('masonry', Masonry, $)
}
