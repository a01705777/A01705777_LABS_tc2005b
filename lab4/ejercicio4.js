/*
Función: promedios. Parámetros: Un arreglo de arreglos de números. 
Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.
*/

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

let grupos = Math.floor(Math.random() * 10) + 1; 
let grades = [];
for(let i=0; i<grupos; i++) {
    grades[i] = [];
    for(let j=0; j<grupos; j++) {
        let grade = Math.floor(Math.random() * 10);
        grades[i][j] = grade; 
    }
}

let promedios = []; 
promedios = calcula_promedios(grades, grupos); 

for(let i=0; i<grupos; i++) {
    for(let j=0; j<grupos; j++) {
        document.write(grades[i][j] + " "); 
    }
    document.write("<br>");
}
for(let i=0; i<grupos; i++) {
    document.write("Promedio " + (i+1) + " = " + promedios[i]);
    document.write("<br>");
}