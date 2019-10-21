var vm = new Vue({
    el: '#app',
    data:{
        msg:'别浪~~！猥琐发育',
        intervalId:null
    },
    methods:{
        langqilai: function(){
            if (this.intervalId != null) return;
            this.intervalId = setInterval( () => {
                var start = this.msg.substring(0, 1)
                var end = this.msg.substring(1)
                this.msg = end + start
            },400)
        },
        didiao: function(){
            clearInterval(this.intervalId)
            this.intervalId =null
        }
    }
})


