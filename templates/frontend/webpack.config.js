const path = require('path');

module.exports = {
    mode: 'development',
    watch: true,
    entry: './main.tsx',
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname + '../../../', '/static'),
        filename: 'bundle.js'
    },
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
        ]
    },
    resolve: {
        extensions: ['.jsx', '.ts', '.js', '.tsx'],
    }
}