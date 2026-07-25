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