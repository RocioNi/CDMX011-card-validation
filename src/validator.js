/* eslint-disable no-console */


const validator = {
  
     
    isValid: function(str){

      var str_reverse = str.split("").reverse().join(""); // Hace split, reverce y vuelve a unir al string CreditNumber
      var pares = []; 
      var impares = [];

      for (var i = 0, len = str_reverse.length; i < len; i += 1) {

        if ((i%2) == 0){ 
          impares.push(+str_reverse.charAt(i));
        }
        if(i%2!=0){
          pares.push(+str_reverse.charAt(i));
        }

    }
       let sumaimpares=0;
       let numimp = 0;

    for (i = 0, numimp=0; i < impares.length; i++) {
      numimp = impares[i];
      sumaimpares+= numimp;
    }


     for (i= 0; i<  pares.length; i++) {
       pares[i]=pares[i]*2; 
       
     }
      
     let numpar = 0;
     let sumapares = 0;
     for(i=0; i<pares.length;i++){
       if(pares[i]>9){
         numpar=pares[i];
         pares[i]=numpar-9;
       }
       numpar=pares[i];
       sumapares+=numpar;
     }
     
     let total = sumapares+sumaimpares;
    
     let resultado=total%10
     if(resultado==0){
       return console.log ("true");
     } else{
        return console.log ("false");
      }
  
    },

    maskify:function (str){
      let longitud=str.length
      if(longitud<=4){
        return console.log (str);
      }else{
        let listado=Array.from(str)
        for(let i=0; i<str.length-4; i++){
          listado[i]="#"
        }
        let final=listado.join("")
        return console.log(final);
      }
    }
  
     }
      


export default validator;