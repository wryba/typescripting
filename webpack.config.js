const libName = 'typescripting';
const doDebugProtection = false;

const path = require('path');
const pckg = require('./package.json');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // ensure dist folder is always in correct state
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackObfuscator = require('webpack-obfuscator'); // obfuscates production code
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

const computePackageVersion = (dependencyPackage, versionPackage) => {
    const isDevelop = dependencyPackage.startsWith('file:') || dependencyPackage.startsWith('.');
    return isDevelop ? 'development' : versionPackage;
};

const config = {
    target: 'web',
    entry: {
        index: './src/index.ts',
    },
    devtool: 'source-map',
    output: {
        filename: devMode ? '[name].js' : '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        library: libName,
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNamedDefine: true,
    },
    watchOptions: {
        aggregateTimeout: 600,
        ignored: /node_modules/,
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: './css/[name].css',
        }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: true,
            cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, './dist')],
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '~': path.resolve('./node_modules'),
        },
        fallback: {
            url: false, // do not include a polyfill for url
            https: false, // do not include a polyfill for https
            http: false, // do not include a polyfill for http
            net: false, // do not include a polyfill for net
        },
    },
    module: {
        rules: [
            {
                test: /\.(scss|sass|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {},
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {},
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.ts(x?)$/,
                exclude: [/node_modules/, /test/],
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                exclude: [/node_modules/, /test/],
                use: ['base64-inline-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico|svg)$/i,
                exclude: [/node_modules/, /test/],
                use: ['base64-inline-loader'],
            },
            {
                test: /\.(svg\.fragment)$/i,
                exclude: [/node_modules/, /test/],
                use: ['raw-loader'],
            },
            {
                test: /\.(ver)$/i,
                exclude: [/node_modules/, /test/],
                use: ['raw-loader'],
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'async',
            cacheGroups: {
                webgridStyles: {
                    name: 'webgrid-styles',
                    test: /style.scss$/,
                    chunks: 'all',
                    reuseExistingChunk: true,
                    enforce: true,
                },
            },
        },
    },
};

module.exports = (env, argv) => {

    if (argv.mode === 'development') {
        // * add some development rules here
    } else if (argv.mode === 'production') {
        // * add some prod rules here

        var obfuscator = new WebpackObfuscator({
            compact: true,
            debugProtection: doDebugProtection,
            rotateStringArray: true,
        });

        config.plugins.push(obfuscator);
    } else {
        throw new Error('Specify env');
    }

    return config;
};
