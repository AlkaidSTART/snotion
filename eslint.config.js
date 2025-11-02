import js from '@eslint/js'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  // 基础 JS 规则
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'no-debugger': 'off'
    }
  },

  // Vue 规则（单独处理，不合并数组配置）
  {
    files: ['**/*.vue'],
    plugins: { vue: pluginVue }, // 显式声明插件
    languageOptions: {
      globals: globals.browser,
      parser: pluginVue.parser, // 指定 Vue 解析器
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        vueFeatures: {
          scriptSetup: true, // 支持 <script setup>
          compositionApi: true
        }
      }
    },
    rules: {
      // 手动添加 Vue 基础规则（替代 flat/essential）
      'vue/no-duplicate-attr-inheritance': 'error',
      'vue/no-multiple-slot-args': 'error',
      'vue/no-v-for-template-key-on-child': 'error',
      'vue/require-prop-type-constructor': 'error',
      'vue/valid-v-bind-sync': 'error',
      // 禁用冲突规则
      'vue/multi-word-component-names': 'off',
      'vue/no-unused-components': 'warn',
      'vue/script-setup-uses-vars': 'error'
    }
  },

  // 排除不需要检查的文件
  {
    ignores: ['**/*.md', '**/*.css', 'dist/', 'node_modules/']
  }
])
