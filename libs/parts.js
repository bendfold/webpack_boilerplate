const webpack = require( 'webpack' );
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// STYLUS CONFIG
exports.setupStylus = function( paths ) {
	return {
		module : {
			loaders: [
				{
					test: /\.styl$/,
					loader: ExtractTextPlugin.extract('css-loader?sourceMap!stylus-loader'),
					include: paths
				}
			]
		},
		plugins : [
			new ExtractTextPlugin('[name][chunkhash].css')
		],
		stylus: {
			use: [require('nib')()],
			import: ['~nib/lib/nib/index.styl']
		}
	}
};
// JS CONFIG
// exports.setupJS = function( paths ) {
// 	return {
// 		module : {

// 		}
// 	}
// };