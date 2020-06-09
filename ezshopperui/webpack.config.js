/* global __dirname */

global.appRoot = __dirname;

const packages = require('./package');
const common = require('./build/common');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const AutoIndexerPlugin = require('./build/plugins/AutoIndexerPlugin');
// const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');

module.exports = env => {
    return {
        module: {
            rules: [
                {
                    enforce: 'pre',
                    test: /\.(js(|x))$/,
                    exclude: /node_modules/,
                    loader: 'eslint-loader'
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader'
                        }
                    ]
                },
                {
                    test: /\.(jpeg|jpg|png|gif|svg|ico)$/i,
                    exclude: /node_modules/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            exclude: [
                                /vendors/
                            ],
                            name: '[name].[sha512:hash:base64:7].[ext]',
                            outputPath: './assets/img/',
                            publicPath: '/assets/img'
                        }
                    }]
                }
            ]
        },
        plugins: [
            new HtmlWebPackPlugin({
                filename: './index.html',
                template: './public/index.html',
                meta: {
                    viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
                    version: packages.version
                },
                cache: false
            }),
            new AutoIndexerPlugin({
                watch: env.env === 'local',
                files: ['./src/js'],
                rootPath: common.path.root,
                srcPath: common.path.sourcePath,
                keepIndexInEmptyFolders: false,
                config: {
                    ignored: /(index\.js|(.*hot-update\.json)|node_modules|web\/|(~.*\..*))/,
                    alwaysStat: false,
                    ignoreInitial: true,
                    persistent: true,
                    usePolling: true
                }
            })
        ],
        devtool: 'cheap-module-source-map',
        watch: true,
        mode: 'development',
        // resolve: {
        //     alias: {
        //         'react-dom': '@hot-loader/react-dom',
        //     }
        // },
        // plugins: [
        //     new WatchMissingNodeModulesPlugin('node_modules'),
        //     new webpack.HotModuleReplacementPlugin()
        // ],
        resolve: {
            alias: {
                'root': global.appRoot,
                'src': `${common.path.sourcePath}`,
                'common': `${common.path.sourcePath}/common`,
                'components': `${common.path.sourcePath}/components`,
                'muiWrappers': `${common.path.sourcePath}/components/MuiWrappers`,
                'helpers': `${common.path.sourcePath}/helpers`,
                'img': `${common.path.sourcePath}/media/img`,
                'routes': `${common.path.sourcePath}/routes`,
                'store': `${common.path.sourcePath}/store`
            }
        },
        watchOptions: {
            ignored: /node_modules|config\.js|web|build/,
            aggregateTimeout: 300,
            poll: 500
        },
        devServer: {
            port: 8080,
            // host: '0.0.0.0',
            stats: 'minimal',
            hot: true,
            inline: true,
            overlay: true,
            writeToDisk: true,
            contentBase: './web',
            disableHostCheck: true,
            historyApiFallback: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
            }
        }
    };
};
