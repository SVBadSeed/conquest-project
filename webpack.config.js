const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    devtool: "source-map",
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                type: "asset/resource",
                generator: {
                    filename: "bundle.css",
                },
                use: ["sass-loader"],
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ],
    devServer: {
        port: 3000,
        open: true,
    }
}