const shippingToggle=document.getElementById("shippingToggle");
const shippingContent=document.getElementById("shippingContent");
const shippingArrow=document.getElementById("shippingArrow");

shippingToggle.onclick=function(){

shippingContent.classList.toggle("show");

shippingArrow.classList.toggle("fa-chevron-down");
shippingArrow.classList.toggle("fa-chevron-up");

}

const shippingSearch=document.getElementById("shippingSearch");

shippingSearch.addEventListener("keyup",function(){

let value=this.value.toLowerCase();

document.querySelectorAll(".shipping-city").forEach(city=>{

city.style.display=city.innerText.toLowerCase().includes(value)
?"flex":"none";

});

});
function sendToWhatsApp(event) {
    event.preventDefault(); // ڕاگرتنی ڕیفرێشی پەڕەکە

    // 1. ژمارەی واتسئاپەکەت (بە کۆدی وڵاتەوە)
    const myPhoneNumber = "9647830528464"; 

    // 2. وەرگرتنی زانیارییەکان بە شێوەی پارێزراو (ئەگەر elementەکە نەبوو، کێشە دروست ناکات)
    const getValue = (id) => {
        const el = document.getElementById(id);
        return el ? el.value : '';
    };

    const name = getValue('name');
    const phone = getValue('phone');
    const instagram = getValue('instagram') || 'نییە';
    const product = getValue('product');
    const city = getValue('city');
    const address = getValue('address');
    const notes = getValue('notes') || 'نییە';

    // 3. دروستکردنی پەیامەکە
    const message =' کڕیارێکی نوێ داواکاری هەیە! 🛒\n\n' +
                     ⁠`⁠*ناو:* ${name}\n +⁠`⁠
                     ⁠`⁠*ژمارەی مۆبایل:* ${phone}\n +⁠`⁠
                     ⁠`⁠*ئینستاگرام:* ${instagram}\n +⁠`⁠
                     ⁠`⁠*کاڵا:* ${product}\n +⁠`⁠
                     ⁠`⁠*شار:* ${city}\n +⁠`⁠
                     ⁠`⁠*ناونیشانی تەواو:* ${address}\n +⁠`⁠
                    ⁠`⁠ *تێبینی:* ${notes};⁠`⁠

    // 4. ناردن بۆ واتسئاپ
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = ⁠`⁠https://wa.me/${myPhoneNumber}?text=${encodedMessage}⁠⁠`⁠⁠;

    window.open(whatsappURL, '_blank');
}