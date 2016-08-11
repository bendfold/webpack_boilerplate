const path = require('path');
// Generate our index.html
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Allows us to branch out config based on the run mode we are in
const merge = require('webpack-merge');
// Validation for the config file
const validate = require('webpack-validator');
// Plugin specific configuration
const parts = require('./libs/parts');
// Setup PATHS object
const PATHS = {
	entry : path.join(__dirname, 'src/scripts'),
	src: path.join(__dirname, 'src'),
	markup : path.join(__dirname, 'src/markup/'),
	build: path.join(__dirname, 'build')
};
// Setup common object
const common = {
	// Entry accepts a path or an object of entries.
	// We'll be using the latter form given it's
	// convenient with more complex configurations.
	entry: {
		app: PATHS.entry
	},
	output: {
		path: PATHS.build,
		filename: '[name].js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack Core Base Setup',
			template: PATHS.markup + 'index.html'
		})
	]
};

var config;

// Detect how npm is run and branch based on that
switch( process.env.npm_lifecycle_event ) {
	// PRODUCTION SET UP
	case 'prod-build' : 
		config = merge(
			common,
			// parts.setupCSS( PATHS.src )
			parts.setupStylus( PATHS.src )
		);
		break;
	// DEV SETUP
	default:
		config = merge(
			common,
			// parts.setupCSS( PATHS.src )
			parts.setupStylus( PATHS.src )
		);
}

module.exports = validate(config, {
	quiet: true
});