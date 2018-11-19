module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
        // Perform customizations to webpack config
        // Important: return the modified config

        config.module.rules.push({
            test: /\.(js)$/,
            loader: 'string-replace-loader',
            query: {
                multiple: [
                    {
                        search: '$$VERSION',
                        replace: require('./package.json').version,
                    },
                ],
            },
        })

        return config
    },
    // webpackDevMiddleware: config => {
    //     // Perform customizations to webpack dev middleware config
    //     // Important: return the modified config
    //     return config
    // }
}