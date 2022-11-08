
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./only-one-tab.cjs.production.min.js')
} else {
  module.exports = require('./only-one-tab.cjs.development.js')
}
