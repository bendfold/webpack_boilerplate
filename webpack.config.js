const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nib = require('nib');

const isProduction = process.env.NODE_ENV.trim() === 'production';

const merge = require('webpack-merge');
const parts = require('./webpack.parts');

const PATHS = {
	src: path.join(__dirname, 'src'),
	dist: path.join(__dirname, 'dist'),
	nodeModules: path.join(__dirname, 'node_modules')
};

const commonConfig = merge([
	{
		entry: {
			app: PATHS.src + '/app.js',
		},
		output: {
			path: PATHS.dist,
			filename: '[name].js'
		},
		plugins: [
			new HtmlWebpackPlugin({
				hash: true,
				template: PATHS.src + '/markup/index.pug'
			})
		],
	},
	parts.parseJs({
		exclude: PATHS.nodeModules
	}),
	// parts.lintJs({
	// 	exclude: PATHS.nodeModules
	// }),
	parts.parsePug(),
	parts.loadImages()
]);

const developmentConfig = merge([
	parts.devServer({
		contentBase: path.join(__dirname , '/dist'),
		compress: true,
		stats: 'normal',
		hot: true, // enable HMR on the server
		open: true
	}),
	parts.loadCss( isProduction ),
	{
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			// enable HMR globally
			new webpack.NamedModulesPlugin()
			// prints more readable module names in the browser console on HMR updates
		]
	}
]);

const productionConfig = merge([
	parts.loadCss( isProduction ),
	{
		plugins: [
			new ExtractTextPlugin({
				filename: './styles/app.css',
				disable: !isProduction,
				allChunks: true
			}),
		]
	}
]);


module.exports = (env) => {
	if ( isProduction ) {
		return merge(commonConfig, productionConfig);
	}
	return merge(commonConfig, developmentConfig);
};