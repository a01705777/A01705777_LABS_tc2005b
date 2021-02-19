//2. Función escribir en archivo de texto 
function writeInFile(cadena) {
    const filesystem = require('fs'); 
    filesystem.writeFileSync('output.txt', cadena);     
    console.log("La palabra es: " + cadena);

    return; 
}

function writeInFile_main() {
    let words = ["hola", "palabra", "si", "archivo", "clases", "array", "no", "JavaScript", "HTML", "CSS"];
    let index_word = Math.floor(Math.random() * 10);

    writeInFile(words[index_word]); 

    return; 
}

writeInFile_main(); 
