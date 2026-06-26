//nous déterminons la date d'expiration

let dateExp = new Date();

dateExp.setHours(dateExp.getHours() + 1);

//Nous définissons les constantes username et mdp sur la valeur de retour de prompts

const username = window.prompt("Identifiant :");

const mdp = window.prompt("Mot de passe :");

// On vérifie que l'utilisateur n'a pas cliqué sur "Annuler"
if (username && mdp) {
    // Nous créons nos cookies en encodant les valeurs et en spécifiant le chemin
    document.cookie = `username=${encodeURIComponent(username)}; expires=${dateExp.toUTCString()}; path=/`;
    document.cookie = `mdp=${encodeURIComponent(mdp)}; expires=${dateExp.toUTCString()}; path=/`;

    // Création du bouton "Connexion" comme demandé par l'exercice DOM2
    const connexionBtn = document.createElement('button');
    connexionBtn.textContent = 'Connexion';
    document.body.appendChild(connexionBtn);

    // Au clic, on redirige vers la page de traitement en ajoutant une entrée à l'historique
    connexionBtn.addEventListener('click', () => {
        window.location.assign('html/traitement.html');
    });
} else {
    // Si l'utilisateur annule, on affiche un message
    document.body.innerHTML = '<p>Authentification annulée.</p>';
}