const presets = [
  [
    '@babel/preset-env',
    // {
    //   useBuiltIns: 'usage',
    //   corejs: 3,
    // },
  ],
]

const plugins = [
  // [
  //   '@babel/plugin-transform-runtime',
  //   {
  //     corejs: 3,
  //   },
  // ],
]
const sourceType = 'script'

module.exports = { presets, plugins, sourceType }
