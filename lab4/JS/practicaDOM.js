//1. Función potencias 
function potencias(numero) {
    let titulo = document.getElementById("titulo_potencias"); 
    titulo.innerHTML = "Tabla de n, n^2 y n^3"; 
    
    let tabla = "";
    for(let i = 1; i <= numero; i++) {
        tabla += i + " " + Math.pow(i, 2) + " " + Math.pow(i, 3) + "<br>";
    }
    
    let powers_n = document.getElementById("potencias_n"); 
    powers_n.innerHTML = tabla; 

    return; 
}

function potencias_main() {
    let numero = prompt("Escribe un número entre el 1 y 100");
    if(numero < 1 || numero > 100) {
        alert("El número debe estar en el rango de 1 y 100");
    }
    else {
        potencias(numero); 
    }    
}


 