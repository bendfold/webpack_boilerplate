var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		path: __dirname + '/dist',
		filename: 'app.bundle.js'
	},
	plugins: [new HtmlWebpackPlugin({
		title: 'Webpack 2 Core Setup',
		template: './src/index.ejs'
	})]
};