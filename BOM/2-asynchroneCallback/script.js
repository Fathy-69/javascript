/*let username = "";

//setTimeout qui exécute une fonction anonyme après 1 seconde en asynchrone

window.setTimeout(() => {
  username = "PeterParker"
},1000);

console.log('Bonjour ' + username); //affiche 'Bonjour', car exécuté en synchrone, directement après, username n’ayant pas encore été définie sur "PeterParker"

window.setTimeout(() => {
  console.log('Bonjour ' + username); //affiche 'Bonjour PeterParker' car exécuté en asynchrone 1 seconde après la fonction du setTimeout précédent
}, 2000);


let username = "";
function wait(fonction, millisecondes) {
  return new Promise((resolve) => {setTimeout(() => {fonction();resolve()}, millisecondes);
  })
}
async function affUsername() {
  await wait(() => {username="PeterParker"}, 2000);
  console.log('Bonjour ' + username);
}
console.log("Connexion...");
affUsername();
console.log("Connexion de l’utilisateur");*/
//==================================================================

async function sayHello() {
  await new Promise((resolve) => {setTimeout(resolve, 3000)});
  console.log("Hello!");
}
sayHello();

