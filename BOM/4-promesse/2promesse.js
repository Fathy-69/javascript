//Chainage de promesses

const maPromesse = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("L'opération a réussi nous avons attendu 2 secondes!");
  }, 2000);
});

const secondePromesse = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("nous avons attendu 4 secondes au total");
  }, 4000);
});

maPromesse
  .then(resultat => {
    //que faire en cas de réussite
    //nous avons attendu 2 secondes
    console.log(resultat);
    return secondePromesse;
  })
  .then(resultat => {
    //que faire en cas de réussite
    //nous avons attendu 4 secondes au total
    console.log(resultat);
  })
  .catch(erreur => {
    console.error(erreur);
  })
  .finally(() => {
    console.log("Deux promesses est terminée.");
  });

  