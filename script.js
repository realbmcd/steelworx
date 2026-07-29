window.addEventListener("scroll", function(){

const header=document.querySelector("header");

if(window.scrollY > 50){

header.style.background="#070707";
header.style.borderBottom="1px solid #222";

}

else{

header.style.background="transparent";
header.style.borderBottom="none";

}

});