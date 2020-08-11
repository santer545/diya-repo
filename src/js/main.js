const hamburger = document.getElementById('nav-icon2');

if(hamburger) {
    hamburger.addEventListener("click", function() {
        this.classList.toggle("open")
    })
}

var slider = tns({
    container: '.js-top-banner',
    items: 1,
    slideBy: 'page',
    autoplay: false
  });