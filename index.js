$(window).scroll(function() {
    var scrollh = $(this).scrollTop();
    if (scrollh < 1) {
        $('body').stop().removeClass('small'); 

    }
    else if (scrollh == 1){
        $('body').stop().addClass('small');  
        $('body').css('overflow', 'hidden');
        setTimeout(function(){
            $('body').css('overflow', 'scroll');
        }, 1000);
    }
    else if (scrollh => 1){
        $('body').stop().addClass('small');  

    }
});
