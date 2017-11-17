const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nib = require('nib');

const isProduction = process.env.NODE_ENV === 'production';

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
			app: path.join(__dirname, 'src', 'index.js'),
		},
		output: {
			path: PATHS.dist,
			filename: '[name].js'
		},
		plugins: [
			new HtmlWebpackPlugin({
				hash: true,
				template: path.join(__dirname, 'src', 'markup', 'index.pug')
			})
		],
	},
	parts.parseJs({
		exclude: PATHS.nodeModules
	}),
	parts.lintJs({
		exclude: PATHS.nodeModules
	}),
	parts.loadFonts({
		options: {
			name: '[name].[ext]',
		},
	}),
	parts.parsePug(),
	parts.loadImages()
]);

const developmentConfig = merge([
	parts.devServer({
		contentBase: PATHS.dist,
		compress: true,
		stats: 'normal',
		hot: true, // enable HMR on the server
		open: true
	}),
	parts.parseStylus( isProduction ),
	parts.generateSourceMaps( { type: 'cheap-module-source-map' } ),
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
	parts.parseStylus( isProduction ),
	parts.generateSourceMaps( { type: 'source-map' } ),
	parts.minifyCSS({
		options: {
			discardComments: {
			removeAll: true,
		},
		// Run cssnano in safe mode to avoid
		// potentially unsafe transformations.
		safe: true,
		},
	}),
	parts.minifyJs(),
	{
		plugins: [
			new ExtractTextPlugin({
				filename: path.join('./', 'styles', 'app.css')
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