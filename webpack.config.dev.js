const CopyWebpackPlugin = require('copy-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    devServer: {
        // contentBase: 'dist',
        static: 'dist',
        port: 3000
    },
    devtool: 'inline-source-map',
    plugins: [
        new CopyWebpackPlugin(
            {
                patterns: [
                    { from: 'src/favicon.ico', to: 'favicon.ico' },

                    { from: 'src/images', to: 'images' }
                ]
            }
        ),
        new HTMLWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html'
        })
    ]
}