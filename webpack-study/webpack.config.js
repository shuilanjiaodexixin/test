const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

// 这个配置文件，就是JS文件，通过Node中的模块操作，向外暴露了一个配置对象
module.exports ={
    // 配置文件指定入口出口
    entry: path.join(__dirname, './src/main.js') ,//入口表示要使用webpack打包那个文件
    output:{
        path: path.join(__dirname,'./dist'), //指定输出目录
        filename: 'bundle.js' //这是输出文件名称
    },
    devServer:{
        open: true,
        port : 8000,
        contentBase : 'src',
        hot : true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            // 创建一个在内存中生成HTML页面的插件
            template:path.join(__dirname, './src/index.html'),//指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
            filename: 'index.html' //指定生成页面名字
        })
        //当使用了htmlWebpackPlugin不再需要手动处理bundle.js的引用路径，因为插件已经创建了合适srcipt，并且引入正确的路径
    ],
    module:{
        rules:[ //这个节点，用于配置所有第三方模块加载器
            // 所有第三放文件的处理规则
            { test: /\.css$/, use: ['style-loader', 'css-loader']},
            { test:  /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            { test:  /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            { test:  /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=100&name=-[hash:8][name].[ext]'},
            { test:  /\.(ttf|svg|woff|woff2|eot|otf)$/, use: 'url-loader'}, //处理字体loder
            { test:  /\.js$/, use: 'babel-loader', exclude:/node_modules/},
            //处理.css文件的第三方loader规则 从右到左调用 loader处理完毕会把处理结果，直接交给webpack进行打包合并，最终输出到bundle.js中
            //limit给定值，是图片大小,单位byte,一个会做bs64处理 另一个返回哈希
        ]
    }
}

// 总结
//  1. 首先 wenbpack发现 我们没有通过命令的形式 给他指定入口出口
//  2. webpack就回去项目根目录查找webpack.config.js

//  使用 webpack-dev-server工具，实现自动打包编译功能
