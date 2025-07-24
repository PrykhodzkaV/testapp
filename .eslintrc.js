module.exports = {
  root: true,
  extends: ['@react-native'],
  plugins: ['import', 'simple-import-sort'],
  rules: {
    // Import ordering rules
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // React and React Native imports first
          ['^react', '^react-native'],
          // External libraries
          ['^@?\\w'],
          // Internal imports with @ alias
          ['^@/'],
          // Relative imports
          ['^\\.\\.', '^\\./'],
          // Style imports last
          ['\\.styles$', '\\.css$', '\\.scss$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
  },
};
