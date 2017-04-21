const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const nib = require("nib");

// TODO - EXTRACT THIS OUT TO CONFIG
const isProduction = process.env.NODE_ENV.trim() === 'production';
const cssDev = ['style-loader', 'css-loader',
					{
						loader: 'stylus-loader',
						options: {
							use: [nib()],
						}
					}
				];
const cssProd = ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [ 'css-loader', 'stylus-loader']
				});
const cssConfig = isProduction ? cssProd : cssDev;


module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname , '/dist'),
		filename: './js/app.bundle.js'
	},
	module : {
		rules: [
			{
				test: /\.styl$/,
				use: cssConfig
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: ['file-loader?name=[name].[ext]&outputPath=images/']
			},
			{
				test: /\.js$/,
				use: ['babel-loader'],
				exclude: path.join(__dirname, 'node_modules')
			},
			{
				test: /\.pug$/,
				use: ['pug-loader']
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname , '/dist'),
		compress: true,
		stats: 'errors-only',
		hot: true, // enable HMR on the server
		open: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			template: './src/markup/index.pug'
		}),
		new ExtractTextPlugin({
			filename:"./styles/app.css",
			disable: !isProduction,
			allChunks: true
		}),
		new webpack.HotModuleReplacementPlugin(),
		// enable HMR globally
		new webpack.NamedModulesPlugin()
		// prints more readable module names in the browser console on HMR updates
	]
};