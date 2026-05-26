/*fonction synchrone*/
async function chargerDonnees() {
  console.log("Début du chargement des données...");

  //on attend la réponse de l'utilisateur
  const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
  const donnees = await reponse.json();
  console.log("Données reçues :", donnees);
  console.log("Fin du chargement des données.");
}
chargerDonnees();


/*fonction asynchrone avec try...catch  version courte*/ 
const listeUsers = document.getElementById("liste-users");
const chargerDonnees1 = async () => {
  console.log("Début du chargement des données");
  try {
    // On attend la réponse du serveur
    const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await reponse.json(); // On parse la réponse en JSON
//on parcourt le tableau d'utilisateurs et on affiche les données dans le DOM
    users.forEach(user => {
      const userCard = `
        <div class="card" style="margin: 10px;">
          <h2 class="pseudo">${user.name}</h2>
          <p>${user.email}</p>
          <p>${user.phone}</p>
        </div>
      `;
      listeUsers.innerHTML += userCard;
    });
  } catch (erreur) {
    // Ce bloc s'exécute s'il y a un problème avec l'API ou le réseau
    console.error("Erreur lors de la récupération des données :", erreur);
    }
};
chargerDonnees1();