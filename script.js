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
const translations = {
  ku: {
    title: "بەخێربێن بۆ C23NCH SHOP",
    desc: "باشترین جلوبەرگ بە کوالێتی بەرز."
  },
  en: {
    title: "Welcome to C23NCH SHOP",
    desc: "Premium quality fashion with fast delivery."
  },
  ar: {
    title: "مرحباً بكم في C23NCH SHOP",
    desc: "أفضل الملابس بجودة عالية مع توصيل سريع."
  }
};

function changeLanguage(lang) {
  document.getElementById("title").textContent = translations[lang].title;
  document.getElementById("desc").textContent = translations[lang].desc;

  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar" || lang === "ku") ? "rtl" : "ltr";

  localStorage.setItem("language", lang);
}

window.onload = () => {
  const savedLang = localStorage.getItem("language") || "ku";
  changeLanguage(savedLang);
};
