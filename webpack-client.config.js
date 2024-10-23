const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (a,b,c) => {
    return ({
        entry: path.resolve(__dirname, "./src/client/index.js"),
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"],
                },
            ],
        },
        resolve: {
            extensions: [".js", ".jsx"],
        },
        output: {
            path: path.resolve(__dirname, "./build"),
            filename: "bundle.js",
        },
        plugins: [new HtmlWebpackPlugin({template: "./template.html", inject: true})],
    });
};


