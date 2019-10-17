// myInterval = setInterval(function(){
//     console.log(new Date());
// },1000);
//  鼠标移入暂停滚动 鼠标移出继续滚动

$(function(){
    var width = 1024;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;
    // cache DOM
    var $slider = $('#slider');
    var $sliderContainer = $slider.find('.slides');
    var $slides = $sliderContainer.find('.slide');

    var interval;
    // 注意这里是全局变量 函数内也是 如果函数内用var则说明使用了局部变量
    function startSlide(){
        interval = setInterval(
            function slide(){
                $sliderContainer.animate({"margin-left": '-='+width}, animationSpeed, function(){
                    currentSlide++;
                    if(currentSlide === $slides.length){
                        currentSlide = 1;
                        $sliderContainer.css('margin-left', 0); 
                    }
                });
            }, pause)        
    }

    function stopSlider(){
        clearInterval(interval);
    }
    $slider.on('mouseenter', stopSlider).on('mouseleave', startSlide);
    startSlide();
    
});
