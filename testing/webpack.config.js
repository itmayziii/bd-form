const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const browserSync = new BrowserSyncPlugin(
    {
        host: 'localhost',
        port: 3000,
        proxy: 'localhost:8080'
    }
);

const htmlPlugin = new HtmlWebpackPlugin({
    filename: path.resolve(__dirname, 'public/index.html'),
    template: path.resolve(__dirname, 'webpack-templates/index.html')
});


module.exports = {
    context: path.resolve(__dirname, 'assets'),
    entry: {
        dev: ['./js/index.js', './scss/main.scss'],
        polyfills: ['./js/polyfills.js']
    },
    output: {
        publicPath: '/',
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "sass-loader"}
                ],
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['env']
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        htmlPlugin,
        browserSync
    ]
};