// firstClass Plus Btn 
const fClassPlusBtn = document.getElementById("fClassPlusBtn");
fClassPlusBtn.addEventListener('click', function(){
    quantityPlus("fClassQuantity");
    checkoutPlusQty("fClassQuantity", "firstClassQty");
    subTotalVatTotal();
    
})

// firstClass Minus Btn 
const fClassMinusBtn =  document.getElementById("fClassMinusBtn");
fClassMinusBtn.addEventListener("click", function(){
    quantityMinus("fClassQuantity");
    checkoutPlusQty("fClassQuantity", "firstClassQty");
    subTotalVatTotal();
})

// economyClass Plus Btn 
const eClassPlusBtn = document.getElementById("eClassPlusBtn");
eClassPlusBtn.addEventListener('click', function(){
    quantityPlus("eClassQuantity");
    checkoutPlusQty("eClassQuantity", "economyClassQty");
    subTotalVatTotal();
    
})

// economyClass Minus Btn 
const eClassMinusBtn = document.getElementById("eClassMinusBtn");
eClassMinusBtn.addEventListener('click', function(){
    quantityMinus("eClassQuantity");
    checkoutPlusQty("eClassQuantity", "economyClassQty");
    subTotalVatTotal();
})

// bookNow btn 
const bookNow = document.getElementById("bookNow");
bookNow.addEventListener('click', function(){
    document.getElementById("mainSection").style.display = "none";
    document.getElementById("checkout").style.display = "block";
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
        // document.getElementById("firstClassQty").innerText = quantityNumber - 1;
     }
     return quantityNumber;
}

function subTotalVatTotal(){
    const fClassQuantity = getQtyNumber("fClassQuantity");
    const eClassQuantity = getQtyNumber("eClassQuantity");

    const subTotal = fClassQuantity * 150 + eClassQuantity * 100;
    document.getElementById("subTotal").innerText = subTotal;
    document.getElementById("subTotalCheckOut").innerText = subTotal;

    const vat = subTotal * 10 / 100;
    document.getElementById("vat").innerText = vat;
    document.getElementById("vatCheckOut").innerText = vat;

    var total = subTotal + vat;
    document.getElementById("total").innerText = total;
    document.getElementById("totalCheckOut").innerText = total;
}

function checkoutPlusQty(idOfQty, idOfAddQty){
    const quantityNumber = getQtyNumber(idOfQty);
    document.getElementById(idOfAddQty).innerText = quantityNumber;
}