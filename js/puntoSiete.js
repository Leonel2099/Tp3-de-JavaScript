//Punto 7
const tablaMultlipicar = (num) => {
  for (let i = 1; i <= 10; i++) {
    document.write(`${i} * ${num} = ${i * num}<br>`);
    console.log(i);
  }
};
let numero = parseInt(prompt(`Ingrese un numero`));
document.write(`Tabla del ${numero} <br>`);
tablaMultlipicar(numero);
