const {VueLoaderPlugin} = require('vue-loader')
const devServer = require('./BaseConfig')

const vue = {
    devServer: devServer,
    entry: {},
    output: {},
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(scss|css)$/,
                exclude: /node_modules/,
                use: ["vue-style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
}


module.exports = vue
