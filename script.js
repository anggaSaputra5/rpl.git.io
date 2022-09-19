let brpl = document.querySelector(".b-rpl");
let bskensa = document.querySelector(".b-skensa");
let rpl = document.querySelector(".rpl");
let skensa = document.querySelector(".skensa");
let nilai = 0;
let value = 0;

brpl.addEventListener("click", function(){
    if(nilai == 0){
        rpl.style.marginLeft = "0";
        nilai = 1;
    }
    else{
        rpl.style.marginLeft = "-300%";
        nilai = 0;
    }
});
bskensa.addEventListener("click", function(){
    if(value == 0){
        skensa.style.marginLeft = "0";
        value = 1;
    }
    else{
        skensa.style.marginLeft = "300%";
        value = 0;
    }
});