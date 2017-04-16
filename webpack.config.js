var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/main.js',
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
					plugins: ['transform-runtime'],
					presets: ['es2015']
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
			inject: 'body',
			title: 'Intro to webpack',
            template: 'src/index.html'
		})
	]
};