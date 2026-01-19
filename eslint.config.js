export default [
  {
    files: ["**/*.html"],
    languageOptions: {
      ecmaVersion: "latest",
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": "error",
    },
  },
];
