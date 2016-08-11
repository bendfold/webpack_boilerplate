const webpack = require( 'webpack' );
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nib = require('nib');

// STYLUS CONFIG
exports.setupStylus = function( paths ) {
	return {
		module : {
			loaders: [
				{
					test: /\.styl$/,
					// loader : 'style-loader!css-loader?sourceMap!stylus-loader',
					// loaders: ['style', 'css?sourceMap', 'stylus'],
					loader: ExtractTextPlugin.extract('css-loader?sourceMap!stylus-loader'),
					include: paths
				}
			]
		},
		plugins : [
			new ExtractTextPlugin('[name][chunkhash].css')
		]
	}
};


exports.extractCSS = function( paths ) {
	return {
		module : {
			loaders: [
				{
					test: /\.styl$/,
					// loader : 'style-loader!css-loader?sourceMap!stylus-loader',
					loader: ExtractTextPlugin('style', 'css', 'stylus'),
					include: paths
				}
			]
		},
		plugins : [
			new ExtractTextPlugin('[name].css')
		]
	}
};

// JS CONFIG
// exports.setupJS = function( paths ) {
// 	return {
// 		module : {

// 		}
// 	}
// };