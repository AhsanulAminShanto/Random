function process () {
    var courses = parseInt(document.getElementById("coursesBox").value) ; 
    var fees = parseInt(document.getElementById("feesBox").value) ; 

    var total = courses * fees ; 
    var discount = total * .20 ;
    var payable = total - discount;

    document.getElementById("discountBox").value = discount; 
    document.getElementById("payableBox").value = payable ; 
}