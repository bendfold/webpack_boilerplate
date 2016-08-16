const webpack = require( 'webpack' );
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


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
			new ExtractTextPlugin('[name].[chunkhash].css')
		],
		stylus: {
			use: [require('nib')()],
			import: ['~nib/lib/nib/index.styl']
		}
	}
};

// JS CONFIG
exports.setupJS = function( paths ) {
	return {
		module : {
			test: /\.js?$/,
			loaders: ['babel'],
			include: paths
		}
	}
};

// Set up build folder cleaning
exports.clean = function(path) {
	return {
		plugins: [
			new CleanWebpackPlugin([path], {
				// Without `root` CleanWebpackPlugin won't point to our
				// project and will fail to work.
				root: process.cwd()
			})
		]
	}
};
