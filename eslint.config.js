import js from '@eslint/js'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'

export default [
  // 基础配置
  js.configs.recommended,

  // Vue 配置
  {
    files: ['**/*.vue'],
    ...pluginVue.configs['flat/recommended'],
    languageOptions: {
      globals: {
        ...globals.browser
      }
    },
    rules: {
      // 自定义规则
      'vue/multi-word-component-names': 'off',
      'vue/no-unused-components': 'warn',
      'no-console': 'off',
      'no-debugger': 'off'
    }
  },

  // JavaScript 配置
  {
    files: ['**/*.{js,mjs,cjs}'],
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
      'no-debugger': 'off'
    }
  },

  // 忽略文件
  {
    ignores: ['**/*.md', '**/*.css', 'dist/', 'node_modules/']
  }
]
