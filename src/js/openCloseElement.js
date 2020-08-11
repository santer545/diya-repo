window.onload = function () {
    openMenu(".js-open-btn", ".js-header-nav");
    closeMenu(".js-close-btn", ".js-header-nav");
};

function openMenu(btn, openElement) {
    const openBtn = document.querySelector(btn);
    const menu = document.querySelector(openElement);

    if (openBtn != null && menu != null) {
        openBtn.addEventListener("click", function () {
            menu.classList.add("active");
        });
    }
}

function closeMenu(btn, closeElement) {
    const closeBtn = document.querySelector(btn);
    const menu = document.querySelector(closeElement);

    if (closeBtn != null && menu != null) {
        closeBtn.addEventListener("click", function () {
            menu.classList.remove("active");
        });
    }
}

window.addEventListener('click', function (e) {
    if (document.querySelector('.js-header-nav').contains(e.target) || document.querySelector('.js-open-btn').contains(e.target)) {
        // Clicked in box
    } else {
        document.querySelector('.js-header-nav').classList.remove('active');
    }
});
