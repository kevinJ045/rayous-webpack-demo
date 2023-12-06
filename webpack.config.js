const path = require('path');

// $ webpack --config webpack.config.js

module.exports = {
	mode: "development",
	entry: "./src/main.js",
	output: {
    path: path.resolve('./public/js'),
    filename: 'main.js'
  },
	resolve: {
		modules: [path.resolve('./src'), path.resolve('./node_modules')],
		extensions: ['.ts', '.js']
	},
	watch: true,
	module: {
		rules: [
			{
        test: /\.ts$/,
        use: {
					loader: "ts-loader",
					options: {
						allowTsInNodeModules: true
					},
				},
      }
		]
	}
}