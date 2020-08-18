const hamburger = document.getElementById("nav-icon2");
const header = document.querySelector(".js-header-nav");

if (hamburger) {
    hamburger.addEventListener("click", function () {
        this.classList.toggle("open");
        header.classList.toggle("active");
    });
}

var slider = tns({
    container: ".js-top-banner",
    items: 1,
    slideBy: "page",
    autoplay: false,
});

var sliderGallery = tns({
    container: ".js-gallery",
    items: 1,
    slideBy: "page",
    autoplay: false,
    responsive: {
        700: {
            items: 3,
            gutter: 30,
        },
    },
});

$.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
    }
};

$("[type='tel']").mask("(999) 999-9999");

$(".js-anchor a")
    .not('[href="#"]')
    .not('[href="#0"]')
    .not('[href^="#tab"]')
    .click(function (event) {
        event.preventDefault();

        // On-page links
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            let headerHeight = $(".header").height();
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    300,
                    function () {
                        var $target = $(target);
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            // $target.focus(); // Set focus again
                        }
                    }
                );
            }
        }
    });
