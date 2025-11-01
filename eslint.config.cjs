const tsPlugin = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");
const globals = require("globals");

module.exports = [
    {
        files: ["src/**/*.ts"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 2024,
                sourceType: "module",
            },
            globals: {
                ...globals.browser,
                ...globals.node,
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
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: { "@typescript-eslint": tsPlugin },
        rules: {
            "import/no-relative-parent-imports": "off",
        },
    },
];
