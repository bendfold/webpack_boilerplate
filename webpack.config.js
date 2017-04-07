const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname , '/dist'),
		filename: './js/app.bundle.js'
	},
	module : {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.js$/,
				use: ['babel-loader'],
				exclude: path.resolve(__dirname, 'node_modules')
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname , '/dist'),
		compress: true,
		stats: 'errors-only',
		open: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack 2 Core Setup',
			minify: {
				collapseWhitespace: true
			},
			hash: true,
			template: './src/index.ejs'
		}),
		new ExtractTextPlugin("./styles/app.css")
	]
};