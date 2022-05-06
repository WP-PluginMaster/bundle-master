const path = require('path');
let GenerateWebpackConfig = require('./webpack/GenerateConfig.js')
let GenerateViteConfig = require('./vite/GenerateConfig.js')


class BundleMastering {

    constructor() {
        this.bundler = 'webpack';
        this.config = [];
        this.bundlerConfig = [];
        this.baseDirectory = ''

        this.basePath = __dirname + '/../../';
    }

    webpack(baseDirectory = '') {
        this.baseDirectory = baseDirectory;
        this.bundler = 'webpack';
        return this;
    }

    vite(source, output, options = {}) {
        let Instance = new GenerateViteConfig(this.basePath);
        return Instance.get({
            source: source,
            output: output,
            options: options
        })
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

    generateWebpackConfig() {
        this.config.forEach(item => {
            let expectedConfig = {};

            if (item.type === 'vue') {
                expectedConfig = require('./webpack/VueConfig.js')
            }

            if (item.type === 'react') {
                expectedConfig = require('./webpack/ReactConfig.js')
            }

            if (item.type === 'scss') {
                expectedConfig = require('./webpack/ScssConfig.js')
            }

            let Instance = new GenerateWebpackConfig(this.basePath, expectedConfig, this.baseDirectory);
            this.bundlerConfig.push(Instance.get(item))
        })
    }


    async init() {
        await this.generateWebpackConfig();
        return this.bundlerConfig
    }
}


module.exports = new BundleMastering()

