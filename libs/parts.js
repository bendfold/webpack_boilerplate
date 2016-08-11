const webpack = require( 'webpack' );

// CSS CONFIG
exports.setupCSS = function( paths ) {
	return {
		module : {
			loaders: [
				{
					test: /\.css$/,
					loaders: ['style', 'css'],
					include: paths
				}
			]
		}
	}
};

// STYLUS CONFIG
exports.setupStylus = function( paths ) {
	return {
		module : {
			loaders: [
				{
					test: /\.styl$/,
					// loader : 'style-loader!css-loader?sourceMap!stylus-loader',
					loaders: ['style', 'css', 'stylus'],
					include: paths
				}
			]
		}
	}
};