if(document.querySelector('.js-place-carousel')) {
    var slider = tns({
        container: '.js-place-carousel',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        preventScrollOnTouch: 'auto',
        mouseDrag: true,
        prevButton: document.querySelector('.prev-btn'),
        nextButton: document.querySelector('.next-btn'),
    });
}


