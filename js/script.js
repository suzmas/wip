$(document).ready(function(){
    $(this).scrollTop(0);
});

navigator.sayswho= (function(){
    var ua= navigator.userAgent, tem,
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\bOPR\/(\d+)/)
        if(tem!= null) return 'Opera '+tem[1];
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
})();

$('.carousel').carousel('pause');

$(window).load(function() {
    $("body").removeClass("preload");
});

var device = Detect();
if (device=='smartphone') {
    $('body').addClass('mobile');
}

if (device=='desktop') {
    $('body').addClass('computer');
}

if (device=='tablet') {
    $('body').addClass('mobile');
}

$(window).resize(function() {
    //$('header.fullscreen').css('height',$(window).height());
    //$('.text-contact').css('height',$(window).height()-73);
});
//$('header.fullscreen').css('height',$(window).height());
//$('.text-contact').css('height',$(window).height()-73);

$(window).scroll(function(event) {
    if ($(window).scrollTop()>=130) $('#btn-menu').addClass('top');
    else $('#btn-menu').removeClass('top');
});


if ((device=='desktop')||(device=='tablet')) {
    var wow = new WOW(
        {
            boxClass:     'animate',      // default
            animateClass: 'animated', // default
            offset:       250,          // default
            mobile:       false,       // default
            live:         true        // default
        }
    )
    wow.init();
}


(function() {
    var triggerBttn = document.getElementById( 'btn-menu' ),
        overlay = document.querySelector( 'div.overlay' ),
        transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        },
        transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
        support = { transitions : Modernizr.csstransitions };

    function toggleOverlay() {
        if( classie.has( overlay, 'open' ) ) {
            classie.remove( overlay, 'open' );
            classie.add( overlay, 'close' );
            var onEndTransitionFn = function( ev ) {
                if( support.transitions ) {
                    if( ev.propertyName !== 'visibility' ) return;
                    this.removeEventListener( transEndEventName, onEndTransitionFn );
                }
                classie.remove( overlay, 'close' );
            };
            if( support.transitions ) {
                overlay.addEventListener( transEndEventName, onEndTransitionFn );
            }
            else {
                onEndTransitionFn();
            }
        }
        else if( !classie.has( overlay, 'close' ) ) {
            classie.add( overlay, 'open' );
        }
    }

    triggerBttn.addEventListener( 'click', toggleOverlay );
})();

$('#btn-menu').click(function(){
    if(!$(this).hasClass('open')) {
        $(this).addClass("open");
    }
    else {
        $(this).removeClass('open');
    }
    return false;
});

paceOptions = {
  ajax: false, // disabled
  document: false, // disabled
  eventLag: false, // disabled
  elements: {
    selectors: ['.my-page']
  }
};

$(document).ready(function() {
    $('nav a, .btn-oeuvres .btn').click(function() {
        $(window).scrollTop(0);
        $('body').addClass('animOut');
        var url = $(this).attr('href');

        setTimeout(function(){
            document.location.href = url;
        },1000);

        return false;
    });
});

$('nav a.bg-blue').click(function(){
    $('body').addClass('bg-blue');
});

$('nav a.bg-orange').click(function(){
    $('body').addClass('bg-orange');
});

$('nav a.bg-green, .btn-oeuvres .btn').click(function(){
    $('body').addClass('bg-green');
});

function getInfo(id, largeur, hauteur, profondeur){
    var element = $(".thumb[rel='"+id+"']");
    var target = $(".oeuvre");
    var title = element.find("h2").html();
    var desc = element.find("p").html();
    target.find("h2").html(title);
    target.find("p").html(desc);


    $(".oeuvre .item").each(function(){
        var index = $(this).index();
        var path = "/real/oeuvres-"+id+"/image-"+(index+1)+".jpg";
        $(this).find("img").attr("src", path);
    });

    $(".largeur").text(largeur);
    $(".hauteur").text(hauteur);
    $(".profondeur").text(profondeur);
}

$(".toggle").click(function(){
    var id = $(this).attr("rel");
    var largeur = $(this).attr("data-largeur");
    var profondeur = $(this).attr("data-profondeur");
    var hauteur = $(this).attr("data-hauteur");
    //console.log(largeur);
    getInfo(id, largeur, hauteur, profondeur);

    $('html, body').animate({
        scrollTop:$('.wrap-info').offset().top - 30
    }, 1000);

    setTimeout(
    function(){
        $('.row-real').slideUp();

    }, 1000);

    $('.oeuvre').slideDown();

    setTimeout(
    function(){
        $('.oeuvre .animate-description').addClass('active');
    }, 1400);

    setTimeout(
    function(){
        $('.oeuvre .orange-box .hover').addClass('show');
    }, 1200);
    $('#carousel-fiche').carousel(1);
});


$('.oeuvre .btn-back').click(function(){
    setTimeout(
    function(){
        $('.animate-description').removeClass('active');
    }, 1000);
    $(".orange-box .hover").removeClass('show');
    $(".thumb .hover").addClass('hide');
    $(this).parent().parent().parent().slideUp();
    setTimeout(
    function(){
        $('.row-real').slideDown();
        $('html, body').animate({
            scrollTop:$('.row-real').offset().top - 30
        }, 600);
    }, 600);

    $('#carousel-fiche').carousel(1);
});


if($('.contactForm').length) {
    $('.contactForm').click(function(){$('input[name=nobot]').val('nobot');});
    $('.contactForm').keypress(function(){$('input[name=nobot]').val('nobot');});
    $('.contactForm').submit(function(event){
        var form = $(this);
        var elms = $('.contactForm input, .contactForm textarea');
        elms.each(function(){
            if($(this).val()=='') {
                alert("Veuillez remplir tous les champs."+$(this).attr('name'));
                event.preventDefault();
                return false;
            }
        });
        $.post('/contact.php', form.serializeArray(), function(response){
            if(response.error) {
                alert(response.message);
            } else {
                form.fadeOut();
                $('.formSent').fadeIn();
            }
        });
        event.preventDefault();
        return false;
    });
}
