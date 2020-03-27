const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"

    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "src"),
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                }
           },
       ],
    },


    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ],

    resolve: {
        extensions: [".jsx", ".js"],
    }


}
