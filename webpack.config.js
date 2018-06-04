module.exports = {
	entry: './assets/dev/js/main.js',
	output: {
		path: __dirname + '/assets/js',
		filename: 'main.js',
	},
	watch: true,
	module: {
		rules: [
			{
				test: /\.(js|jsx|mjs)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
};
