/*/let nombre = Number(prompt("Entrez un nombre :"));

//for (let i = 2; i <= nombre; i += 2) {
  console.log(i);
}/*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Entrez un nombre : ", (input) => {
  let nombre = Number(input);

  for (let i = 2; i <= nombre; i += 2) {
    console.log(i);
  }

  rl.close();
});


