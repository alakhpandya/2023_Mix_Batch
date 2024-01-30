$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    items:1,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause:true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut'
    // dots:false 
})