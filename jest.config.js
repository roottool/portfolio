/** @type {import('next/jest').default} */
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('@jest/types').Config.InitialOptions} */
const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^$/(.*)$': '<rootDir>/public/$1',
  },
}

module.exports = createJestConfig(customJestConfig)
