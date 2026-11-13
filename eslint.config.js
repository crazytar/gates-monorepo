const { defineConfig, globalIgnores } = require('eslint/config');
const expoConfig = require('eslint-config-expo');
import eslintNextPlugin from '@next/eslint-plugin-next';

module.exports = defineConfig([
    globalIgnores(['dist/*']),
    expoConfig,
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        plugins: {
            '@next/next': eslintNextPlugin,
        },
        settings: {
            next: {
                rootDir: 'apps/gates-next/', // Укажите путь к Next.js в монорепозитории
            },
        },
    },
]);