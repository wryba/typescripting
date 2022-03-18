module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
    },
    plugins: ['@typescript-eslint'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking', 'plugin:prettier/recommended'],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['test/**/*'],
    rules: {
        'no-restricted-imports': [
            'error',
            {
                patterns: ['*src*', '*dist*'],
            },
        ],
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                accessibility: 'explicit',
                overrides: {
                    accessors: 'no-public',
                    constructors: 'no-public',
                    methods: 'explicit',
                    properties: 'explicit',
                    parameterProperties: 'explicit',
                },
            },
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/member-ordering': [
            'error',
            {
                default: [
                    // Index signature
                    'signature',

                    // Fields
                    'public-static-field',
                    'protected-static-field',
                    'private-static-field',

                    'public-decorated-field',
                    'protected-decorated-field',
                    'private-decorated-field',

                    'public-instance-field',
                    'protected-instance-field',
                    'private-instance-field',

                    'public-abstract-field',
                    'protected-abstract-field',
                    'private-abstract-field',

                    'public-field',
                    'protected-field',
                    'private-field',

                    'static-field',
                    'instance-field',
                    'abstract-field',

                    'decorated-field',

                    'field',

                    // Constructors
                    'public-constructor',
                    'protected-constructor',
                    'private-constructor',

                    'constructor',

                    // Methods
                    'public-static-method',
                    'protected-static-method',
                    'private-static-method',

                    'public-decorated-method',
                    'protected-decorated-method',
                    'private-decorated-method',

                    'public-instance-method',
                    'protected-instance-method',
                    'private-instance-method',

                    'public-abstract-method',
                    'protected-abstract-method',
                    'private-abstract-method',

                    'public-method',
                    'protected-method',
                    'private-method',

                    'static-method',
                    'instance-method',
                    'abstract-method',

                    'decorated-method',

                    'method',
                ],
            },
        ],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'error',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/restrict-template-expressions': 'error',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-invalid-this': 'error',
        '@typescript-eslint/no-extra-semi': 'error',
        '@typescript-eslint/no-duplicate-imports': 'error',
        '@typescript-eslint/no-dupe-class-members': 'error',
        '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-empty-interface': 'off',
        indent: ['error', 4, { SwitchCase: 1 }],
        'no-var': 'error',
        'no-useless-constructor': 2,
        'no-duplicate-imports': 2,
        'prefer-arrow-callback': 2,
        'prefer-const': 2,
        'prefer-destructuring': 2,
        'no-invalid-this': 2,
        'no-loop-func': 2,
        'arrow-body-style': 2,
        'no-console': 'error',
        'prettier/prettier': 2,
        'linebreak-style': 'off',
    },
};
