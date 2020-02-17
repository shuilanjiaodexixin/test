
// 过滤器定义语法
// Vue.filter('过滤器名称'， function(第一个参数和永远是|前面的传来的数据,可以传递多个参数){})
Vue.filter('ctimeFormat',function(data, pattern=''){
    var dt =new Date(data)

    var year =  dt.getFullYear()
    var mouth = padstart(dt.getMonth() + 1) 
    var day = padstart(dt.getDate() )

    

    if(pattern && pattern.toLowerCase()== 'yyyy-mm-dd'){
        return  `${year}-${mouth}-${day}`
    }else{
        var hh = padstart(dt.getHours()) 
        var mm = padstart(dt.getMinutes()) 
        var ss = padstart(dt.getSeconds())
        return  `${year}/${mouth}/${day} ${hh}时:${mm}分:${ss}秒`
    }
})


var padstart = function padstart(params) {
    return params.toString().padStart(2, '0')
    
}
// 使用Vue.directive() 定义全局指令
// 其中：参数1：指令名称 注意在定义的时候不需要加v-前缀 必须在指令前加上v--调用
// 参数2：是一个对象，可以在特定阶段执行相关操作





// bind:function(){}每当绑定到元素的时候会执行这个函数 只执行一次
// inserted:(){} 表示元素插入到dom中会执行
// updated 当vnode更新的时候会执行 可能会触发多次
Vue.directive('focus',{
    inserted:function (el) {
        el.focus()
    }
})

// 和js行为有关的操作最好放在inserted执行防止js行为不生效
// 和样式相关的操作可以放在bind中 
Vue.directive('color',{
    bind: function(el) {
        el.style.color = 'red'
    }
})
            
var vm = new Vue({
    el: '#app',
    data:{
        name:'',
        keywords:'',
        lists:[
            {id:1, name:'奔驰', ctime:new Date()},
            {id:2, name:'宝马', ctime:new Date()}
        ]
    },
    methods:{
        add(){
            // 获取id, name 直接从data获取
            // 组织成一个对象 lists添加 调用数组相关方法
            // vue已经实现双向绑定，每当修改data vue会自动把最新数据应用到页面上
            // vm中数据的操作，同时，在操作Model的时候，指定业务逻辑操作
            var newId = this.lists.length +1
            var newCar = {id:newId, name:this.name, ctime:new Date()}
            this.lists.push(newCar)
            this.id = newId + 1
            this.name = ''
        },
        del(id){
            // 根据id删除数据 
            // 如果找到索引，直接调用splice方法
            var index = this.lists.findIndex(item =>{
                if(item.id == id){
                    return true
                }})
            this.lists.splice(index, 1)
        },
        search(keywords){
            // var newList = []
            // this.lists.forEach(item => {
            //     if(item.name.indexOf(keywords) !=-1){
            //         newList.push(item)
            //     }
            // });
            // return newList
            // 注意：forEach some filter findIndex属于数组新方法
            // 都会对数组每一样遍历 forEach没办法种植 some可以通过true终止
            // filter查到符合条件的得到一个新数组 findex找到定向索引
            return this.lists.filter(item =>{
                // ES6中为字符串提供了新方法，叫做String。prototype.includes(key)包含返回ture不包含返回false
                // contains
                if(item.name.includes(keywords)){
                    return item
                }

            }) 
        },
    },
        

    





});


