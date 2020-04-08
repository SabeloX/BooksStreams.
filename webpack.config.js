const htmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new htmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html'
});

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|jpe?g|gif|ico)$/,
                use: {
                    loader: "file-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            importLoaders: 1
                        }
                    }
                ]
            }
        ]
    },
    plugins: [htmlPlugin],
    devServer: {
        historyApiFallback: true
    }
};