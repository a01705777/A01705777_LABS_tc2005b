/*
Autor: Rafael Hinojosa López
Matrícula: A01705777
Problema: 357 - Let Me Count The Ways
Juez: UVa Online Judge
Descripción Original: https://onlinejudge.org/index.php?option=onlinejudge&Itemid=8&category=5&page=show_problem&problem=293
U-debug: https://www.udebug.com/UVa/357
*/

function initMat() {
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

function solve() { 
    while(true) {
        let n = prompt("");
        if(n != null) {
            let answer = dp[4][n]; 
            if(answer == 1) {
                document.write("There is only 1 way ");
            }
            else {
                document.write("There are " + answer + " ways ");
            }
            document.write("to produce " + n + " cents change.")
            document.write("<br>");
        }
        else {
            break; 
        }
    }

    return; 
}

var dp = Array(); 
const coins = Array.of(1, 5, 10, 25, 50);
initMat(); 
solve(); 