const path = require('path')

// 这个配置文件，就是JS文件，通过Node中的模块操作，向外暴露了一个配置对象
module.exports ={
    // 配置文件指定入口出口
    entry: path.join(__dirname, './src/main.js') ,//入口表示要使用webpack打包那个文件
    output:{
        path: path.join(__dirname,'./dist'), //指定输出目录
        filename: 'bundle.js' //这是输出文件名称
    }

}

// 总结
//  1. 首先 wenbpack发现 我们没有通过命令的形式 给他指定入口出口
//  2. webpack就回去项目根目录查找webpack.config.js