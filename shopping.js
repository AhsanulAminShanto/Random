function process () {
 
    var up = parseFloat(document.getElementById("unitPriceBox").value) ; 
    var q = parseInt(document.getElementById("quantityBox").value); 
    var total = up * q;
    var discount = 0;
    var payable = 0; 

    if (total >= 1000){
        discount = total * .20 ; 
    }

    else if (total >= 500){
        discount = total * .10;
    }

    else if (total >= 250){
        discount = total * .05; 
    }
    else {
        discount = 0;
    }

     payable = total - discount ; 

     document.getElementById("discountBox").value = discount ;
     document.getElementById("payableBox").value = payable ; 

}