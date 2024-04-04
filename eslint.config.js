import eslintPluginAstro from 'eslint-plugin-astro';
export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs['flat/recommended'],
  {
    rules: {
      // override/add rules settings here, such as:
      "astro/no-set-html-directive": "error",
      "astro/no-conflict-set-directives": "warn",
      "astro/no-unused-define-vars-in-style": "warn",
      "astro/no-unused-css-selector": "off",
      "astro/prefer-class-list-directive": "warn",
      "astro/semi": "warn",
      "astro/jsx-a11y/anchor-is-valid": "warn",
      "@stylistic/ts/indent": "off",
    }
  }
];
