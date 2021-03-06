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
    const $init = $('.js-show-sheet');
    const obj = '.js-sheet';
    const $close = $('.js-hide-sheet');
    let isOpened = sessionStorage.getItem('sheet');

    if ($init[0] && !isOpened) {
        var tl = TweenLite.to(obj, 0.5, {
            ease: Power4.easeOut,
            delay: 3,
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

        sessionStorage.setItem('sheet', true);
    };
};
showPriceInfo();



/* readmore click to hide additional info
to reduce cognitive load */
// ------------------------------------------------------------
function readMore() {
    const obj = $('.js-readmore');

    if (obj[0]) {
        obj.each(function () {
            const btn = $('.js-readmore-btn', this);
            const li = $('.js-readmore-li', this);

            btn.show();
            $(li).slice(3).hide();

            btn.click(() => {
                $(li).slice(3).slideDown(200);
                btn.hide(100);
            });
        });
    };
};
readMore();



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