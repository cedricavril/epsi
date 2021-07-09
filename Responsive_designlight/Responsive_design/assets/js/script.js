window.onscroll = function(){

    scrollToTop();
    sticky();
};

$(document).ready(function(){

    $(".next").click(function() {
        $('html,body').animate({ scrollTop:$(this).parent().next().offset().top}, 'slow');});

    $(document).ready(function(){

        $('#retourHaut').click(function(){

            $('html, body').animate({scrollTop: 0},1000);

        });
    });

    var trigger = $("#hamburger"),
        isClosed = false;

    trigger.click(function() {

        burgerTime();
    });

    function burgerTime() {

        if (isClosed == true) {

            trigger.removeClass("is-open");
            trigger.addClass("is-closed");
            $('header').removeClass('display_navresp');
            $('body').css('overflow-y', 'auto');
            isClosed = false;

        } else {

            trigger.removeClass("is-closed");
            trigger.addClass("is-open");
            $('header').addClass('display_navresp');
            $('body').css('overflow-y', 'hidden');
            isClosed = true;
        }
    }
});

function scrollToTop() {

    document.querySelector("#retourHaut").className = (document.querySelector('html').scrollTop > 200 || document.querySelector('body').scrollTop > 200) ? "visible" : "invisible";
}

function sticky() {

    let nav = document.querySelector("nav"), stickette = 200;
    if (window.pageYOffset >= stickette) {

        nav.classList.add("sticky");

    } else {

        nav.classList.remove("sticky");
    }
}

$(document).ready(function(){
    $.post(url, json, function(data, status){
        if(status == 'success'){

        } ;
        if (status == '') {

        }
    })

});