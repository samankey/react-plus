/* eslint-disable */
export default {
  displayName: 'gubgoo-plus',
  preset: '../../jest.preset.js',
  transform: {
    '\\.css\\.ts$': '@vanilla-extract/jest-transform',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/admin',
};
