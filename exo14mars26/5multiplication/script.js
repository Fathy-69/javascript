const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Entrez un nombre : ", (input) => {
  let nombre = Number(input);

  for (let i = 1; i <= 10; i++) {
    let nombre = Number(input);
    console.log(nombre + " x " + i + " = " + (nombre * i));
  }
rl.close();
});


