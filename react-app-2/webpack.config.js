const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;
module.exports = {
    mode: 'development',
    devServer: {
        port: 3003
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
                name: 'react2',
                filename:
                    'remoteEntry.js',
                remotes: {
                    react1:
                        'react1@http://localhost:3002/remoteEntry.js',
                    'next2': 'next2@http://localhost:3001/_next/static/chunks/remoteEntry.js',
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
