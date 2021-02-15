//1. Función potencias 
function potencias(numero) {
    for(let i = 1; i <= numero; i++) {
        document.write(i + " " + Math.pow(i, 2) + " " + Math.pow(i, 3) + "<br>");
    }

    return; 
}


let numero = prompt("Escribe un número entre el 1 y 100");
if(numero < 1 || numero > 100) {
    document.write("El número deb estar en el rango de 1 y 100");
}
else {
    potencias(numero); 
}