// PostCSS will work after merge https://github.com/vercel/next.js/pull/17415

module.exports = {
  plugins: [
    'postcss-import',
    'postcss-custom-properties',
    'postcss-custom-media',
    'postcss-media-minmax',
    'postcss-custom-selectors',
    'postcss-calc',
    'postcss-nesting',
    'postcss-nested',
    'postcss-color-function',
    'pleeease-filters',
    'postcss-selector-matches',
    'postcss-selector-not',
    'postcss-flexbugs-fixes',
    'postcss-simple-vars',
    'postcss-mixins',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
          grid: 'autoplace',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
  ],
}
