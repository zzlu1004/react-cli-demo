module.exports = {
    root: true,
    parser: 'babel-eslint',
    env: {
        browser : true,
        commonjs: true,
        es6     : true
    },
    // 使用的扩展库
    extends: ['standard','standard-react'],
    globals: {
        JSBridge : true,
        window   : true,
        document : true,
        wx       : true,
        __ENV__  : true
    },
    parserOptions: {
        sourceType  : 'module',
        ecmaVersion : 7,
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true
        }
    },
    plugins: [
        'standard',
        'react',
        'jsx-a11y'
    ],
    settings: {
        'import/resolver': {
            'node': {
                'extensions': [
                    '.js',
                    '.jsx'
                ]
            }
        },
        'react': {
            'version': '16.8.6'
        }
    },
    rules: {
        'indent'                            : 'off',
        'react/jsx-indent'                  : ['error', 4],
        'eqeqeq'                            : 'off',
        'camelcase'                         : 'off',
        'no-extra-boolean-cast'             : 'off',
        'padded-blocks'                     : 'off',
        'eol-last'                          : 'off',
        'no-useless-escape'                 : 'off',
        'no-useless-constructor'            : 'off',
        'semi'                              : ['error', 'never'],
        'arrow-parens'                      : ['error', 'as-needed'],
        'no-multiple-empty-lines'           : ['error', { 'max': 1 }],
        'space-before-function-paren'       : ['error', 'never'],
        'no-trailing-spaces'                : ['error', { 'skipBlankLines': true }],
        'jsx-quotes'                        : ['error', 'prefer-single'],
        'no-unreachable'                    : process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger'                       : process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-console'                        : 'off',
        'no-eval'                           : 'off',
        'prefer-const'                      : 'off',
        'react/prop-types'                  : 'off',
        'react/no-array-index-key'          : 'off',
        'react/self-closing-comp'           : ['error', {'component': true, 'html': false}],
        'react/jsx-tag-spacing'             : ['error', {'beforeSelfClosing': 'always'}],
        'react/jsx-filename-extension'      : ['error', { 'extensions': ['.js', '.jsx'] }],
        'react/jsx-indent-props'            : ['error', 4]
    }
}
