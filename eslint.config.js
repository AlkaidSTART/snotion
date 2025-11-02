import js from '@eslint/js'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import markdown from '@eslint/markdown'
import css from '@eslint/css'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  // 基础 JS 规则（应用于所有 JS/TS 文件）
  {
    files: ['**/*.{js,mjs,cjs}'], // 只匹配用于 JS 文件，排除 Vue
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      'no-unused-vars': 'warn', // 建议保留警告，而非完全关闭
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
  },

  // Vue 规则（仅应用于 .vue 文件）
  {
    files: ['**/*.vue'], // 限定 Vue 文件
    ...pluginVue.configs['flat/essential'], // 导入 Vue 基础规则
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    rules: {
      // 禁用导致冲突的规则
      'vue/multi-word-component-names': 'off',
      // 其他 Vue 规则
      'vue/no-unused-components': 'warn',
      'vue/script-setup-uses-vars': 'error'
    }
  },

  // Markdown 规则（仅应用于 .md 文件）
  {
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/commonmark',
    extends: ['markdown/recommended'],
    // 禁用 Markdown 中的 Vue 规则（关键修复）
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  },

  // CSS 规则
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended']
  }
])
