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

// JS minification setup
exports.minifyJS = function() {
	return {
		plugins: [
			new webpack.optimize.UglifyJsPlugin({
				// Don't beautify output (enable for neater output)
				beautify: false,
				// Eliminate comments
				comments: false,
				// Compression specific options
				compress: {
					warnings: false,
					// Drop `console` statements
					drop_console: true
				},
				// Mangling specific options
				mangle: {
					// Don't mangle $
					except: ['$'],
					// Don't care about IE8
					screw_ie8 : true,
					// Don't mangle function names
					keep_fnames: true
				}
			})
		]
	};
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
