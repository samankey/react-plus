const nxPreset = require('@nrwl/jest/preset').default;

module.exports = {
  ...nxPreset,
  resolver: '../../jest.custom-resolver.js',
  transform: {
    ...nxPreset.transform,
  },
};
