
//$(function () {
//    initVideoBg();
//});

//Adjust video height and width
var initVideoBg = function () {

    resizeVideoBg();
    $(window).resize(resizeVideoBg());

}
var resizeVideoBg = function () {
    var w = $(window).width(),
        h = $(window).height();
    $('#video-block video').css({ height: '' + h + '', width: '' + w + '' });
}

//alert('hi');

//$(function () {
//    var outerDiv = $('#video-block');
//    var videoTag = outerDiv.find('video');
//    $(window).resize(resize);
//    resize();
//    function resize() {
//        var width = outerDiv.width();
//        var height = outerDiv.height();
//        var aspectW = 16;
//        var aspectH = 9;
//        var scaleX = width / aspectW;
//        var scaleY = height / aspectH;
//        var scale = Math.max(scaleX, scaleY);
//        var w = Math.ceil(aspectW * scale);
//        var h = Math.ceil(aspectH * scale);
//        var x = 0;
//        var y = 0;
//        if (w > width) x = -(w - width) * 0.5;
//        if (h > height) y = -(h - height) * 0.5;
//        videoTag.css({
//            width: w,
//            height: h,
//            top: y,
//            left: x
//        });
//    }
//});

// jQuery to collapse the navbar on scroll
$(window).scroll(function () {
    if ($('.navbar').offset().top > 50) {
        $('.navbar-fixed-top').addClass('top-nav-collapse');
    } else {
        $('.navbar-fixed-top').removeClass('top-nav-collapse');
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $(window).resize(resize);
    resize();
    //initVideoBg();

    if ($('.navbar').offset().top === 0) {
        $('.navbar-fixed-top').removeClass('top-nav-collapse');
    } else {
        $('.navbar-fixed-top').addClass('top-nav-collapse');
    }

    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate(
            { scrollTop: $($anchor.attr('href')).offset().top },
            1000, 'easeInOutExpo');
        event.preventDefault();
    });


    $('#anthenIntro').viewportChecker({
        classToAdd: 'viewportShow fadeInRight',
        offset: 100
    });
    $('#anthenLable').viewportChecker({
        classToAdd: 'viewportShow fadeInLeft',
        offset: 100
    });

    $('#bCurrentImg').viewportChecker({
        classToAdd: 'viewportShow fadeInLeftBig',
        offset: 100
    });
    $('#bCurrentIntro').viewportChecker({
        classToAdd: 'viewportShow fadeInRightBig',
        offset: 100
    });

    $('#blackcurrentIntro').viewportChecker({
        classToAdd: 'viewportShow fadeInUp',
        offset: 100
    });


});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});


function resize() {

    var outerDiv = $('#video-block');

    var width = outerDiv.width();
    var height = outerDiv.height();
    var aspectW = 16;
    var aspectH = 9;
    var scaleX = width / aspectW;
    var scaleY = height / aspectH;
    var scale = Math.max(scaleX, scaleY);
    var w = Math.ceil(aspectW * scale);
    var h = Math.ceil(aspectH * scale);
    var x = 0;
    var y = 0;
    if (w > width) x = -(w - width);
    if (h > height) y = -(h - height);

    var videoTag = outerDiv.find('video');
    videoTag.css({
        width: w,
        height: h,
        top: y,
        left: x
    });

    $('#btnContactUs').click(function () {
        $.ajax({
            url: 'http://anthenapi.azurewebsites.net/api/values',
            cache: false,
            //dataType: 'json',
            dataType: 'json',
            //type: 'POST',
            data: {
                name: $('#name').val(),
                phone: $('#phone').val(),
                email: $('#email').val(),
                message: $('#message').val(),
            },
            success: function (data) {
                if (data.isOk) {
                    alert(data.name);
                }
                //else {
                //}
            },
            fail: function () {
                alert('fail');
            },
            error: function (a, b, c) {
                alert('error: ' + a.error);
            },
            complete: function () {
                $('#addrSearch').removeClass('loading20 loadingRight');
            }
        });
    });

}

