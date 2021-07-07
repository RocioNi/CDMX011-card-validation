/* eslint-disable no-console */
import validator from './validator.js';
console.log(validator);

const boton =document.getElementById('validar');

 boton.addEventListener ("click",function(){
  const CreditCardNumber=document.getElementById("cardNumber").value;
  console.log("Tu tarjeta es",CreditCardNumber);

  //var numerica= parseInt(reverseString(CreditCardNumber));

  //console.log(numerica);
  console.log('Tu tarjeta tiene ' + CreditCardNumber.length+ " digitos");
  validator.isValid(CreditCardNumber);
  validator.maskify(CreditCardNumber);
  
  var noValido= / /;
  if(noValido.test(CreditCardNumber)){ // se chequea el regex de que el string no tenga espacio
    alert ("La contraseña no puede contener espacios en blanco"); 
   return true; 
}
else{ 
   return false; 
}



});




 /*Function{validator.nombredelafuncion*/