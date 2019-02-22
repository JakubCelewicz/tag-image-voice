module.exports = {
    extends: [
        'plugin:jsx-a11y/recommended',
        'airbnb',
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 7,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            experimentalDecorators: true,
            jsx: true,
        },
    },
    plugins: [
        'react',
        'jsx-a11y',
    ],
    rules: {
        strict: 'off',
        semi: ['error', 'never'],
        'quote-props': ['error', 'consistent'],
        'no-nested-ternary': ['off'],
        'no-use-before-define': ['off'],
        'new-cap': ['error', {
            capIsNewExceptions: ['Map', 'List'],
        }],
        'linebreak-style': 'off',
        'object-curly-newline': 'off',
        'function-paren-newline': 'off',
        'max-len': ['error', {code: 150, ignoreUrls: true}],
        'no-confusing-arrow': 'off',
        'no-underscore-dangle': ['error', {allow: ['_satellite']}],
        'no-unused-vars': ['error', {argsIgnorePattern: '_'}],
        'default-case': 'off',
        'class-methods-use-this': 'off',
        'no-mixed-operators': 'off',
        'space-unary-ops': 'off',
        'no-template-curly-in-string': 'off',
        'arrow-parens': 'off',
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'no-debugger': 'warn',
        'no-restricted-syntax': ['off', 'ForOfStatement'],
        'prefer-destructuring': 'warn',
        'prefer-promise-reject-errors': 'warn',
        'prefer-rest-params': 'warn',
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'never',
        }],
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/prefer-default-export': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/aria-props': 'error',
        'jsx-a11y/aria-proptypes': 'error',
        'jsx-a11y/aria-unsupported-elements': 'error',
        'jsx-a11y/label-has-for': 'warn',
        'jsx-a11y/mouse-events-have-key-events': 'error',
        'jsx-a11y/no-noninteractive-element-interactions': 'warn',
        'jsx-a11y/no-onchange': 'error',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/role-has-required-aria-props': 'error',
        'jsx-a11y/role-supports-aria-props': 'error',
        'jsx-a11y/tabindex-no-positive': 'error',
        'react/forbid-prop-types': 'off',
        'react/jsx-filename-extension': 'off',
        'react/no-array-index-key': 'off',
        'react/no-did-mount-set-state': 'off',
        'react/no-find-dom-node': 'off',
        'react/no-unescaped-entities': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/sort-comp': 'off',
    },
    env: {
        jest: true,
        es6: true,
        browser: true,
        node: true,
    },

};
