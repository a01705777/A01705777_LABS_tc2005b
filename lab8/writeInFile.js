//2. Función escribir en archivo de texto 
function writeInFile(cadena) {
    const filesystem = require('fs'); 
    filesystem.writeFileSync('output.txt', cadena);     
}
