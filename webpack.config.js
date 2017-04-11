const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname , '/dist'),
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
		open: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack 2 Front End Boilerplate',
			// minify: {
			// 	collapseWhitespace: true
			// },
			hash: true,
			template: './src/markup/index.pug'
		}),
		new ExtractTextPlugin("./styles/app.css")
	]
};