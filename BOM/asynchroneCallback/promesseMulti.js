//Promesse multiple
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("L'opération a réussi nous avons attendu 2 secondes!");
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("nous avons attendu 4 secondes au total");
  }, 4000);
});

Promise.all([promise1, promise2])
  .then(results => {
      console.log(results);
    // Code à exécuter lorsque toutes les promesses sont résolues
      results.forEach(result => {
      console.log("Résultat de la promesse: ", result);
    });
  })
  .catch(error => {
    // Code à exécuter en cas d'erreur
    console.error(error);
  })
  .finally(() => {  
    console.log("Deux promesses est terminée.");
    })
  
