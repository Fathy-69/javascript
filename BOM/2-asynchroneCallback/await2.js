/*function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function logMessage() {
  await wait(2000); // attendre 2 secondes
  console.log('Bonjour');
}

logMessage();
console.log('Fin du programme');*/
//===============================================
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function run() {
  console.log("Bonjour");
  await wait(2000);
  console.log("Fin du programme");
}

run();