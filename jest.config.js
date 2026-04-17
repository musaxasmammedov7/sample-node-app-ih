module.exports = {
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: './reports/junit',
      outputName: 'junit.xml',
      addFileAttribute: 'true',
      suiteName: 'Jest Tests',
      classNameTemplate: '{classname}',
      titleTemplate: '{title}',
      ancestorSeparator: ' › ',
      usePathForSuiteName: true
    }]
  ],

  coverageDirectory: './coverage',

  projects: [
    {
      displayName: 'server',
      testEnvironment: 'node',
      testMatch: ['**/tests/server.test.js', '**/tests/integration.test.js'],
      collectCoverageFrom: ['server.js', '!**/node_modules/**', '!**/coverage/**', '!**/reports/**'],
      coverageDirectory: 'coverage/server',
      setupFilesAfterEnv: ['<rootDir>/tests/setup.js']
    },
    {
      displayName: 'client',
      testEnvironment: 'jsdom',
      testMatch: ['**/tests/client.test.js'],
      collectCoverageFrom: ['public/script.js', '!**/node_modules/**', '!**/coverage/**', '!**/reports/**'],
      coverageDirectory: 'coverage/client',
      setupFilesAfterEnv: ['<rootDir>/tests/setup.js']
    }
  ]
};
