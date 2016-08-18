const path = require('path');
// Generate our index.html
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Allows us to branch out config based on the run mode we are in
const merge = require('webpack-merge');
// Validation for the config file
const validate = require('webpack-validator');
const Joi = require('webpack-validator').Joi;
// This joi schema will be `Joi.concat`-ed with the internal schema
const localSchemaExtension = Joi.object({
	// Allow custom properties, don't perform any additional validation on them
	stylus: Joi.any(),
	eslint: Joi.any()
})
// Plugin specific configuration
const parts = require('./libs/parts');
// Setup PATHS object
const PATHS = {
	src: path.join(__dirname, 'src'),
	scripts: path.join(__dirname, 'src/scripts'),
	markup: path.join(__dirname, 'src/markup'),
	build: path.join(__dirname, 'dist')
};
// Setup common object
const common = {
	// Entry accepts a path or an object of entries.
	// We'll be using the latter form given it's
	// convenient with more complex configurations.
	entry: {
		app: PATHS.scripts
	},
	output: {
		path: PATHS.build,
		filename: '[name].js'
	},
	module: {
		preLoaders: [
			{
				test: /\.js?$/,
				loaders: ['eslint'],
				include: PATHS.src
			}
		]
	},
	eslint: {
		failOnWarning: false,
		failOnError: true,
		configFile: './.eslintrc'
	},
	resolve: {
		extensions: ['', '.js']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: PATHS.markup + '/index.html'
		})
	]
};

var config;

// Detect how npm is run and branch based on that
switch( process.env.npm_lifecycle_event ) {
	// PRODUCTION SET UP
	case 'build-prod' : 
		config = merge(
			common,
			{
				devtool: 'source-map'
			},
			parts.clean( PATHS.build ),
			parts.setupStylus( PATHS.src )
		);
		break;
	// DEV SETUP
	default:
		config = merge(
			common,
			{
				devtool: 'eval-source-map'
			},
			parts.clean( PATHS.build ),
			parts.setupStylus( PATHS.src )
		);
}

module.exports = validate(config, {
	quiet: true,
	schemaExtension: localSchemaExtension
});