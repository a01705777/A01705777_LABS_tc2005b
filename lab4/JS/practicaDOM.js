//1. Función potencias 
function potencias(numero) {
    let titulo = document.getElementById("titulo_potencias"); 
    titulo.innerHTML = "Tabla de n, n^2 y n^3"; 
    
    let tabla = "";
    for(let i = 1; i <= numero; i++) {
        tabla += i + " " + Math.pow(i, 2) + " " + Math.pow(i, 3) + "<br>";
    }
    
    let powers_n = document.getElementById("potencias_n"); 
    //powers_n.innerHTML = tabla; 
    document.write(tabla); 
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

//3. Función Contador 
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

function contador_main() {
    let n = prompt("Ingrese el número de elementos: ");
    let numeros = []; 
    
    let array = document.getElementById("array_contador"); 
    let resultados = document.getElementById("resultados_contador"); 

    //Llenar Array e imprimirlo en HTML 
    array.innerHTML += "Los elementos del array son: "
    for(let i=0; i<n; i++) {
        let num = Math.random(); 
        if(num < 0.5) 
            num *= -1; 
        num = Math.floor(num * 100); 

        numeros.push(num); 
        array.innerHTML += num;
        if(i < n-1) array.innerHTML += ", ";
    }
    array.innerHTML += "<br>";
    
    //Resultados
    let resultados_arr = contador(numeros); 
    resultados.innerHTML = "Negativos = " + resultados_arr[0] + "<br>";
    resultados.innerHTML += "Ceros = " + resultados_arr[1] + "<br>"; 
    resultados.innerHTML += "Positivos = " + resultados_arr[2] + "<br>";

    return; 
}

//4. Función Calcular promedios 
function calcula_promedios(grades, grupos) {
    let promedios = [];
    for(let i=0; i<grupos; i++) {
        let suma = 0; 
        for(let j=0; j<grupos; j++) {
            suma += grades[i][j];
        }
        let avg = Number(Math.round(suma/grupos + 'e2')+ 'e-2'); 
        promedios.push(avg);
    }

    return promedios; 
}

function promedios_main() {
    let grupos = Math.floor(Math.random() * 10) + 1; 
    let grades = [];
    let calificaciones = document.getElementById("calificaciones_grupo"); 
    let promedios_finales = document.getElementById("promedios_grupo"); 

    //Crear grupos y llenar calificaciones
    for(let i=0; i<grupos; i++) {
        grades[i] = [];
        for(let j=0; j<grupos; j++) {
            let grade = Math.floor(Math.random() * 10);
            grades[i][j] = grade; 
            calificaciones.innerHTML += grades[i][j] + " "; 
        }
        calificaciones.innerHTML += "<br>";
    }
    
    //Calcular promedios e imprimir resultados 
    let promedios = []; 
    promedios = calcula_promedios(grades, grupos); 
        
    //Promedios finales
    for(let i=0; i<grupos; i++) {
        promedios_finales.innerHTML += "Promedio " + (i+1) + " = " + promedios[i] + "<br>";
    }
}


//5. Función inverso 
function inverso(numero) {
    let respuesta = "";

    //Para casos donde hay números enteros positivos
    do {
        respuesta += (numero % 10); 
        numero = Math.floor(numero / 10); 
    }
    while(numero > 0);
    
    return respuesta; 
}

function inverso_main() {
    let numero = prompt("Ingresa un número: "); 
    if(numero < 0 || (numero - Math.floor(numero) != 0)) {
        alert("Ingresa un número entero positivo.");
    }
    else {
        let respuesta = document.getElementById("inverso_numero");
        respuesta.innerHTML = "El inverso de " + numero + " es " + inverso(numero) + "<br>";
    }
    
    return; 
}
