let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let extract = new ExtractTextPlugin("build.css")

let CONFIG = {
	entry: {
		index:'./app/index.js',
		vendor:['react','react-dom','redux','react-redux','react-router-dom'] //第三方库
	},
	output: {
		filename: '[name].js',
		path: path.resolve('dist')
	},
	module: {
		rules: [
			{test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
			{test: /\.less$/, use: extract.extract(['css-loader',{
				loader:'postcss-loader',
				options: {
					plugins: [require('autoprefixer')]
				}
			},'less-loader'])}
		]
	},
	plugins: [
		extract,
		new htmlWebpackPlugin({
			template: './app/index.html'
		})
	],
	devtool: 'source-map', // 错误时可以提示源码错误，不会光显示bundle.js错误
	devServer: {
		proxy: {
			'/api/*': {
				target: 'http://localhost:3000'
			}
		}
	}
};

module.exports = CONFIG