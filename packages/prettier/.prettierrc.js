module.exports = {
    tabWidth: 2,
    useTabs: false,
    printWidth: 100,
    singleQuote: true,
    semi: false,
    endOfLine: 'auto',
    trailingComma: 'all',
    arrowParens: 'always',
    jsxBracketSameLine: true,
    plugins: [
        require.resolve('prettier-package-json'),
        require.resolve('@trivago/prettier-plugin-sort-imports'),
    ],
    importOrderParserPlugins: [
        'classProperties',
        'decorators-legacy',
        'typescript',
        'jsx',
    ],
    importOrder: ['^@(.*)/(.*)$', '^~/(.*)$', '^@/(.*)$', '^[./]'],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
}