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

function promedio_main() {
    let grades = [];
    let n = Math.floor(Math.random() * 10) + 1; 

    for(let i=0; i<n; i++) {
        let num = Math.floor(Math.random() * 100);
        grades.push(num);  
    }
    
    console.log("El array es: ");
    for(let i=0; i<n; i++) {
        console.log(grades[i]); 
    }
    
    console.log("El promedio es " +  promedio(grades));

    return; 
}  

promedio_main(); 