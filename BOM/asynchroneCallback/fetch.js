const apiKey = 'd408b2585e4efe44f7725a1691a98ff2';

async function recupDonnees(city, connexionValidate, traitement) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        const data = await response.json();

        connexionValidate();
        traitement(data);

    } catch (error) {
        console.log("error", error);
    }
}

function connexionReussie() {
    console.log("connexion réussie");
}

function affCoucherDeSoleil(data) {
    let horaire = new Date(data.sys.sunset * 1000);
    console.log(horaire.toLocaleTimeString());
}

recupDonnees('Paris', connexionReussie, affCoucherDeSoleil);