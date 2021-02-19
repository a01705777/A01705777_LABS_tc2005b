/*
Autor: Rafael Hinojosa López
Matrícula: A01705777
Problema: 357 - Let Me Count The Ways
Juez: UVa Online Judge
Descripción Original: https://onlinejudge.org/index.php?option=onlinejudge&Itemid=8&category=5&page=show_problem&problem=293
U-debug: https://www.udebug.com/UVa/357
*/

function initMat_acm() {
    dp[0] = [];
    for(let i=0; i<=30000; i++) {
        dp[0][i] = 1; 
    }

    for(let i=1; i<5; i++) {
        dp[i] = [];
        for(let j=0; j<=30000; j++) {
            dp[i][j] = dp[i-1][j];
            if(j - coins[i] >= 0) {
                dp[i][j] += dp[i][j - coins[i]];
            }
        }
    }

    return; 
}

function solve_acm() { 
    let testcases = 10; 
    
    //Generar índices aleatorios 
    let indices = [];
    for(let i=0; i<testcases; i++) {
        let index = Math.floor(Math.random() * 10000);
        indices.push(index); 
    }

    //Print the output for the random indices generated above
    for(let i=0; i<testcases; i++) {
        let answer = dp[4][indices[i]]; 
        
        if(answer == 1) {
            console.log("There is only 1 way ");
        }
        else {
            console.log("There are " + answer + " ways to produce " + indices[i] + " cents change.");
        }
    }

    return; 
}

var dp = Array(); 
const coins = Array.of(1, 5, 10, 25, 50);
initMat_acm(); 
solve_acm();        



 