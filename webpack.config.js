const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

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
        common: `${dir.src}/js/app/index.js`,
        validator: `${dir.src}/js/app/validator.js`,
        modules: `${dir.src}/js/app/modules.js`,
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'styles.css' }),
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
        filename: '[name].[hash:8].js',
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
                    MiniCssExtractPlugin.loader,
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
        minimizer: [new OptimizeCssAssetsPlugin()],
    },
};
