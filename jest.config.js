const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Caminho para o arquivo de configuração do Next.js
  dir: './',
});

// Configurações personalizadas do Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/pages/_app.tsx',
    '!src/pages/_document.tsx',
  ],
  moduleNameMapper: {
    // Mapeamento de módulos para resolução de imports
    '^@/(.*)$': '<rootDir>/src/$1',
    // Configuração para next-intl
    '^next-intl/(.*)$': 'next-intl/dist/$1',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/(?!next-intl)/',
  ],
};

module.exports = createJestConfig(customJestConfig);
