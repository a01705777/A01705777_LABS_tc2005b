function cuadrados_cubos(numero) {
    document.write(<strong>Número</strong>);
    document.write(<strong>Cuadrado</strong>);
    document.write(<strong>Cubo</strong>);

    for(let i = 1; i <= numero; i++) {
        document.write(i + "  " + Math.pow(i, 2) + "  " + Math.pow(i, 3) + "\n");
        /*
        document.write(i + " al cuadrado es " + Math.pow(i, 2));
        document.write(i + " al cuadrado es " + Math.pow(i, 3));
        */
    }

    return; 
}
//1. Cuadrados y cubos 
let num = prompt("Ingresa un número: "); 
cuadrados_cubos(num);

//3. Función contador
let n = 5;
console.log(n);

//4. 
*/