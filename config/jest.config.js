module.exports = {
  verbose: true,
  setupFiles: ['./jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'babel-jest'
  },
  roots: ['../src'],

  collectCoverage: true,
  collectCoverageFrom: [
    '../src/**/*.js',
    '!../src/**/(index|actions|reducers|store).js',
    '!**/node_modules/**'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10
    }
  }
};
