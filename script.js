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
document.addEventListener("DOMContentLoaded", function() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');

    if (!searchBtn || !searchInput) return;

    searchBtn.addEventListener('click', function() {
        if (searchInput.style.display === 'none' || searchInput.style.display === '') {
            searchInput.style.display = 'inline-block';
            searchInput.focus();
        } else {
            searchInput.style.display = 'none';
            searchInput.value = '';
            filterProducts('');
        }
    });

    // فەنکشنێک بۆ چارەسەرکردنی کێشەی پیتە کوردی و عەرەبییەکان
    function normalizeText(text) {
        if (!text) return '';
        return text.replace(/ي/g, "ی").replace(/ك/g, "ک").replace(/أ/g, "ا").replace(/إ/g, "ا");
    }

    searchInput.addEventListener('input', function() {
        let filterText = normalizeText(searchInput.value.toLowerCase().trim());
        filterProducts(filterText);
    });

    function filterProducts(filterText) {
        let products = document.querySelectorAll('.product-card'); 

        products.forEach(function(product) {
            // بەکارهێنانی textContent لەبری innerText بۆ ئەوەی هیچ نووسینێک لێی دەرباز نەبێت
            let productText = normalizeText(product.textContent.toLowerCase());
            
            // ئەگەر نووسینەکە بەتاڵ نەبوو (واتە شتێک سێرچ کرا)
            if (filterText !== "") {
                if (productText.includes(filterText)) {
                    product.style.display = ''; 
                } else {
                    product.style.display = 'none'; 
                }
            } else {
                // ئەگەر بۆشایی سێرچەکە بەتاڵ بوو، هەموو کاڵاکان پیشان بدەرەوە
                product.style.display = ''; 
            }
        });
    }
});