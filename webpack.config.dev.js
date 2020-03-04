import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from "path";

export default {
    devtool: 'inline-source-map',
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'babel.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src')
    },
    plugins: [],
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
            {test: /\.css$/, loaders: ['style', 'css']}
        ]
    }
}
