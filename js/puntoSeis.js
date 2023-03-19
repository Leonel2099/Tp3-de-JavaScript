//Punto 6
const perimetro = (altura,base) => 2*(altura+base);
let ladoA = parseInt(prompt('Ingrese el valor de un lado del triangulo'));
let ladoB = parseInt(prompt('Ingrese el otro valor de un lado del triangulo'));
document.write(`El perimetro de su triangulo es de ${perimetro(ladoA,ladoB)}`)
