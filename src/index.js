/* eslint-disable no-console */
import validator from "./validator.js";
//console.log(validator);

const boton = document.getElementById("validar");
const secondBoton = document.getElementById("register2");
boton.addEventListener("click", function () {
const CreditCardNumber = document.getElementById("cardNumber").value;
if (CreditCardNumber.length<13){
  alert("Introduce numero de tarjeta");
}else{
  const resultado = validator.isValid(CreditCardNumber);
  document.getElementById("first").style.display = "none"
  const hash = validator.maskify(CreditCardNumber);
  //console.log(resultado, hash);
  document.getElementById("second").style.display = "block"
  if (resultado == true) {
    document.getElementById("cardNumber").value = hash; //value por inner
    document.getElementById("message").innerHTML = `<span class="valid">Tarjeta valida </spam>`;
    document.getElementById("imagenValidation").style.display = "block"
    document.getElementById("imagenValidation2").style.display = "none"
    document.getElementById("lastnumber").innerHTML = hash;
   
    console.log(hash);
  } else {
    document.getElementById("cardNumber").value = hash;
    document.getElementById("message").innerHTML = `<span class="invalid">Tarjeta Invalida</spam>`;
    document.getElementById("imagenValidation").style.display = "none"
    document.getElementById("imagenValidation2").style.display = "block"
    document.getElementById("lastnumber").innerHTML = hash; //agregado despues de monse
    
  }
}
});
secondBoton.addEventListener("click", function () {
  document.getElementById("second").style.display = "none";
  document.getElementById("first").style.display = "block";
  document.getElementById("lastnumber").style.display = "block";
});

//console.log("Tu tarjeta es",CreditCardNumber);

//var numerica= parseInt(reverseString(CreditCardNumber));

//console.log(numerica);
//console.log('Tu tarjeta tiene ' + CreditCardNumber.length+ " digitos");
//validator.isValid(CreditCardNumber);
//validator.maskify(CreditCardNumber);

/*Function{validator.nombredelafuncion*/
