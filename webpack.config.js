var path = require('path');

module.exports = {
	entry: './js/main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './js')
	},
	module: {
		loaders: [ {
			loader: 'babel-loader',
			include: [path.resolve(__dirname, './js')],
			test: /\.js$/	
		}
		]
	}
}