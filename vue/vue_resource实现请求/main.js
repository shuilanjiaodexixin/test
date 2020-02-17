var vm = new Vue({
    el: '#app',
    data:{
        
    },
    methods:{
        getInfo:function() {
            this.$http.get('https://www.apiopen.top/weatherApi?city=成都').then(response =>{
                // this.someData = response.body;
                console.log(response)
            },response =>{
                // err callback
            });
        },
        postInfo:function() {
            // post请求 application/x-wwww-form-urlencoded
            // 手动发起的请求默认没有服务器表单格式
            // 通过post方法第三个参数{}提交以表单形式
            var body = {
                username:'123',
                password:'123',
                deviceType:'ios'
            }
            this.$http.post('http://demo/web-member/auth/memberLogin', body,{emulateJSON:true}).then(response=>{
                console.log(response)
            })
        },
        jsonpInfo:function() {
            this.$http.jsonp('https://api.asilu.com/geo/?callback=jQuery19109742645173588163_1571706291987&&_=1571706291990').then(result=>{
                console.log(result)
            })
        }





    },




})


