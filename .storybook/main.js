module.exports = {
    addons: [
        {
            name: '@storybook/preset-scss',
            options: {
                cssLoaderOptions: {
                    modules: {
                        localIdentName: '[name]__[local]-[hash:base64:5]',
                    },
                },
            },
        },
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
    ],
    stories: ['../stories/**/*.stories.@(js|mdx)'],
};
