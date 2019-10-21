
var vm = new Vue({
    el: '#app',
    data:{
        n1:0,
        n2:0,
        result: 0,
        opt:'+'
    },
    methods:{
        getResult:function(){
            // switch(this.opt){
            //     case '+':
            //         this.result = parseInt(this.n1) + parseInt(this.n2)
            //         break
            //     case '-':
            //         this.result = parseInt(this.n1) - parseInt(this.n2)
            //         break
            //     case '*':
            //         this.result = parseInt(this.n1) * parseInt(this.n2)
            //         break
            //     case '/':
            //         this.result = parseInt(this.n1) / parseInt(this.n2)
            //         break
            //     }
            var codeStr = 'parseInt(this.n1)' + this.opt +  'parseInt(this.n2)'
            this.result = eval(codeStr)
        }
    }
})


