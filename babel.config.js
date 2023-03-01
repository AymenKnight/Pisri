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
            '@components': './Components',
            '@buttons': './Components/basic/buttons',
            // "@containers/*": ["src/renderer/ui/containers/*"],
            '@Screens': './Components/Screens',
            '@assets': './assets/*',
            // "@libs/*": ["src/renderer/libs/*"],
            '@config': './Components/config',
            // "@helpers/*": ["src/renderer/utils/helpers/*"],
            // "@models/*": ["src/renderer/models/*"],
            toSvg: './assets/svg',
            toPng: './assets/pictures',
            '@api': './API',
            '@redux': './services/redux',
            '@colors': './Components/config/Colors.ts',
            '@stores': './services/zustand',
          },
          extensions: ['.ts', '.tsx'],
        },
      ],
    ],
  };
};
