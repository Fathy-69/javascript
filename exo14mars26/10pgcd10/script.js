const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Entrez un nombre : ", (input) => {
  let a = Number(input);
  let b = 10;
  let x = a;
  let y = b;

  while (y !== 0) {
    let temp = y;
    y = x % y;
    x = temp;
  }

  let pgcd = x;

  let ppcm = (a * b) / pgcd;
  console.log("PGCD de", a, "et 10 =", pgcd);
  console.log("PPCM de", a, "et 10 =", ppcm);

  rl.close();
});
