$(function () {
    $('#ham').on('click', function(){
        $('.top').toggleClass('clicked');
        $('.middle').toggleClass('clicked')
        $('.bottom').toggleClass('clicked')
        $('.menu').toggleClass('show');

    });
   
})
