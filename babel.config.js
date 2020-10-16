module.exports = {
  presets: ['next/babel', '@babel/preset-flow'],
  plugins: ['@babel/plugin-transform-flow-strip-types'],
  ignore: ['node_modules'],
}
