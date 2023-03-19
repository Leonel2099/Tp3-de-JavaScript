//Punto 4
const paridad = numero =>{
    if(numero % 2 === 0){
        return "Es par";
    }else{
        return "No es par";
    }
}
let numero = parseInt(Math.floor(Math.random() * (6 - 1 + 1) + 1));
document.write(`${paridad(numero)} ➡ ${numero}`);
