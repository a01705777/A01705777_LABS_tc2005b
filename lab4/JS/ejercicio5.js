function inverso(numero) {
    let respuesta = "";

    if(numero < 0) {
        document.write("Inserte un número entero positivo")
    }
    
    //Para casos donde hay números enteros positivos
    do {
        respuesta += (numero % 10); 
        numero = Math.floor(numero / 10); 
    }
    while(numero > 0);
    
    return respuesta; 
}

//5. Función Inverso
let numero = prompt("Ingresa un número: "); 
if(numero < 0 || (numero - Math.floor(numero) != 0)) {
    document.write("Ingresa un número entero positivo.");
}
else {
    document.write("El inverso de " + numero + " es " + inverso(numero) + "\n");
}


