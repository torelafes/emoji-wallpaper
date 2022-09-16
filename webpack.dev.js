const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        port: 3000,
    },
    output: {
        filename: '[name].bundle.js',
    },
})
