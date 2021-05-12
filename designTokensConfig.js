const StyleDictionary = require('style-dictionary').extend({
    source: ['./design-tokens/**/*.json'],
    platforms: {
        scss: {
            transforms: ['attribute/cti', 'name/cti/kebab', 'size/pxToRem', 'color/css'],
            buildPath: 'packages/core/src/scss/',
            files: [
                {
                    destination: '_variables.scss',
                    format: 'scss/variables',
                },
            ],
        },
        /** Practice #2: Add new platform named css to generate css variables:
         * Transforms should be identical to scss
         * Build path should be 'packages/core/src/css/'
         * For files, the applied format should be 'css/variables'
         */
        css: {
            transforms: ['attribute/cti', 'name/cti/kebab', 'size/pxToRem', 'color/css'],
            buildPath: 'packages/core/src/css/',
            files: [
                {
                    destination: 'variables.css',
                    format: 'css/variables',
                },
            ],
        },
    },
});

/**
 * Practice #2: Register new transform:
 * Transform name should be: 'size/pxToRem'
 * Type should target properties value
 * Transform should only apply to size category
 * Transformer should convert size in pixels to size in rems. Base font size is 16px
 */
StyleDictionary.registerTransform({
    name: 'size/pxToRem',
    type: 'value',
    matcher: (prop) => {
        console.log('matcher', prop);
        return prop.attributes.category === 'size';
    },
    transformer: (prop) => {
        console.log('transformer', prop);
        const BASE_FONT_SIZE_IN_PX = 16;
        return parseInt(prop.value) / BASE_FONT_SIZE_IN_PX + 'rem';
    },
});

StyleDictionary.buildAllPlatforms();
