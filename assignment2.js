function iterativeFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}

function recursiveFactorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * recursiveFactorial(n - 1);
    }
}

let values =
[5,10,50,70,100,300,500,800,1000,10000,15000];

for (let i = 0; i < values.length; i++) {
    let num = values[i];

    let startIterative = performance.now();
    let resultIterative = iterativeFactorial(num);
    let endIterative = performance.now();
    let durationIterative = endIterative - startIterative;

    let startRecursive = performance.now();
    let resultRecursive = recursiveFactorial(num);
    let endRecursive = performance.now();
    let durationRecursive = endRecursive - startRecursive;

    console.log("Number: " + num);
    console.log("  Iterative Factorial: " + resultIterative);
    console.log("  Iterative Time: " + durationIterative.toFixed(3) + " milliseconds");

    console.log("  Recursive Factorial: " + resultRecursive);
    console.log("  Recursive Time: " + durationRecursive.toFixed(3) + " milliseconds");

    console.log("-----------------------------");
}
