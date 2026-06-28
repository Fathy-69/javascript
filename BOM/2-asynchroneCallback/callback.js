/*let username = "";

function wait(fonction, millisecondes) {
  return new Promise((resolve) => {
    setTimeout(() => {
      fonction();
      resolve()
    }, millisecondes);
  })
}


async function affUsername(callback) {
  await wait(() => {username="PeterParker"}, 2000);
  callback();
}

console.log("Connexion...");

affUsername(() => {console.log('Bonjour ' + username)});

console.log("Connexion de l’utilisateur");*/


let num1 = 10;
let num2 = 20;

function wait(fonction, millisecondes) {
  return new Promise((resolve) => {
    setTimeout(() => {
      fonction();
      resolve()
    }, millisecondes);
  })
}

async function calcul(callback) {
  await wait(() => { num1 *= 2 }, 2000);
  await wait(() => { num2 += 5 }, 1000);
  callback();
}

console.log("Début du calcul...");

function affResultat() {
  console.log(`Résultat : ${num1 + num2}`);
}

calcul(affResultat);

console.log("Fin du calcul.");