const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.ts',
    resolve: {
        extensions: ['.js', '.ts', '.json', '.dcm', '.raw'],
        fallback: {
            url: false, // do not include a polyfill for url
            https: false, // do not include a polyfill for https
            http: false, // do not include a polyfill for http
        },
    },
    output: {
        path: path.resolve(__dirname, 'test_karma/karma_test_files'),
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: { loader: 'ts-loader' },
            },
            {
                test: /\.ts$/,
                exclude: [path.resolve(__dirname, 'test')],
                enforce: 'post',
                use: {
                    loader: 'istanbul-instrumenter-loader',
                    options: { esModules: true },
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                exclude: [/node_modules/, /test/],
                use: ['file-loader'],
            },
            {
                test: /\.(svg|jpg|jpeg|gif|ico)$/i,
                exclude: [/node_modules/, /test/],
                use: ['file-loader'],
            },
            {
                test: /\.(svg\.fragment)$/i,
                exclude: [/node_modules/, /test/],
                use: ['raw-loader'],
            },
            {
                test: /\.(raw)$/i,
                exclude: [/node_modules/],
                use: ['raw-loader'],
            },
            {
                test: /\.(png|dcm)$/i,
                exclude: [/node_modules/],
                use: ['file-loader'],
            },
            {
                test: /\.(ver)$/i,
                exclude: [/node_modules/, /test/],
                use: ['raw-loader'],
            },
        ],
    },
};
