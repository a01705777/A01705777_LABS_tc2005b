/*
Entrada: Usando un prompt se pide el resultado 
de la suma de 2 números generados de manera aleatoria
Salida: La página debe indicar si el resultado fue correcto o incorrecto, 
y el tiempo que tardó el usuario en escribir la respuesta.
*/

function suma() {
    let num1 = Math.floor(Math.random() * 100);
    let num2 = Math.floor(Math.random() * 100); 
    let suma = num1 + num2; 

    texto = "Resuelva la siguiente operación: " + num1 + " + " + num2 + " = ";  
    let start = new Date(); 
    let numero = prompt(texto); 
    let finish = new Date();
    
    let time = (finish - start) / 1000; 
    
    return [(numero == suma), time];
}

let resultados = new Array;
resultados = suma(); 

if(resultados[0] === true) {
    document.write("¡Correcto!");
}
else {
    document.write("¡Incorrecto!");
}
document.write("<br>"); 
document.write("Tiempo: " + resultados[1] + " segundos"); 

delete resultados; 
