/* eslint-disable no-console */

const validator = {
  isValid: function (str) {
    var str_reverse = str.split("").reverse().join(""); // Hace split, reverce y vuelve a unir al string CreditNumber
    var pares = [];
    var impares = [];
    
    for (var i = 0, len = str_reverse.length; i < len; i += 1) {
      //sacamos la longitud del string y damos la orden del bucle

      if (i % 2 == 0) {
        //si el residuo  de 2 de la posicion es 0 lo tomara como impar , considerando que el indice del primer elemento es 0
        impares.push(+str_reverse.charAt(i));
      }
      if (i % 2 != 0) {
        pares.push(+str_reverse.charAt(i)); //si el residuo de 2 de la posicion es diferente a 0 lo tomara como par
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
      if (pares[i] > 9) {
        // verifica si tiene 2 digitos
        numpar = pares[i];
        pares[i] = numpar - 9; //le resta 9 para sacar la suma de los 2 digitos, 12=3 12-9=3
      }
      numpar = pares[i];
      sumapares += numpar;
    }

    let total = sumapares + sumaimpares;

    let resultado = total % 10; //Residuo de 10
    if (resultado == 0) {
      return true;
    } else {
      return false;
    }
  },

  maskify: function (str) {
    //para ocultar los digitos menos los ultimos 4
    let longitud = str.length;
    if (longitud <= 4) {
      return str;
    } else {
      let listado = Array.from(str);
      for (let i = 0; i < str.length - 4; i++) {
        listado[i] = "#";
      }
      let final = listado.join("");
      return final;
    }
  },
};

export default validator;
