module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['@babel/plugin-transform-flow-strip-types'],
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      [
        'module-resolver',
        {
          alias: {
            '*': ['node_modules/*'],
            '@components': './UI/Components',
            '@buttons': './UI/Components/basic/buttons',
            '@containers/*': './UI/containers',
            '@Screens': './UI/Components/Screens',
            '@assets': './assets/*',
            // "@libs/*": ["src/renderer/libs/*"],
            '@config': './UI/Components/config',
            // "@helpers/*": ["src/renderer/utils/helpers/*"],
            '@models/*': './UI/containers/modals',
            '@toSvg': './assets/svg',
            '@toPng': './assets/pictures',
            '@api': './API',
            '@redux': './services/redux',
            '@colors': './UI/Components/config/Colors.ts',
            '@stores': './services/zustand',
          },
          extensions: ['.ts', '.tsx'],
        },
      ],
    ],
  };
};
