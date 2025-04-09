const path = require('path')
const esbuild = require('esbuild')
const { externalGlobalPlugin } = require('esbuild-plugin-external-global')

const clientFiles = [
  'video-watch-client-plugin.js',
  'embed-client-plugin.js',
  'video-edit-client-plugin.js',
]

const configs = clientFiles.map(f => ({
  entryPoints: [ path.resolve(__dirname, '..', 'client', f) ],
  bundle: true,
  minify: false,
  format: 'esm',
  target: 'safari11',
  outfile: path.resolve(__dirname, '..', 'dist', f),
  loader: {
    '.js': 'jsx',
    '.mjs': 'js',
    '.css': 'css'
  },
  platform: 'browser',
  plugins: [
    externalGlobalPlugin({
      'video.js': 'window.videojs'
    })
  ],
}))

const promises = configs.map(c => esbuild.build(c))

Promise.all(promises)
  .catch(() => process.exit(1))
