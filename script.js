const sbtn =document.querySelector(".s-btn");
const sinput =document.querySelector(".s-input");
const qrimag=document.querySelector(".qr-imag");
sbtn.addEventListener("click" , ()=>{
    qrimag.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${sinput.value}`;
})
