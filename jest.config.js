module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
