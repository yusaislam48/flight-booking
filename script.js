// firstClass Plus Btn 
const fClassPlusBtn = document.getElementById("fClassPlusBtn");
fClassPlusBtn.addEventListener('click', function(){
    quantityPlus("fClassQuantity");
    subTotalVatTotal();
    
})
// firstClass Minus Btn 
const fClassMinusBtn =  document.getElementById("fClassMinusBtn");
fClassMinusBtn.addEventListener("click", function(){
    quantityMinus("fClassQuantity");
    subTotalVatTotal();
})

// economyClass Plus Btn 
const eClassPlusBtn = document.getElementById("eClassPlusBtn");
eClassPlusBtn.addEventListener('click', function(){
    quantityPlus("eClassQuantity");
    subTotalVatTotal();
    
})
// economyClass Minus Btn 
const eClassMinusBtn = document.getElementById("eClassMinusBtn");
eClassMinusBtn.addEventListener('click', function(){
    quantityMinus("eClassQuantity");
    subTotalVatTotal();
    
})





function getQtyNumber(id){
    const quantity = document.getElementById(id).value;
    const quantityNumber = parseFloat(quantity);
    return quantityNumber;
}
function quantityPlus(id){
    const quantityNumber = getQtyNumber(id);
    document.getElementById(id).value = quantityNumber + 1;
    return quantityNumber;
}
function quantityMinus(id){
    const quantityNumber = getQtyNumber(id);
    if (quantityNumber <= 0) {
        document.getElementById(id).value = 0;
     }
     else{
        document.getElementById(id).value = quantityNumber - 1;
     }
     return quantityNumber;
}

function subTotalVatTotal(){
    const fClassQuantity = getQtyNumber("fClassQuantity");
    const eClassQuantity = getQtyNumber("eClassQuantity");
    const subTotal = fClassQuantity * 150 + eClassQuantity * 100;
    document.getElementById("subTotal").innerText = subTotal;
    const vat = subTotal * 10 / 100;
    document.getElementById("vat").innerText = vat;
    var total = subTotal + vat;
    document.getElementById("total").innerText = total;
}