// 项目是js入口文件


// 1.导入jquery
import $ from 'jquery'
// const $ = require('jquery')
import './css/index.css'
import './css/index.less'
import './css/index.scss'
import 'open-iconic/font/css/open-iconic-bootstrap.css'

// 如果要通过路径形式引入node_modules中相关名称，可省区写
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
// webpack默认只能处理js文件类型
// 如果要处理非js文件要手动安装合适的第三方加载器；
// 1.如果想打包处理css文件，需要安装cnpm i style-loder css-loader -D
// 2.打开wenb.pack.config.js这个配置文件，再里面，新增一个配置节点，叫做module, 它是一个对象；在这个module对象身上，有个rules属性，这个rules属性是个数组，这个世俗中存放了所有第三方文件的匹配和处理规则
$(function () {
    $("li:odd").css('backgroundColor', 'black')
    $("li:even").css('backgroundColor', function(){
        return '#' + 'D97634'
    })
    
})

// 经过演示 webpack可以做什么事情
// webpack-dev-server生成的bundle文件没有存放实际物理磁盘上，直接托管到电脑内存中，删除后项目目录根部找不到打包好的文件
// webpack-dev-server以一种虚拟的形式i托管到项目中，根本看不到 
// 配置参数 端口 根目录 启动参数 热刷新 生成的虚拟bundle文件和src平级 就可以实现无缝刷新了 不断地patch


class Person{
    static info = {name: 'feifei',  age:20}
}
// 静态属性
// 实例属性：只能通过类的实例访问的属性叫实例属性

// function Animal(name){
//     this.name = name 
// }

// var a1 = new Animal('画画')
// AnimationPlaybackEvent.info = 123

// console.log.log(Animal.info)
// console.log(a1.name)



// ****webpack只能处理一部分ES6信誉发，一部分ES6 ES7语法处理不了了，需要借助第三方loader转化 转化低级语法 会把结果交给webpack打包到bundle.js
// 通过babel,可以帮我们将高级的语法转化成低级语法
// 安装2个包安装Babel ，cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
// 第二个包 cnpm i babel-preset-env babel-preset-stage-0 -D
// 添加新的匹配规则
// 项目根目录新建.babelrc配置，必须符合JSON语法规范，不能写注释，字符串必须用双引号
// 再.babelsrc写如下配置
// {
//     "presets":["env","stage-0"], //预设 语法
//     "plugins": ["transform-runtime"]
// }