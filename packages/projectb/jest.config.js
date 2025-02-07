import base from "../../jest.config.base.mjs"

const { transform, moduleNameMapper, setupFilesAfterEnv, preset, maxWorkers, testEnvironment, modulePaths } = base;

const config = {
  transform,
  moduleNameMapper,
  setupFilesAfterEnv,
  preset,
  maxWorkers,
  testEnvironment,
  modulePaths: ["<rootDir>/src", ...modulePaths],
  roots: ["<rootDir>/test/jest"],
}

export default config;