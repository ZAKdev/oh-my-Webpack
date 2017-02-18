const
    path = require("path"),
    webpack = require("webpack"),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: path.resolve("public"),
    entry: "./index",
    output: {
        path: path.resolve("public"),
        filename: "index.min.js"
    },
    devServer: {
        //compress: true,
        port: 9000,
        contentBase: "public"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: "node_modules",
                loader: "babel-loader",
                query: {
                    presets: 'es2015',
                },
            },
            {
                test: /\.css$/,
                exclude: "node_modules",
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ["css-loader", "autoprefixer-loader"]
                })
            },
            {
                test: /\.scss$/,
                exclude: "node_modules",
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ["css-loader", "autoprefixer-loader", { loader: 'sass-loader'}]
                })
            },
            {
                test: /\.styl$/,
                exclude: "node_modules",
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ["css-loader", "autoprefixer-loader", "stylus-loader"]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("index.css"),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    watch: true
}