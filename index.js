const path = require('path');
let GenerateWebpackConfig = require('./webpack/GenerateConfig.js')

class BundleMastering {

    constructor() {
        this.config = [];
        this.bundlerConfig = [];
        this.basePath = __dirname + '/../../';
    }

    react(source, output, options = {}) {
        this.config.push({
            source: source,
            output: output,
            options: options,
            type: 'react',
        });
        return this;
    }

    vue(source, output, options = {}) {

        this.config.push({
            source: source,
            output: output,
            options: options,
            type: 'vue',
        });

        return this;
    }

    scss(source, output, options = {}) {

        this.config.push({
            source: source,
            output: output,
            options: options,
            type: 'scss',
        });
        return this;
    }

    postCss(source, output, options = {}) {

        this.config.push({
            source: source,
            output: output,
            options: options,
            type: 'postCss',
        });
        return this;
    }

    js(source, output, options = {}) {

        this.config.push({
            source: source,
            output: output,
            options: options,
            type: 'js',
        });
        return this;
    }

    async generateWebpackConfig() {

        this.bundlerConfig = [];
        for (const item of this.config) {
            let expectedConfig = {};

            if (item.type === 'vue') {
                expectedConfig = Object.assign({}, require('./webpack/VueConfig.js'));
            }

            if (item.type === 'react') {
                expectedConfig = Object.assign({}, require('./webpack/ReactConfig.js'))
            }

            if (item.type === 'scss') {
                expectedConfig = Object.assign({}, require('./webpack/ScssConfig.js'))
            }

            if (item.type === 'postCss') {
                expectedConfig = Object.assign({}, require('./webpack/PostCssConfig.js'))
            }

            if (item.type === 'js') {
                expectedConfig = Object.assign({}, require('./webpack/JavascriptConfig.js'))
            }

            let Instance = new GenerateWebpackConfig(this.basePath, expectedConfig);

            this.bundlerConfig.push(await Instance.get(item))
        }
    }

    async init() {
        await this.generateWebpackConfig();
        return this.bundlerConfig
    }
}


module.exports = new BundleMastering()

