module.exports = {
    entry: "./js/main.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    devServer: {
        inline: true
    },
    module: {
         loaders: [
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
};