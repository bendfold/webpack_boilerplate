const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nib = require('nib');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');
const BabiliPlugin = require('babili-webpack-plugin');


exports.devServer = ({ contentBase,compress,stats,hot,open }) => ({
	devServer: {
		contentBase,
		compress,
		stats,
		hot, // enable HMR on the server
		open 
	},
});

exports.parsePug = () => ({
	module : {
		rules: [
			{
				test: /\.pug$/,
				use: ['pug-loader']
			},
		]
	}
});

exports.loadImages = (isProduction) => ({
	module : {
		rules: [
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: ['file-loader?name=[name].[ext]&outputPath=images/']
			},
		]
	}
});

exports.parseStylus = (isProduction) => {

	const cssDev = ['style-loader', 
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1
							}
						},
						{
							loader: 'stylus-loader?sourceMap',
							options: {
								use: [nib()],
							}
						}
					];

	const cssProd = ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: [
							{
								loader: 'css-loader',
								options: {
									importLoaders: 1
								}
							},
							{
								loader: 'stylus-loader',
								options: {
									use: [nib()],
								}
							}
						],
						publicPath: '../'
					});

	const cssConfig = isProduction ? cssProd : cssDev;

	const cssLoadConfig = {
			module : {
				rules: [
					{
						test: /\.styl$/,
						use: cssConfig
					},
				]
			}
		};

	return cssLoadConfig;
};


exports.minifyCSS = ({ options }) => ({
	plugins: [
		new OptimizeCSSAssetsPlugin({
			cssProcessor: cssnano,
			cssProcessorOptions: options,
			canPrint: false,
		}),
	],
});

exports.parseJs = ({exclude}) => ({
	module : {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader'],
				exclude
			},
		]
	}
});

exports.lintJs = ({exclude}) => ({
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /.\js$/,
				loader: ['eslint-loader'],
				exclude,
			},
		],
	},
});

exports.minifyJs = () => ({
	plugins: [
		new BabiliPlugin(),
	],
});

exports.generateSourceMaps = ({ type }) => ({
	devtool: type,
});

exports.loadFonts = ({ include, exclude, options } = {}) => ({
	module: {
		rules: [
			{
				// Capture eot, ttf, woff, and woff2
				test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				include,
				exclude,

				use: {
					loader: 'file-loader',
					options,
				},
			},
		],
	},
});

// Set up HTML plugin
const setupHtmlPlugin = function( path, fileName, extn ) {
	return new HtmlWebpackPlugin({
		hash: true,
		template: path + '/' + fileName + extn || '.html',
		filename: fileName + '.html'
	});
};
exports.batchProcessHtml = function( path, fileCollection, extn ) {
	const htmlInstCollection = [];
	fileCollection.map(function( fileName ) {
		htmlInstCollection.push( setupHtmlPlugin(path, fileName, extn) );
	});
	return {
		plugins: htmlInstCollection
	}
};