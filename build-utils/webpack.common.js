const commonPaths = require('./common-paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const config = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: commonPaths.outputPath
    },
    module: {
        rules: [
            {
                test: /\.png/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],

            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    },
                },
            },
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new VueLoaderPlugin()
    ]
}

module.exports = config;