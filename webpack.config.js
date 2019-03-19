
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports ={
    //入口文件
    entry:path.join(__dirname,'main.js'),
    // 输出文件
    output:{
        path:path.join(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    mode:"development",
    module: {
        //打包css
        rules: [
          { test: /\.css$/, use: ["style-loader", "css-loader"] },
          {
            test: /\.vue$/,
            use: ['vue-loader']
          },
          {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style", 'css!sass')
          },
          {
            test: /\.js$/, //处理以.js结尾的文件
            exclude: /node_modules/, //处理除了nodde_modules里的js文件
            loader: 'babel-loader', //用babel-loader处理
            include: [resolve('src'), resolve('/node_modules/iview/src'), resolve('/node_modules/iview/packages')],
          },
          { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
        ]
      },
      plugins: [new HtmlWebpackPlugin({
        title: '首页',  //生成的页面标题<head><title>首页</title></head>
        filename: 'index.html', // dist目录下生成的文件名
        template: './index.html' // 我们原来的index.html，作为模板
      }),new VueLoaderPlugin()],
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        hotOnly: true
    },
    // 映射源码
    devtool: 'inline-source-map',
    resolve: {
        //解决控制台警告 https://blog.csdn.net/wxl1555/article/details/83187647
        alias: {
          'vue$': 'vue/dist/vue.esm.js' 
        },
        extensions: ['*', '.js', '.vue', '.json']
    }
}
function resolve (dir) {
  return path.join(__dirname, '..', dir)
  }