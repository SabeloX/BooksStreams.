const htmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new htmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html'
});

const path = require('path')

const autoprefixer = require('autoprefixer')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    devtool: 'none',
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
                use: [
                    {
                        loader: "file-loader"
                    }
                    
                ]
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
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: 'postcss',
                            plugin: () => [autoprefixer()]
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