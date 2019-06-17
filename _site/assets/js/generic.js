// global vars
// ------------------------------------------------------------
// ------------------------------------------------------------
var vw = Number;
var vh = Number;
var mobile = Boolean;



// update screen height
// ------------------------------------------------------------	
function updateWindowSize() {
    vw = $(window).innerWidth();
    vh = $(window).innerHeight();

    // set breakpoints
    if (vw > 912) {
        mobile = false;
    } else {
        mobile = true;
    };
};
updateWindowSize();

// update when resizing
$(window).resize(function () {
    updateWindowSize();
});



// basic functions
// ------------------------------------------------------------
function toggle() {
    var obj = $(".js-toggle");
    if (obj[0]) {
        obj.click(function () {
            $(this).toggleClass("is-active");
        });
    };
};

function radio() {
    var obj = $(".js-radio");
    if (obj[0]) {
        obj.click(function () {
            obj.removeClass("is-active");
            $(this).toggleClass("is-active");
        });
    };
};

function clearSession() {
    var obj = $(".js-clear-session");
    if (obj[0]) {
        obj.click(function () {
            sessionStorage.clear();
        });
    };
};
$(function () {
    toggle();
    radio();
    clearSession();
});



// show price info
// ------------------------------------------------------------
function showPriceInfo() {
    const $init = $('.js-show-price-info');
    const obj = '.js-price-info';
    const $close = $('.js-hide-price-info');
    let isOpened = sessionStorage.getItem('price-info');

    if ($init[0]) {
        if (!isOpened) {
            var tl = TweenLite.to(obj, 0.5, {
                ease: Power4.easeOut,
                delay: 2,
                opacity: 1,
                y: '0%',
                x: '0%',
                display: 'block'
            });

            $close.click(() => {
                tl.reverse().timeScale(1.5);
            });

            if (mobile) {
                $(document).click(function (e) {
                    if (!$(e.target).closest(obj).length) {
                        tl.reverse().timeScale(1.5);
                    }
                });
            };
            sessionStorage.setItem('price-info', true);
        };
    }
};
showPriceInfo();



// preloader
// ------------------------------------------------------------	
function loader() {
    var loader = ".js-loader";
    var content = ".js-loaded";

    if (loader[0]) {
        // init loader view
        TweenLite.to(loader, 0.1, {
            opacity: 1
        });

        // load website
        window.addEventListener("load", function () {
            TweenLite.to(loader, 0.3, {
                delay: 0.7,
                ease: Power3.easeInOut,
                autoAlpha: 0,
                display: "none",
                onComplete: function () {
                    TweenLite.set(content, {
                        display: "block",
                    });
                }
            });
        });
    };
};
loader();