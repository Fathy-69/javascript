const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Entrez le premier chiffre : ", (input1) => {
  const nb1 = parseInt(input1);

  rl.question("Entrez le deuxième chiffre : ", (input2) => {
    const nb2 = parseInt(input2);

    const sum = nb1 + nb2;

    console.log(`La somme de ${nb1} et ${nb2} est : ${sum}`);
    //console.log("La somme de " + nb1 + " et " + nb2 + " est : " + sum);

    //température:
let temperature = 25;
if (temperature > 30) {
    console.log("Il fait chaud !");
} else if (temperature > 25) {
    console.log("Il fait bon");
}  else if (temperature > 15) {  
    console.log("Il fait frais");    
} else {
    console.log("Il fait froid");
}
    rl.close();
  });
});






