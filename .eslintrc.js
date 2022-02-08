module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/essential",
        "eslint:recommended",
        "@vue/typescript/recommended",
        "plugin:prettier/recommended",
    ],
    parserOptions: {
        ecmaVersion: 2020,
        parser: "@typescript-eslint/parser",
        allowImportExportEverywhere: true,
        experimentalDecorators: true,
        ecmaFeatures: {
            jsx: false,
            js: false,
            vue: true,
            experimentalObjectRestSpread: true,
            legacyDecorators: true,
        },
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-empty-function": [
            "error",
            {
                allow: ["arrowFunctions", "constructors", "generatorFunctions"],
            },
        ],
        "vue/html-indent": [
            "error",
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
    },
    overrides: [
        {
            files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
            env: {
                jest: true,
            },
        },
    ],
}
