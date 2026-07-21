// Slider
const swipers = document.querySelectorAll(".productSwiper");

swipers.forEach((swiper) => {
    new Swiper(swiper, {
        loop: true,

        spaceBetween: 10,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        pagination: {
            el: swiper.querySelector(".swiper-pagination"),
            clickable: true,
        },

        effect: "slide",

        speed: 700,
    });
});


// Favorite Button ❤️

const favorites = document.querySelectorAll(".favorite");

favorites.forEach(btn => {

    btn.addEventListener("click", () => {

        btn.classList.toggle("active");

    });

});

