const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        form: ['./index.ts']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        // library: 'Form',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: []
};