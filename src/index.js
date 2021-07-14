
import validator from "./validator.js";
const boton = document.getElementById("validar"); //primer boton
const secondBoton = document.getElementById("register2"); //segundo boton
boton.addEventListener("click", function () {
  const CreditCardNumber = document.getElementById("cardNumber").value; //cardNumber =id del input
  if (CreditCardNumber.length < 13) { //restriccion de cantidad de digitos de la tarjeta
    alert("Introduce número de tarjeta"); // alerta 
  } else {
    const resultado = validator.isValid(CreditCardNumber); //comienza la validación
    document.getElementById("first").style.display = "none" //primer pantalla ,none:oculta 
    const hash = validator.maskify(CreditCardNumber); // maskify=enmascaramiento de digitos
    
    document.getElementById("second").style.display = "block" // segunda pantalla, block: muestra
    if (resultado == true) { //condicional , si es true realiza lo siguiente
      document.getElementById("message").innerHTML = `<span class="valid">Tarjeta valida </spam>`;// usamos span al tener un solo id message en HTML.
      document.getElementById("imagenValidation").style.display = "block" // imagen palomita verde block:muestra
      document.getElementById("imagenValidation2").style.display = "none" //imagen tacha roja none: oculta
      document.getElementById("lastnumber").innerHTML = hash; //el numero de la tarjeta introducida con los # excepto los ultimos 4 digitos

      
    } else {
      document.getElementById("message").innerHTML = `<span class="invalid">Tarjeta Invalida</spam>`; //usamos span al tener un solo id message en HTML.
      document.getElementById("imagenValidation").style.display = "none" // imagen palomita verde none:oculta
      document.getElementById("imagenValidation2").style.display = "block"//imagen tacha roja block: muestra
      document.getElementById("lastnumber").innerHTML = hash; //el numero de la tarjeta introducida con los # excepto los ultimos 4 digitos

    }
  }
});
secondBoton.addEventListener("click", function () { //segundo boton para registrar otra tarjeta, manda a primer pantalla
  document.getElementById("second").style.display = "none"; //id: second de HTML (segunda pantalla)  none: oculta
  document.getElementById("first").style.display = "block"; //id: fisrt de HTML  (primer pantalla)  block: muestra
  document.getElementById("lastnumber").style.display = "block";//el numero de la tarjeta introducida con los # excepto los ultimos 4 digitos
});
