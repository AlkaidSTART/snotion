import js from '@eslint/js'
import globals from 'globals'
import vue from 'eslint-plugin-vue'

export default [
  // 基础配置
  js.configs.recommended,

  // Vue配置
  ...vue.configs['flat/recommended'],

  // 自定义规则
  {
    files: ['**/*.{js,vue,ts}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'no-debugger': 'off',
      'vue/multi-word-component-names': 'off'
    }
  },

  // 忽略文件
  {
    ignores: ['**/*.md', '**/*.css', 'dist/', 'node_modules/']
  }
]
