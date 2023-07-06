const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;
module.exports = {
    mode: 'development',
    devServer: {
        port: 3002
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude:
                    /node_modules/,
                use: {
                    loader:
                        'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-react',
                            '@babel/preset-env',
                        ],
                        plugins: [
                            '@babel/plugin-transform-runtime',
                        ],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin(
            {
                name: 'react1',
                filename:
                    'remoteEntry.js',
                exposes: {
                    './Timer':
                        './src/components/Timer',
                },
                shared: deps
            }
        ),
        new HtmlWebpackPlugin({
            template:
                './public/index.html',
        }),
    ],
};
