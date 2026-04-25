const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Entrez un nombre : ", (input) => {
  let n = Number(input);
  let fact = 1;
   for (let i = 1; i <= n; i++) {
  fact = fact * i;
}

console.log("Factoriel de " + n + " = " + fact);

rl.close();
});


