
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style", 'css!sass')
          },
          {
            test: /\.js$/, //处理以.js结尾的文件
            exclude: /node_modules/, //处理除了nodde_modules里的js文件
            loader: 'babel-loader' //用babel-loader处理
          }
        ]
      },
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        hotOnly: true
    },
    // 映射源码
    devtool: 'inline-source-map',
}