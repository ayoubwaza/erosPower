$(document).ready(function() {
    /*$('.pre_toform').click(function () {
        $("html, body").animate({scrollTop: $('#order_form').offset().top}, 1000);
        return false;
    });*/


    $('.review-slider').slick({
        arrows: true,
        dots: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    if (window.innerWidth > 991) {
        // Accepts the id of the container, and the classname that all three elements share
        var ThreeDCarousel = function(el, classname) {
            var element = document.getElementById(el);
            var items = element.getElementsByClassName(classname);
            var classNames = ['two', 'three', 'one'];
            if (items.length !== 3) {
                alert('ThreeDCarousel only supports 3 items.');
                return false;
            } else {
                for (var i = 0; i < 3; i++) {
                    items[i].className += " " + classNames[i];
                }
            }

            var obj = {
                element: element,
                items: items,
                prev: function() {
                    var l = this.element.getElementsByClassName('one')[0],
                        c = this.element.getElementsByClassName('two')[0],
                        r = this.element.getElementsByClassName('three')[0];
                    l.classList.remove('one');
                    l.classList.add('two');
                    c.classList.remove('two');
                    c.classList.add('three');
                    r.classList.remove('three');
                    r.classList.add('one');
                },
                next: function() {
                    var l = this.element.getElementsByClassName('one')[0],
                        c = this.element.getElementsByClassName('two')[0],
                        r = this.element.getElementsByClassName('three')[0];
                    l.classList.remove('one');
                    l.classList.add('three');
                    c.classList.remove('two');
                    c.classList.add('one');
                    r.classList.remove('three');
                    r.classList.add('two');
                }
            };
            return obj;
        };

        var carousel = new ThreeDCarousel('carousel', 'item');

        var auto = setInterval(function() { carousel.next(); }, 4000);


        // var next = document.getElementById('next');
        // next.onclick = carousel.next.bind(carousel);
        //
        // var prev = document.getElementById('prev');
        // prev.onclick = carousel.prev.bind(carousel);
    };



    var flag = 0;
    if (window.innerWidth <= 991 && flag === 0) {
        flag = 1;
        $('#carousel').slick({
            infinite: true,
            slidesToShow: 1,
            arrows: false,
            dots: true,
            fade: true,
            autoplay: true,
            autoplaySpeed: 3000,
        });

    };
    $(window).on('resize', function (event) {
        if (event.target.innerWidth <= 991 && flag === 0) {
            flag = 1;
            $('#carousel').slick({
                infinite: true,
                slidesToShow: 1,
                arrows: false,
                dots: true,
                fade: true,
                autoplay: true,
                autoplaySpeed: 3000,
            });

        }
        else if (event.target.innerWidth > 991 && flag === 1) {
            flag = 0;
            $('#carousel').slick('unslick');
        }
    });
    

});

$(".pre_toform").on("click", function () {
    return $("html, body").animate({
        scrollTop: $("#order_form").offset().top
    }, 700), !1
});