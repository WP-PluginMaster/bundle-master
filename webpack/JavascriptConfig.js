
const devServer = require('./BaseConfig')

const js = {
    devServer: devServer,
    entry: {},
    output: {},
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', ]
                    },
                }
            }
        ]
    },
    plugins: [],
}

module.exports =  js 
