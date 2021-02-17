/*
Función: contador. Parámetros: Un arreglo de números. 
Regresa: La cantidad de números negativos en el arreglo, 
la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo.
*/

function contador(numeros) {
    let negativos=0, ceros=0, positivos=0; 
    for(let i=0; i<numeros.length; i++) {
        if(numeros[i] < 0) {
            negativos ++;
        }
        else if(numeros[i] === 0) {
            ceros ++; 
        }
        else {
            positivos ++; 
        }
    }

    return [negativos, ceros, positivos];
}

let n = prompt("Ingrese el número de elementos: ");
let numeros = new Array; 

for(let i=0; i<n; i++) {
    let num = Math.floor(Math.random() * 100); 
    numeros.push(num); 
}

document.write("Números del array: ");
for(let i=0; i<n-1; i++) {
    document.write(numeros[i] + ", ");
}
document.write(numeros[n-1]);

let resultados = contador(numeros); 

document.write("<br>");
document.write("Negativos = " + resultados[0]);
document.write("<br>");
document.write("Ceros (0) = " + resultados[1]);
document.write("<br>");
document.write("Positivos = " + resultados[2]);
