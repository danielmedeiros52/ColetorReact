const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: './src/index.jsx',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, "public"),
        filename: 'app.js'
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3333
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css"],
        alias: {
            modules: path.resolve(__dirname, "node_modules")
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'teste.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    // { loader: MiniCssExtractPlugin.loader },
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ],
            },
            {
                test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ],

            }
        ]
    }
};
