const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app/index.js',
    output: {
        filename: 'common.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
