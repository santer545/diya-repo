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