const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Entrez un nombre : ", (input) => {
  let nombre = Number(input);

  // ton code ici

  rl.close(); // ✔️ important
});







// ===============================
// 🔥 MODELE NODE.JS INTERACTIF
// ===============================


// 1️⃣ Import du module readline
const readline = require("readline");


// 2️⃣ Création de l’interface (TOUJOURS IDENTIQUE)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// ======================================================
// 🥇 VERSION 1 : SIMPLE (une seule question)
// ======================================================

function versionSimple() {
  rl.question("Entrez un nombre : ", (input) => {

    let nombre = Number(input);

    console.log("Tu as entré :", nombre);

    rl.close(); // IMPORTANT
  });
}


// ======================================================
// 🥈 VERSION 2 : AVANCÉE (plusieurs questions)
// ======================================================

function versionAvancee() {
  rl.question("Nom ? ", (nom) => {

    rl.question("Âge ? ", (age) => {

      console.log("Bonjour " + nom);
      console.log("Tu as " + age + " ans");

      rl.close(); // IMPORTANT
    });
  });
}


// ======================================================
// 🚀 CHOISIS LA VERSION À LANCER
// ======================================================

// versionSimple();
// versionAvancee();
