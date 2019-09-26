const commonPaths = require('./common-paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: commonPaths.outputPath
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 30,
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets/images'
                        }
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
        new VueLoaderPlugin(),
        new CopyPlugin([
            { from: './src/assets/images', to: 'assets/images'}, 
        ]),
    ],
};

module.exports = config;