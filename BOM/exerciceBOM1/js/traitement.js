// Fonction simple pour récupérer la valeur d'un cookie par son nom
function getCookie(name) {
    // On ajoute un ';' au début pour simplifier la recherche avec split
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    // Si on trouve le cookie, parts aura 2 éléments.
    if (parts.length === 2) {
        // On prend la deuxième partie, on coupe au prochain ';', et on décode.
        return decodeURIComponent(parts.pop().split(';').shift());
    }
}

// Identifiants attendus pour la connexion
const IDENTIFIANT_CORRECT = 'TonyStark';
const MOT_DE_PASSE_CORRECT = 'starktower';

// Création du bouton "Espace utilisateur" comme demandé par l'exercice DOM2
const espaceUserBtn = document.createElement('button');
espaceUserBtn.textContent = 'Espace utilisateur';
// On retire le message "Vérification en cours..." et on ajoute le bouton
document.body.innerHTML = '';
document.body.appendChild(espaceUserBtn);

// Au clic, on vérifie les cookies et on ouvre la fenêtre correspondante
espaceUserBtn.addEventListener('click', () => {
    const identifiant = getCookie('username');
    const motDePasse = getCookie('mdp');

    if (identifiant === IDENTIFIANT_CORRECT && motDePasse === MOT_DE_PASSE_CORRECT) {
        window.open('./connected.html', 'fenetreResultat', 'width=400,height=400');
    } else {
        window.open('./incorrect.html', 'fenetreResultat', 'width=400,height=400');
    }
});