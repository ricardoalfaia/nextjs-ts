// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  inlineSourceMap: true,
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
  collectCoverageFrom: ['src/**/*.{js, jsx, ts, tsx}'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '/node_modules/',
    '<rootDir>/node_modules/'
  ],
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['node_modules', 'src']
}
