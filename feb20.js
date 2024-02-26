function findTotal () {
    var price1 = parseFloat(document.getElementById("p1Box").value) ;
    var price2 = parseFloat(document.getElementById("p2Box").value) ; 

   
   var total = price1 + price2;
   console.log ("Total price is", total);

   document.getElementById("display").innerHTML= `Total Price of 2 items:
                                                <b>${total} </b>taka`; 
}