import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals"; // 1. Import the globals package

export default [
  {
    // 1. Only target JavaScript files
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      // 2. Add the browser globals (this fixes 'document', 'window', 'fetch', etc.)
      globals: {
        ...globals.browser,
        copyEmail: "writable",
      },
    },

    rules: {
      "no-undef": "error",
      "no-unused-vars": "error",
    },
  },
  // 2. Tell ESLint to ignore HTML files entirely
  {
    ignores: ["**/*.html"],
  },
  eslintConfigPrettier,
];
