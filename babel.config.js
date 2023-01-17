module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@theme': './src/theme',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@storage': './src/storage',
          '@utils': './src/utils',
          '@contexts': './src/contexts',
          '@enums':'./src/enums'
        }
      }
    ]
  ]
};
