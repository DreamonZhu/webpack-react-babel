var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/comments.js',
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/, 
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: ['es2015','react']
				}
			},
			{
				test: /\.hbs$/,
				loader: 'handlebars-loader'
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			inject: true,
			title: 'Intro to webpack',
            template: 'src/index.html'
		})
	]
};