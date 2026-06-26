const input = document.getElementById('input');
const submit = document.getElementById('submit');
const random = document.getElementById('random');

// Génère une chaîne aléatoire
function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }

    return result;
}

// Génération et affichage de la chaîne
const compareString = generateRandomString(6);
random.textContent = compareString;

// Vérification asynchrone
function verifyString(stringToVerify) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (stringToVerify === compareString) {
                resolve('Vérification réussie');
            } else {
                reject('Erreur : vérification échouée');
            }
        }, 2000);
    });
}

// Gestion du clic
submit.addEventListener('click', () => {
    const inputString = input.value;

    verifyString(inputString)
        .then((message) => {
            alert(message);
        })
        .catch((error) => {
            alert(error);
        });
});