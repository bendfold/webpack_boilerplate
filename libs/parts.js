const webpack = require( 'webpack' );
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// STYLUS CONFIG
exports.setupStylus = function( paths ) {
	return {
		module : {
			loaders: [
				{
					test: /\.styl$/,
					// loader : 'style-loader!css-loader?sourceMap!stylus-loader',
					loaders: ['style', 'css?sourceMap', 'stylus'],
					include: paths
				}
			]
		}
	}
};


// exports.setupStylus = function( paths ) {
// 	return {
// 		module : {
// 			loaders: [
// 				{
// 					test: /\.styl$/,
// 					// loader : 'style-loader!css-loader?sourceMap!stylus-loader',
// 					loaders: ExtractTextPlugin('style', 'css', 'stylus'),
// 					include: paths
// 				}
// 			]
// 		},
// 		plugins : [
// 			new ExtractTextPlugin('[name][hash].css')
// 		]
// 	}
// };
// JS CONFIG
// exports.setupJS = function( paths ) {
// 	return {
// 		module : {

// 		}
// 	}
// };