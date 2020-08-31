const hamburger = document.getElementById("nav-icon2");
const header = document.querySelector(".js-header-nav");
const body = document.querySelector("body");

if (hamburger) {
    hamburger.addEventListener("click", function () {
        this.classList.toggle("open");
        body.classList.toggle("menu-open");
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

$("#subscribe_modal").on("shown.bs.modal", function () {
    $(".js-header-nav").removeClass("active");
    $("#nav-icon2").removeClass("open");
});

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
                if ($(".js-header-nav").length && $("#nav-icon2").length) {
                    $(".js-header-nav").removeClass("active");
                    $("#nav-icon2").removeClass("open");
                }
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

(function ($) {
    "use strict";

    var form = $(".contact__form"),
        message = $(".contact__msg"),
        form_data;

    // Success function
    function done_func(response) {
        message.fadeIn().removeClass("alert-danger").addClass("alert-success");
        message.text("Ваши данные успешно отправлены");
        // message.text(response);
        setTimeout(function () {
            message.fadeOut();
            $("#subscribe_modal").modal("hide");
        }, 2000);
        form.find('input:not([type="submit"]), textarea').val("");
    }

    // fail function
    function fail_func(data) {
        message.fadeIn().removeClass("alert-success").addClass("alert-success");
        message.text("Произошла ошибка на сервере. Попробуйте еще раз");
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
    }

    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        console.log(form_data);
        if (validate(form)) {
            $.ajax({
                type: "POST",
                url: form.attr("action"),
                data: form_data,
            })
                .done(done_func)
                .fail(fail_func);
        }
    });
})(jQuery);
