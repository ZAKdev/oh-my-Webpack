const
    config = require("./config/config"),
    path = require("path"),
    webpack = require("webpack"),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: path.resolve(config.basePath),
    entry: config.entryFile,
    output: {
        path: path.resolve(config.basePath),
        filename: config.outputJS
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    devServer: {
        port: config.port,
        contentBase: config.basePath
    },
    module: {
        loaders: [
            {
                test: /\.(js|es6|jsx)$/,
                exclude: "/node_modules/",
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                exclude: "/node_modules/",
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ["css-loader", "autoprefixer-loader"]
                })
            },
            {
                test: /\.scss$/,
                exclude: "/node_modules/",
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ["css-loader", "autoprefixer-loader", { loader: 'sass-loader'}]
                })
            },
            {
                test: /\.styl$/,
                exclude: "/node_modules/",
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ["css-loader", "autoprefixer-loader", "stylus-loader"]
                })
            },
            {
                test: /\.html$/,
                exclude: "/node_modules/",
                loader: "raw-loader"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(config.outputCSS),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    watch: true
}
