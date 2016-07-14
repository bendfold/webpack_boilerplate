var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devtool: 'cheap-eval-source-map',
	entry: [
		'./src/scripts/index.js'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/markup/index.html'
		})
	],
	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style', 'css']
			},
			{
				test: /\.html$/,
				loader: 'raw-loader'
			},
			{
				test: /\.styl$/,
				loader: 'style-loader!css-loader?sourceMap!stylus-loader'
			},
			{
				test: /\.js$/,
				loaders: ['jshint', 'babel'],
				include: path.join(__dirname, 'src')
			}
		]
	},
	stylus: {
		use: [require('nib')()],
		import: ['~nib/lib/nib/index.styl']
	}
}