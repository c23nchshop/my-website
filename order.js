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