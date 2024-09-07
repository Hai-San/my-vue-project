import pluginVue from 'eslint-plugin-vue';
import js from "@eslint/js";
import playwright from 'eslint-plugin-playwright';

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    ignores:["dist/**"],
  },
  {
    
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
  },
  {
    files: [
      'e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'
    ],
    ...playwright.configs['flat/recommended'],
  }
]
