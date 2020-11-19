
function calculate() {
    a = document.getElementById('p').value;

    result = document.getElementById('result');
   result.value=parseFloat((a/1000).toFixed(3));

   inch = document.getElementById('inch');
   inch.value=parseFloat((a*39.370).toFixed(3));

   feet = document.getElementById('ft');
   feet.value=parseFloat((a*3.2808).toFixed(3));

   yards = document.getElementById('yards');
   yards.value=parseFloat((a*1.0936).toFixed(3));

   miles = document.getElementById('miles');
   miles.value=parseFloat((a*0.00062137).toFixed(3));  

  
     
}



