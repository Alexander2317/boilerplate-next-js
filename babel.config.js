module.exports = {
  presets: ['next/babel', '@babel/preset-flow'],
  plugins: [
    '@babel/plugin-transform-flow-strip-types',
    '@babel/plugin-proposal-throw-expressions',
  ],
  ignore: ['node_modules'],
}
