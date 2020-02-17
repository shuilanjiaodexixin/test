var http = require('http')

var server = http.createServer()


//request 请求事件处理函数，需要接收两个参数
// Request 请求对象
//     请求对象可以用来获取客户端一些请求信息，例如请求路径
// Response响应对象
//     相应对象可以用来给客户端发送响应信息
server.on('request', function(request, response){
    console.log('收到请求了， 请求路径是：' + request.url)
    var url  = request.url
    if (url == '/'){
        var goodlist = [
            {id:1,name:'lajiao'},
            {id:2,name:'fanqie'},
            {id:3,name:'juanxincai'},
            {id:4,name:'huanggua'},
        ]
        response.end(JSON.stringify(goodlist))
        console.log('主页')
    }
    else if(url == '/login'){
        response.end('login')
        console.log('登陆')
    }
    else{
        response.end('other')
        console.log('其他页面')
    }
    return response
})

server.listen(8000, function(){
    console.log('服务器启动成功，可以通过http:://127.0.0.1:8000/访问')
})