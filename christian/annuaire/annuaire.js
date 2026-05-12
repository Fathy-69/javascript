/*fonction synchrone
async function chargerDonnees() {
  console.log("Début du chargement des données...");

  //on attend la réponse de l'utilisateur
  const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
  const donnees = await reponse.json();
  console.log("Données reçues :", donnees);
  console.log("Fin du chargement des données.");
}
chargerDonnees();*/

/*
Mini-Projet : "L'annuaire Dynamique"
Nous allons récupérer de vrais utilisateurs sur internet et les afficher dans le DOM.

Structure HTML suggérée : <div id="liste-users"></div>

La logique du projet :

On lance l'appel réseau avec fetch.

On utilise .forEach(), une méthode de tableau moderne, pour traiter chaque utilisateur un par un.

On utilise les Template Literals pour créer du HTML dynamiquement avec les propriétés de l'objet user (user.name, user.email).

Le bloc try...catch sert de filet de sécurité : si internet coupe, le programme ne plante pas, il affiche l'erreur.
*/

async function chargerDonnees() {
  console.log("Début du chargement des données");

  try {
    // On attend la réponse du serveur
    const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await reponse.json(); // On parse la réponse en JSON

    console.log("Données reçues :", users);

    const listeUsers = document.getElementById("liste-users");

    if (listeUsers) {
      // On parcourt la liste des utilisateurs
      users.forEach(user => {
        // On utilise les Template Literals pour générer le HTML de chaque carte
        const userCard = `
          <div class="card" style="margin: 10px;">
            <h2 class="pseudo">${user.name}</h2>
            <p>${user.email}</p>
            <p>${user.phone}</p>
          </div>
        `;
        // On insère le code HTML dans la div principale
        listeUsers.innerHTML += userCard;
      });
    }
  } catch (erreur) {
    // Ce bloc s'exécute s'il y a un problème avec l'API ou le réseau
    console.error("Erreur lors de la récupération des données :", erreur);
    
    const listeUsers = document.getElementById("liste-users");
    if (listeUsers) {
      listeUsers.innerHTML = `<p style="color: red;">Impossible de charger l'annuaire.</p>`;
    }
  }
}

chargerDonnees();