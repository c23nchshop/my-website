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

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("expandedImg");
    const closeBtn = document.getElementById("closeBtn");

    // گەڕان بەدوای هەموو وێنەکانی ناو سلایدەکان یان کاڵاکان
    const productImages = document.querySelectorAll(".product-card img");

    productImages.forEach(function(img) {
        img.style.cursor = "pointer"; // نیشانەی ماوس دەگۆڕێت بۆ دەست کاتێک دەچێتە سەر وێنەکە
        img.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = this.src; // وێنەی کراوە دەگوێزێتەوە بۆ پەنجەرە گەورەکە
        });
    });

    // داخستنی پەنجەرەکە کاتێک کلیک لە (X) دەکرێت
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // داخستنی پەنجەرەکە ئەگەر کڕیار لە دەرەوەی وێنەکەش کلیک بکات
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});