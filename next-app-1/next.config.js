/** @type {import('next').NextConfig} */
const {NextFederationPlugin} = require('@module-federation/nextjs-mf');
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const {isServer} = options;
    config.plugins.push(
        new NextFederationPlugin({
          name: 'next1',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
            'next2': `next2@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
              ...(!isServer && {
                  react1: 'react1@http://localhost:3002/remoteEntry.js'
              })
          }
        }),
    );
    return config;
  },
}

module.exports = nextConfig
