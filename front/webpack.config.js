var HtmlWebpackPlugin = require('html-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');
var webpack = require("webpack");
var path = require("path");
module.exports = {
    entry: {
        libs: [
            'angular',
            'angular-animate',
            'angular-ui-router'
        ],
        app: "./app-loader.js"
    },
    output: {
        path: './../',
        filename: "app.bundle.js"
    },
    resolve: {
        modulesDirectories: ["web_modules", "node_modules", "src/assets/libs"]
    },
    module: {
        loaders: [
            {
                test: /\.sass$/,
                loaders: ["style-loader", "css-loader", "sass-loader", "import-glob-loader"]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            },
            {
                test: /\.png$/,
                loader: "url-loader?mimetype=image/png"
            },
            {
                test: /\.html$/,
                loader: 'html',
                query: {
                    minimize: false
                }
            }
        ]
    },
    plugins: [
        new DashboardPlugin(),
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
        ),
        new webpack.optimize.CommonsChunkPlugin("libs", "libs.bundle.js"),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
        //Uncomment if you use jQuery
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery",
        //     "window.jQuery": "jquery"
        // })
    ]
};