module.exports = {
    root: true,
    env: {
        noed: true
    },
    extends: ['plugin:vue/essential'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-empty-function': [
            'error',
            {
                allow: ['arrowFunctions', 'constructors', 'generatorFunctions'],
            },
        ],
        'vue/html-indent': [
            'error',
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
            files: ['**/tests/unit/**/*.spec.[jt]s?(x)', '**/*.spec.[jt]s?(x)', '**/__tests__/*.[jt]s?(x)'],
            env: {
                jest: true,
            },
        },
    ],
};