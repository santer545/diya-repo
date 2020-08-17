const hamburger = document.getElementById('nav-icon2');
const header = document.querySelector('.js-header-nav')

if (hamburger) {
    hamburger.addEventListener("click", function () {
        this.classList.toggle("open");
        header.classList.toggle("active")
    })
}

var slider = tns({
    container: '.js-top-banner',
    items: 1,
    slideBy: 'page',
    autoplay: false
});

var sliderGallery = tns({
    container: '.js-gallery',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    responsive: {
        700: {
            items: 3,
            gutter: 30
        },
    }
});

$.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};

$("[type='tel']").mask("(999) 999-9999");