// 项目是js入口文件


// 1.导入jquery
import $ from 'jquery'
// const $ = require('jquery')

$(function () {
    $("li:odd").css('backgroundColor', 'lightblue')
    $("li:even").css('backgroundColor', function(){
        return '#' + 'D97634'
    })
    
})

// 经过演示 webpack可以做什么事情
