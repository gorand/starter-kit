const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const dir = {
    src: './src',
    dist: './dist',
};

module.exports = {
    mode: 'development',
    entry: {
        common: `${dir.src}/js/app/index.js`,
        validator: `${dir.src}/js/app/validator.js`,
        modules: `${dir.src}/js/modules/index.js`,
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'styles.css' }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
            chunks: ['common'],
            template: __dirname + '/src/index.html',
        }),
        new HtmlWebpackPlugin({
            title: 'Validation',
            filename: 'validate.html',
            chunks: ['validator'],
            template: __dirname + '/src/validate.html',
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
        minimizer: [
            new OptimizeCssAssetsPlugin(),
        ],
    },
};
