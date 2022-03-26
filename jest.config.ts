export default {
  roots: ['<rootDir>/src'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    // '!<rootDir>/src/main/*.ts',
  ],
  testEnvironment: 'node',
  coverageProvider: 'v8',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
}
