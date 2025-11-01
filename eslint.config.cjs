const tsPlugin = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");

module.exports = [
    {
        files: ["src/**/*.ts"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 2024,
                sourceType: "module",
            },
            env: {
                node: true,
                es2024: true,
            },
        },
        plugins: { "@typescript-eslint": tsPlugin },
        rules: {
            "no-undef": "error",
            "@typescript-eslint/no-unused-vars": "warn",
        },
    },

    {
        files: ["tests/**/*.ts"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 2024,
                sourceType: "module",
            },
        },
        plugins: { "@typescript-eslint": tsPlugin },
        rules: {
            "no-undef": "error",
            "import/no-relative-parent-imports": "off",
            "no-console": "off",
        },
    },
];
