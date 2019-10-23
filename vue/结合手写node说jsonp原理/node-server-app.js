const http = require('http')

// 这个核心模块，能够帮助我们解析URL地址，从而拿到pathname query
const urlModule = require('url')
const server = http.createServer()

server.on('request', function(req, res) {
    // const url = req.url

    const{pathname:url, query } = urlModule.parse(req.url, true)
    if(url ==='/getscript'){
        var data = {
            name: '露露不爱喝露露',
            age: 19,
            gender: '男孩'
        }
        // var scriptStr ='show()'
        var scriptStr = `${query.callback}(${JSON.stringify(data)})`
        // 当作js代码解析执行
        res.end(scriptStr)
    }else{
        res.end('404')
    }
})

server.listen(3000, function() {
    console.log('server :isten at http:127.0.0.1:3000')
    
})