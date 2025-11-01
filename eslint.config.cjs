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
                ...globals.node,
                console: "readonly"
            },
        },

        plugins: { "@typescript-eslint": tsPlugin },
        rules: {
            "no-console": "off",
            "@typescript-eslint/no-unused-vars": "off",
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
                ...globals.node,
                console: "readonly"
            },
        },
        plugins: { "@typescript-eslint": tsPlugin },
        rules: {
            "no-console": "off",
            "import/no-relative-parent-imports": "off",
        },
    },
];
