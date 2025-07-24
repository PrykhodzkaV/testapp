const extensions = ['.js', '.jsx', '.ts', '.tsx', '.json', '.mjs'];

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions,
        alias: {
          '@': './src',
          '@/api': './src/api',
          '@/components': './src/components',
          '@/constants': './src/constants',
          '@/screens': './src/screens',
        },
      },
    ],
  ],
};
