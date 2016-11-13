'use strict';
var webpack = require('webpack');
var path = require('path');
var APP = __dirname;
module.exports = {
	context:APP,
	entry:{
		app: ['webpack/hot/dev-server', './src/js/bootstrap.js']
	},
	output:{
		path:'./dist',
		filename:'bundle.js'
	},
	module:{
		loaders:[
			{test: /\.js$/,loader:'babel',query:{presets: ['es2015']},exclude:/node_modules/},
			{test:/\.html$/,loader:'html'},
			{test: /\.css$/,loader: 'style!css!sass'}
		]
	},
	plugins: [  
   		new webpack.HotModuleReplacementPlugin()
  	]
};