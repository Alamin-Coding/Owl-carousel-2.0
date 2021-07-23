
$(function(){
    $(".owl-carousel").owlCarousel({
        items:4,
        margin:15,
        touchDrag:true,
        // center:true,
        loop:true,
        autoplayTimeout:1000,
        autoplay:true,
        autoplayHoverPause:true,
        nav:true,
        dots:true,
        navText:['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:3,
            },
            993:{
                items:4,
            }
        }
    });
    
})  