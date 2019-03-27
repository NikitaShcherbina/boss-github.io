$(document).ready(function(){
	$(window).on('scroll', function() {
        if ($(".nav").offset().top > 1) {
            $(".nav").css({"background": "black", "padding-top": "15px"});
            scrollTop: 1000
        } else {
            $(".nav").css({"background": "", "padding-top": ""});
        }
    });
    new WOW().init();
    var carousel = $("#carousel");
    carousel.owlCarousel({
    items: 1,
    navigation : true,
    navigationText : [" "," "],
    itemsDesktop:      [1400, 1],
    itemsDesktopSmall: [900, 1],
    itemsTablet:       [770, 1],
    itemsMobile:       [768, 1],
    });
    $('#carousel3').slick({
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 1,
              }
        }]
    });



    $(function(){
    
        var note = $('#note'),
            ts = new Date(2018, 0, 1);
        
        if((new Date()) > ts){
            // Задаем точку отсчета для примера. Пусть будет очередной Новый год или дата через 10 дней.
            // Обратите внимание на *1000 в конце - время должно задаваться в миллисекундах
            ts = (new Date()).getTime() + 14*24*60*60*1000;
        }
            
        $('#countdown').countdown({
            timestamp   : ts,
            callback    : function(days, hours, minutes, seconds){
                
            }
        });
        
    });
    /*$("button").hover(function(){
        $(this).removeClass("anim-button");
    });*/
    $(".form-trigger, .mint-btn").mouseout(function(){
        $(this).addClass("anim-button");
        setTimeout(function(){ $("button").removeClass("anim-button"); }, 200);
    });

    /*var i = 2;
    var css1 = "scale("+i+")";
    $(".carousel-cont").css("transform", css1);*/

    var i = 2;
    var a = $('.carousel-cont').length;
    $("#carousel3 .owl-next").click(function(){
        if (i < a-1){
            $("#carousel3 .owl-item:nth-child("+i+")").css("transform", "scale(0.8)");
            i++;
            $("#carousel3 .owl-item:nth-child("+i+")").css("transform", "scale(1)");
        } else {
            $("#carousel3 .owl-item:nth-child("+i+")").css("transform", "scale(0.8)");
            i = 2;
            $("#carousel3 .owl-item:nth-child("+i+")").css("transform", "scale(1)");
        }
    });
    $("#carousel3 .owl-prev").click(function(){
        if (i > 2){
            $("#carousel3 .owl-item:nth-child("+i+")").css("transform", "scale(0.8)");
            i--;
            $("#carousel3 .owl-item:nth-child("+i+")").css("transform", "scale(1)");
        } else {
            $("#carousel3 .owl-item:nth-child("+i+")").css("transform", "scale(0.8)");
            i = a-1;
            $("#carousel3 .owl-item:nth-child("+i+")").css("transform", "scale(1)");
        }
    });
    $("#carousel3 .owl-item:nth-child(2)").css("transform", "scale(1)");
    $(".owl-prev").addClass("wow fadeInRight");
    $(".owl-next").addClass("wow fadeInLeft");

    $('.show-menu-btn').on('click', function() {
        $(this).toggleClass('open');
        $(".nav-mobile").toggleClass("active");
        $(".nav-mobile li").toggleClass("wow fadeInLeft")
        return false;
    });

        $(".nav, .nav-mobile").on("click","a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();

            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
            
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);
        });

    $('.form-trigger').on('click', function() {
        $(this).toggleClass('is-clicked');
        $('.popup-forma').toggleClass('is-active');
        return false;
    });
    $('.popup-close').on('click', function() {
        $('.form-trigger').removeClass('is-clicked');
        $('.popup-forma').removeClass('is-active');
        return false;
    });
    $('.popup-forma__cover').on('click', function() {
        $('.form-trigger').removeClass('is-clicked');
        $('.popup-forma').removeClass('is-active');
        return false;
    });
    $(window).keydown(function(e) {
        if ($('.popup-forma').hasClass('is-active')) {
            if (e.which === 27) {
                $('.form-trigger').removeClass('is-clicked');
                $('.popup-forma').removeClass('is-active');
            }
        }
    });

    $(function() {
    $("[data-fancybox]").fancybox();
    });

});

$(document).ready(function(){

    window.onload=function(){
        /*a = $("#carousel .owl-item").width();
        b = $("#carousel .owl-item").height();
        $("#carousel .carousel-element").width(a).height(b);*/

        c = $(".carousel2").width();
        d = $("#carousel").height();
        e = $("#carousel2").height();
        $("#carousel2").width(c).height(d - +40);
        $("#carousel2 .carousel-element").height(e - +40);
        $("#carousel2 .carousel-element").height(d - +40);

        $("#carousel2 .owl-next").click(function(){
            if ($(".carousel2").css("transform", "translatey" == "0px")) {
                $(".carousel2").css("transform", "translatey(-50%)");
            }
        });
        $("#carousel2 .owl-prev").click(function(){
            if ($(".carousel2").css("transform", "translatey" == "-50%")) {
                $(".carousel2").css("transform", "translatey(0px)");
            }
        });
    };
});