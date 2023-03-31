const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["**/*.test.{ts,tsx}"],
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/*.d.ts",
    "!**/__tests__/**",
    "!**/__mocks__/**",
    "!**/snapshots/**",
    "!**/coverage/**",
    "!**/_app.tsx",
    "!**/_document.tsx",
    "!**/styles/**",
    "!**/.next/**",
    "!**/*.config.{js,cjs}",
  ],
};

module.exports = createJestConfig(customJestConfig);
