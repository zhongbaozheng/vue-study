/*webpack用于打包前端资源*/
//路径，path是nodejs自带的包
const path = require('path')
//获取全局变量
const isDev = process.env.NODE_ENV === 'development'
//用于加载html
const HTMLPlugin = require('html-webpack-plugin')

const ExtractPlugin = require('extract-text-webpack-plugin')

const webpack = require('webpack')


const config = {
	target:'web',
	//入口地址，js文件
	entry:path.join(__dirname,'src/index.js'),
	//输出路径
	output:{
		filename:'bundle.[hash:8].js',
		path:path.join(__dirname,'dist')
	},
	//定义规则，webpack只能理解es5的语法,还有不同类型文件的加载
	module:{
		rules:[
			{
		        test: /\.vue$/,
		        loader: 'vue-loader'
      		},
      		{
		        test: /\.jsx$/,
		        loader: 'babel-loader'
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
	
	config.module.rules.push({
	    test: /\.styl/,
	    use: [
	      'style-loader',
	      'css-loader',
	      {
	        loader: 'postcss-loader',
	        options: {
	          sourceMap: true,
	        }
	      },
	      'stylus-loader'
	    ]
	  })
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
}else{
	config.entry = {
		app:path.join(__dirname,'src/index.js'),
		vendor:['vue']
	}
	config.output.filename = '[name].[chunkhash:8].js'

	 config.module.rules.push(
	    {
	      test: /\.styl/,
	      use: ExtractPlugin.extract({
	        fallback: 'style-loader',
	        use: [
	          'css-loader',
	          {
	            loader: 'postcss-loader',
	            options: {
	              sourceMap: true,
	            }
	          },
	          'stylus-loader'
	        ]
	      })
	    },
	  )

	config.plugins.push(
		new ExtractPlugin('styles.[contentHash:8].css'),
		new webpack.optimize.CommonsChunkPlugin({
			//公共库文件
			name:'vendor'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			//运行时用到的库文件
			name:'runtime'
		})
	)
}

module.exports = config