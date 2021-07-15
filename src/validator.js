const validator = {
  isValid: function (CreditCardNumber) {
    let str_reverse = CreditCardNumber.split("").reverse().join(""); // Hace split, reverce y vuelve a unir al string CreditNumber
    let pares = []; //Array
    let impares = []; //Array

    for (var i = 0; i < str_reverse.length; i++) {
      //sacamos la longitud del string  (numero de tarjeta) y damos la orden de iteracion

      if (i % 2 == 0) {
        //si el residuo de 2 de la posicion es 0 lo tomara como impar , considerando que el indice del primer elemento es 0
        impares.push(+str_reverse.charAt(i)); //anhade elementos que cumplen con la restriccion,solo impares , nuevo array
      }
      if (i % 2 != 0) {
        //si el residuo de 2 de la posicion es diferente a 0 lo tomara como par
        pares.push(+str_reverse.charAt(i)); //anhade elementos que cumplen con la restriccion,solo pares , nuevo array
      }
    }
    let sumaimpares = 0;
    let numimp = 0;

    for (i = 0, numimp = 0; i < impares.length; i++) {
      //sacara la longitud de los impares
      numimp = impares[i]; //guardo numimp en el arreglo impares en la posicion i
      sumaimpares += numimp; //sumaimpares=sumaimpares+numero impar
    }

    for (i = 0; i < pares.length; i++) {
      //sacara la longitud de los pares
      pares[i] = pares[i] * 2; //los pares se multiplicaran por 2
    }

    let numpar = 0;
    let sumapares = 0;
    for (i = 0; i < pares.length; i++) {
      //sacara la longitud de los pares
      if (pares[i] > 9) {
        //verificara si los pares son digitos menor a 9, verifica si tienen 2 digitos
        numpar = pares[i]; //guardo numpar  de los mayores a 9 en el arreglo pares en la posicion i
        pares[i] = numpar - 9; //le resta 9 para sacar la suma de los 2 digitos, 12=3 12-9=3
      }
      numpar = pares[i]; //guardo numpar de los menores a 9 en el arreglo pares en la posicion i
      sumapares += numpar; //sumapares=sumapares+numero par
    }

    let total = sumapares + sumaimpares;

    let resultado = total % 10; //Residuo de 10
    if (resultado == 0) {
      //si el residuo de 10 es 0
      return true; //retorna true
    } else {
      //si no
      return false; // retorna false
    }
  },

  maskify: function (CreditCardNumber) {
    // maskify=enmascaramiento de digitos , uso de # excepto en los ultimos 4 digitos

    let longitud = CreditCardNumber.length; //longitud del string
    if (longitud <= 4) {
      //si la longitud es menor a 4
      return CreditCardNumber; //retorna tal cual el string
    } else {
      //si no
      let listado = Array.from(CreditCardNumber); //
      for (let i = 0; i < CreditCardNumber.length - 4; i++) {
        // realiza la iteracion hasta 4 digitos antes de que termine el string
        listado[i] = "#"; //sustituye por # los digitos de la iteracion
      }
      let final = listado.join(""); // al final une los caracteres
      return final;
    }
  },
};

export default validator;
