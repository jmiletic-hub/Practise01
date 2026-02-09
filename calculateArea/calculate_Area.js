let length;
let width;

function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);

let area = length * width;
 document.getElementById('result').innerText = `The ara of the rectangle is: ${area}`;

}

 function calculateSum (){
    const amount1Element = document.getElementById("amount1");
    console.log(amount1Element);
    console.log(amount1Element.value);
    console.log(typeof amount1Element.value)
    
    let amount1= parseFloat (document.getElementById("amount1").value);
    let amount2= parseFloat(document.getElementById("amount2").value);
    let amount3= parseFloat(document.getElementById("amount3").value);
    let sum= amount1+amount2+amount3;
    document.getElementById("sumResult").innerText="Sum is " + sum;
 }
