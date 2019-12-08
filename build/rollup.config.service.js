const path = require('path')
const alias = require('rollup-plugin-alias')
const replace = require('rollup-plugin-replace')

module.exports = {
  input: 'src/platforms/app-plus-nvue/services/index.legacy.old.js',
  output: {
    file: `packages/uni-app-plus-nvue/dist/service.legacy.js`,
    format: 'es'
  },
  plugins: [
    alias({
      'uni-core': path.resolve(__dirname, '../src/core'),
      'uni-shared': path.resolve(__dirname, '../src/shared/util.js'),
      'uni-helpers': path.resolve(__dirname, '../src/core/helpers')
    }),
    replace({
      __GLOBAL__: 'getGlobalUni()',
      __PLATFORM_TITLE__: 'app-plus-nvue'
    })
  ]
}
