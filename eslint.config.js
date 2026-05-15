const { defineConfig } = require('eslint/config')
const nextConfig = require('eslint-config-next/flat')
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended')

module.exports = defineConfig([
  nextConfig,
  eslintPluginPrettierRecommended,
  {
    ignores: ['dist/*'],
  },
])
