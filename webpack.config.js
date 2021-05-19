const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const dir = {
    src: './src',
    dist: './dist',
};

function getHtmPlugins(dir) {
    const files = fs.readdirSync(path.resolve(__dirname, dir)).filter(f => f.includes('.html'));

    return files.map(file => {
        const parts = file.split('.');
        const name = parts[0];
        const extension = parts[1];

        return new HtmlWebpackPlugin({
            filename: `${name}.html`,
            chunks: [name],
            template: path.resolve(__dirname, `${dir}/${name}.${extension}`),
        });
    });
}

module.exports = {
    mode: 'development',
    entry: {
        common: [`${dir.src}/js/app/index.js`, `${dir.src}/scss/entry/index.scss`],
        validator: [`${dir.src}/js/app/validator.js`, `${dir.src}/scss/entry/index.scss`],
        modules: [`${dir.src}/js/app/modules.js`, `${dir.src}/scss/entry/index.scss`],
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '[name].css' }),
        new CleanWebpackPlugin(),
        ...getHtmPlugins(`${dir.src}/templates`),
        new HtmlWebpackPlugin({
            title: 'Development',
            chunks: ['common'],
            template: __dirname + '/src/templates/index.html',
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash:8].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                include: path.resolve(__dirname, 'src/templates/partials'),
                use: {
                    loader: 'raw-loader',
                },
            },
            {
                test: /\.(sc|c)ss$/,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { esModule: false },
                    },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true },
                    },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: true },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            implementation: require('sass'),
                        },
                    },
                ],
            },
        ],
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: dir.dist,
    },
    watch: true,
    optimization: {
        minimize: true,
    },
};
