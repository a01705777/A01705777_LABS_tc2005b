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

//2. Función suma 
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

function suma_main() {
    let resultados = [];
    resultados = suma(); 
    
    let resultado = document.getElementById("resultado_suma"); 
    let tiempo = document.getElementById("tiempo_suma"); 

    if(resultados[0] === true) {
        resultado.innerHTML = "¡Correcto!";
    }
    else {
        resultado.innerHTML = "¡Incorrecto!";
    }
    
    tiempo.innerHTML = "Tiempo: " + resultados[1] + " segundos";    
}