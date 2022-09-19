/*
* generate webpack configuration
*/

const path = require('path');

class GenerateConfig {
    constructor(basePath, fullConfig) {
        this.fullConfig = Object.assign({}, fullConfig)
        this.basePath = basePath;
        this.fullConfig.devServer.static.directory = path.join(this.basePath, '/')
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
        this.fullConfig.entry = {};
        this.fullConfig.entry[this.entryName()] = path.join(this.basePath, this.config.source)
    }

    resolveOutput() {
        this.fullConfig.output = {};

        let splitOutput = this.config.output.split(".");
        if (typeof splitOutput[1] !== 'undefined') {
            let splitOutput = this.config.output.split("/");
            this.config.output = this.config.output.replace(splitOutput[splitOutput.length - 1], "");
        }

        this.fullConfig.output.path = path.resolve(this.basePath, this.config.output)
    }

    resolveRules() {
        if (typeof this.config.options.rules !== 'undefined') {
            this.fullConfig.module.rules = this.fullConfig.module.rules.concat(this.config.options.rules)
        }
    }

    resolvePlugin() {
        if (typeof this.config.options.plugins !== 'undefined') {
            this.fullConfig.plugins = this.fullConfig.plugins.concat(this.config.options.plugins)
        }
    }

    resolvePort() {
        if (typeof this.config.options.port !== 'undefined') {
            this.fullConfig.devServer.port = this.config.options.port;
        }
    }

    async get(item) {
        this.config = {};
        this.config = Object.assign({}, item);
        this.resolveEntry();
        this.resolvePort();
        this.resolveOutput();
        this.resolveRules();
        this.resolvePlugin();

        return this.fullConfig;
    }

}


module.exports = GenerateConfig
