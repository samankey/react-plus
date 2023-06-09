/* eslint-disable */
// export default {
//   displayName: 'design-system',
//   // setupFilesAfterEnv: ['./jest.setup.ts'],
//   preset: '../../jest.preset.js',
//   // testEnvironment: 'jsdom',

//   transform: {
//     '\\.css\\.ts$': '@vanilla-extract/jest-transform',
//     '^.+\\.(ts|tsx)$': [
//       'ts-jest',
//       { tsconfig: '<rootDir>/tsconfig.spec.json' },
//     ],
//   },
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
//   coverageDirectory: '../../coverage/libs/design-system',
// };

/* eslint-disable */
export default {
  displayName: 'design-system',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  transform: {
    '\\.css\\.ts$': '@vanilla-extract/jest-transform',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/design-system',
};
