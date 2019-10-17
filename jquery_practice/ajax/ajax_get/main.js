$(function(){
    var $orders = $('#orders')
    $.ajax({
        type:'GET',
        url:'https://www.apiopen.top/femaleNameApi?page=2',
        success:function(data) {
            if (data['code']==200){
                var femalenameArr = data['data'].slice(0,5)
            $.each(femalenameArr, function(i, order){
                $orders.append('<li>' + i + order['femalename'] + '</li>');
            });            
            }else{
                console.log(data['msg'])
            }
        }

    });
});