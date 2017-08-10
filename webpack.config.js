const resolve = require('path').resolve;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const url = require('url');
const publicPath = '';

module.exports = (options = {}) => ({
    entry: {
        index: './src/index.js',
        topic:'./src/topic.js'
    },
    output: {
        path: resolve(__dirname, 'dist'),
        filename: options.dev ? 'js/[name].js' : 'js/[name].js?[hash:8]',
        chunkFilename: '[id].js?[hash:8]',
        publicPath: options.dev ? '/assets/' : publicPath
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: ['vue-loader']
        },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use:['css-loader', 'postcss-loader']
                })
            }, {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }, {
                test: /\.less/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            }, {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            chunks: ["index", "topic"],
            minChunks: 2
        }),
        new ExtractTextPlugin({
            filename: 'css/style.css?[hash:8]',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: 'src/index.html',
            inject: 'body',//js插入的位置，true/'head'/'body'/false
            chunks: ['vendor', 'index'],
            minify: { //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        }),
        new HtmlWebpackPlugin({
            filename:'topic.html',
            template: 'src/index.html',
            inject: 'body',//js插入的位置，true/'head'/'body'/false
            chunks: ['vendor', 'topic'],
            minify: { //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        }),
        new webpack.HotModuleReplacementPlugin() //热加载
    ],
    resolve: {
        alias: {
            '~': resolve(__dirname, 'src')
        }
    },
    devServer: {
        host: '127.0.0.1',
        port: 8010,
        proxy: {
            '/api/': {
                target: 'http://127.0.0.1:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        historyApiFallback: {
            index: url.parse(options.dev ? '/assets/' : publicPath).pathname
        }
    },
    devtool: options.dev ? '#eval-source-map' : '#source-map'
});
if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ])
}
