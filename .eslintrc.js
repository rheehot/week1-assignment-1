module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    actor: "readonly",
    Feature: "readonly",
    Scenario: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "linebreak-style": ['error','unix'],
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["codecept.conf.js"] },
    ],
  },
};
