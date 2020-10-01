module.exports = (api) => {
  api.cache(true)

  return {
    presets: [
      [
        'next/babel',
        {
          'preset-env': {
            modules: 'commonjs',
            targets: {
              node: 'current',
            },
          },
        },
      ],
      '@babel/preset-flow',
    ],
    plugins: [
      '@babel/plugin-transform-flow-strip-types',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-transform-classes',
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            components: './components',
            pages: './pages',
          },
        },
      ],
    ],
    ignore: ['node_modules', '.next'],
  }
}
