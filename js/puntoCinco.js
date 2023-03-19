//Punto 5
const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const abcMayus = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
function mayusMin(palabra){
    let bandera = 0;
    let contadorMin = 0;
    let contadorMayus = 0;
    console.log(palabra.length);
    while(bandera < palabra.length){
        for(let i = 0; i < 27; i++){
            if(palabra[bandera] === abc[i]){
                contadorMin++;
            }else if (palabra[bandera] === abcMayus[i]){
                contadorMayus++;
            }
        }
        bandera++;
    }
    if(contadorMayus > 0 && contadorMin == 0){
        document.write(`'${palabra}' esta plabra esta escrita con mayusculas`); 
    }else if (contadorMin > 0 && contadorMayus == 0){
        document.write(`'${palabra}' esta plabra esta escrita con Minusculas`)
    }else{
        document.write(`'${palabra}' esta plabra esta escrita con mayusculas y minusculas`);
    }
}
let frase = prompt('Ingrese una palabra');
mayusMin(frase);