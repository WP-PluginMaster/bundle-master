/*
* generate Vite configuration
*/

const path = require('path');

class GenerateConfig {

    constructor(basePath) {
        this.fullConfig = require('./Config.js');
        this.basePath = basePath;
        this.config = {};
    }

    removeExtension(name) {
        return name.split('.')[0]
    }

    entryName() {
        let splitOutput = this.config.output.split(".");

        if (typeof splitOutput[1] === 'undefined') {
            let splitSource = this.config.source.split("/");
            return this.removeExtension(splitSource[splitSource.length - 1]);
        }

        splitOutput = this.config.output.split("/");
        return this.removeExtension(splitOutput[splitOutput.length - 1]);
    }

    resolveEntry() {
        this.fullConfig.build.rollupOptions.input[this.entryName()] = path.join(this.basePath, this.config.source)
    }

    resolveOutput() {

        let splitOutput = this.config.output.split(".");
        if (typeof splitOutput[1] !== 'undefined') {
            let splitOutput = this.config.output.split("/");
            this.config.output = this.config.output.replace(splitOutput[splitOutput.length - 1], "");
        }

        this.fullConfig.build.outDir  = path.resolve(this.basePath, this.config.output)
    }

    resolvePlugin() {
        if (typeof this.config.options.plugins !== 'undefined') {
            this.fullConfig.plugins = this.fullConfig.plugins.concat(this.config.options.plugins)
        }
    }

    resolvePort() {
        if (typeof this.config.options.port !== 'undefined') {
            this.fullConfig.server.port = this.config.options.port;
        }
    }

    resolveAlias() {
        if (typeof this.config.options.alias !== 'undefined') {
            this.fullConfig.resolve.alias = this.config.options.alias;
        }
    }

    get(item) {
        this.config = item;

        this.resolvePort();

        this.resolveEntry();
        this.resolveOutput();

        this.resolvePlugin();
        this.resolveAlias();

        return this.fullConfig;
    }

}

module.exports = GenerateConfig
