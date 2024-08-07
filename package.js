/* eslint-env meteor */
Package.describe({
  name: 'leaonline:utils',
  version: '2.0.0',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom(['3.0.1'])
  api.use('ecmascript')
  api.mainModule('utils.js')
})

Package.onTest(function (api) {
  api.versionsFrom(['3.0.1'])
  api.use('tinytest')
  api.use('leaonline:utils')
  api.mainModule('utils-tests.js')
})
