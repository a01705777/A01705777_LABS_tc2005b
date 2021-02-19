//1. Función promedio
function promedio (nums) {
    let sum = 0, n = nums.length; 

    if(n == 0) {
        console.log("No hay elementos");
        return; 
    }

    for(let item of nums) {
        sum += item; 
    }

    return (sum / n);     
}

//2. Función escribir en archivo de texto 
function writeInFile(cadena) {
    const filesystem = require('fs'); 
    filesystem.writeFileSync('output.txt', cadena);     
}

