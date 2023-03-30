const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["**/*.test.{ts,tsx,js,jsx}"],
  collectCoverageFrom: [
    "**/*.{ts,tsx,js,jsx}",
    "!**/_app.tsx",
    "!**/_document.tsx",
    "!<rootDir>/.next/**",
    "!<rootDir>/*.config.{js,cjs}",
    "!<rootDir>/coverage/**",
    "!<rootDir>/snapshots/**",
  ],
};

module.exports = createJestConfig(customJestConfig);
