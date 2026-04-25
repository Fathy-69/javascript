const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Entrez un nombre : ", (input) => {
  let n = Number(input);
  let inv = 1/n;
 

console.log("L'inverse de " + n + " = " + inv);

rl.close();
});


