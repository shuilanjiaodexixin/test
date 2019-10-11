$(function(){
    $('.tab-panels .tabs li').on('click',function(){
        // 找出要现实的面板
        var $panel = $(this).closest('.tab-panels')
        $panel.find('.tabs li.active').removeClass('active');
        $(this).addClass('active');
        var panelToShow = $(this).attr('rel');
        
        // 隐藏当前面板
        $panel.find('.panel.active').slideUp(300, function(){
                $(this).removeClass('active');
            $('#'+panelToShow).slideDown(300, function(){
                $(this).addClass('active');
            });
        });

        // JQ几乎可以在任何事件末尾添加函数 这就是等函数执行完再执行 回调函数
        // 显示当前面板
        // 不在函数里重复写之前的选择器
    });
});