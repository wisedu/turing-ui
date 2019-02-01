// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "indent": 'off',
    "quotes": 'off',
    "no-tabs": 'off',
    "no-irregular-whitespace": 'off',
    'no-mixed-spaces-and-tabs': 'off',
    "no-multi-spaces": 'off',
    "no-spaced-func": 'off',
    "no-trailing-spaces": 'off',
    "space-after-keywords": 'off',
    "space-before-blocks": 'off',
    "space-before-function-paren": 'off',
    "space-in-parens": 'off',
    "space-infix-ops": 'off',
    "space-return-throw-case": 'off',
    "spaced-comment": 'off',
    "keyword-spacing": 'off',
    "generator-star-spacing": 'off',
    "semi-spacing": 'off',
    "semi": 'off',
    "no-extra-semi": 'off',
    "comma-spacing": 'off',
    "eol-last": 'off',
  }
}
