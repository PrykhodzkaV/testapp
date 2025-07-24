const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  transformer: {
    // Enable minification for release builds
    minifierConfig: {
      ecma: 8,
      keep_fnames: true,
      mangle: {
        keep_fnames: true,
      },
      compress: {
        drop_console: true, // Remove console.log statements in production
        drop_debugger: true,
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
      },
    },
  },
  resolver: {
    // Optimize asset resolution
    assetExts: ['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg'],
    sourceExts: ['js', 'jsx', 'ts', 'tsx', 'json'],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
