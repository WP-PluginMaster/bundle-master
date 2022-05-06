
const devServer = require('./BaseConfig')

const react = {
    devServer: devServer,
    entry: {},
    output: {},
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(s[ac]ss|css)$/i,
                exclude: /node_modules/,
                use: [
                    "css-loader",
                    "sass-loader",
                ],
            },
        ]
    },
    plugins: [],
}

module.exports =  react 
