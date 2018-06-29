/* webpack用于打包前端资源 */
// 路径，path是nodejs自带的包
const path = require('path')
// 获取全局变量
const isDev = process.env.NODE_ENV === 'development'
// 用于加载html
const HTMLPlugin = require('html-webpack-plugin')
// 提取插件
const ExtractPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
// merge,继承用
const merge = require('webpack-merge')
// base
const baseConfig = require('./webpack.config.base')

const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  }),
  new HTMLPlugin()
]

const devServer = {
  port: 8000,
  host: '0.0.0.0',
  overlay: {
    // 错误输出
    errors: true
  },
  // open:true
  hot: true // 热加载渲染
}

let config

// 环境配置 webpack-dev-server
if (isDev) {
  config = merge(baseConfig, {
    devtool: '#cheap-module-eval-source-map',
    module: {
      rules: [
        {
          test: /\.styl/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            'stylus-loader'
          ]
        }
      ]
    },
    devServer,
    // 热加载
    plugins: defaultPlugins.concat([
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ])
  })
} else {
  config = merge(baseConfig, {
    entry: {
      app: path.join(__dirname, '../src/index.js'),
      vendor: ['vue']
    },
    output: {
      filename: '[name].[chunkhash:8].js'
    },
    module: {
      rules: [
        {
          test: /\.styl/,
          use: ExtractPlugin.extract({
            fallback: 'vue-style-loader',
            use: [
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              'stylus-loader'
            ]
          })
        }
      ]
    },
    plugins: defaultPlugins.concat([
      new ExtractPlugin('styles.[contentHash:8].css'),
      new webpack.optimize.CommonsChunkPlugin({
        // 公共库文件
        name: 'vendor'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        // 运行时用到的库文件
        name: 'runtime'
      })
    ])
  })
}

module.exports = config
