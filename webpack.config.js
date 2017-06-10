var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'webpack-dev-server/client?http://127.0.0.1:8080/',
		'webpack/hot/only-dev-server',
		'./src'
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		modulesDirectories: ['node_modules', 'src'],
		extensions:['', ".js", ".jsx", ".css"]
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
			},
			{
				test: /\.css$/, 
				loader: "style-loader!css-loader"
			},
			/*{
				test: /\.less$/, 
				loader: "style-loader!css-loader!less-loader"
			},
			{
				test: /\.gif$/, 
				loader: "url-loader!mimetype=image/png"
			},
			{
				test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/, 
				loader: "url-loader!mimetype=application/font-woff"
			},
			{
				test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/, 
				loader: "file-loader!name=[name].[ext]"
			} */

			{ 
			    test: /\.(jpe?g|png|gif)$/, 
			    loaders: ["file"] 
			},
			{ 
			    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
			    loader: "url-loader?limit=10000&mimetype=application/font-woff" 
			},
			{ 
			    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
			    loader: "file-loader" 
			}

		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]

};