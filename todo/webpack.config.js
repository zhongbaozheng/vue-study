/*webpack用于打包前端资源*/
//路径，path是nodejs自带的包
const path = require('path')
//获取全局变量
const isDev = process.env.NODE_ENV === 'development'
//用于加载html
const HTMLPlugin = require('html-webpack-plugin')

const webpack = require('webpack')


const config = {
	//入口地址，js文件
	entry:path.join(__dirname,'src/index.js'),
	//输出路径
	output:{
		filename:'bundle.js',
		path:path.join(__dirname,'dist')
	},
	//定义规则，webpack只能理解es5的语法
	module:{
		rules:[
			{
		        test: /\.vue$/,
		        loader: 'vue-loader'
      		},
      		{
		        test: /\.css$/,
		        use:[
		        	'style-loader',
		        	'css-loader',
		        ]    
      		},
      		{
		        test: /\.styl$/,
		        use:[
		        	'style-loader',
		        	'css-loader',
		        	'stylus-loader'
		        ]    
      		},
      		{
		        test: /\.(gif|jpg|jpeg|png|svg)$/,
		        use:[
		        	{
		        		loader: 'url-loader',
		        		options:{
		        			limit:1024,
		        			name:'[name]-aaa.[ext]'
		        		}
		        	}
		        ]
      		},

		]
	},
	//插件添加
	plugins:[
		//用于webpack的打包区分
		new webpack.DefinePlugin({
			'process.env':{
				NODE_ENV:isDev ? '"development"':'"production"'
			}
		}),
		new HTMLPlugin()
	]

}

//环境配置 webpack-dev-server
if(isDev){
	config.devtool = '#cheap-module-eval-source-map'
	config.devServer = {
		port:8000,
		host:'0.0.0.0',
		overlay:{
			//错误输出
			errors:true
		},
		// open:true
		hot:true  //热加载渲染
	}
	// 热加载
	config.plugins.push(
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
		)
}

module.exports = config