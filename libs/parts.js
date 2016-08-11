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