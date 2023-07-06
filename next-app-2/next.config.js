/** @type {import('next').NextConfig} */
const {NextFederationPlugin} = require('@module-federation/nextjs-mf');
const packageJson = require('./package.json');
const deps = packageJson.dependencies;
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.plugins.push(
            new NextFederationPlugin({
                name: 'next2',
                filename: 'static/chunks/remoteEntry.js',
                exposes: {
                    './remote': '@mf2/components/remote/remote.tsx',
                },
            }),
        );
        return config;
    },
}

module.exports = nextConfig
