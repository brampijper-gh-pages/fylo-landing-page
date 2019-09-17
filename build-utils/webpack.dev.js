const config = {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            },
        ]
    }
};

module.exports = config;