//attendre que la page soit chargée 
document.addEventListener("DOMContentLoaded", function() {

    //Récuperation tous les éléments du formulaire dom
    const villeInput = document.querySelector('#ville');
    const rechercherButton = document.querySelector('#rechercher');
    const chargmentDiv = document.querySelector('#chargement');
    const erreurDiv = document.querySelector('#erreur');
    const meteoDiv = document.querySelector('#meteo');
    const nomVilleElement = document.querySelector('#nomVille');
    const temperatureElement = document.querySelector('#temperature');
    const descriptionElement = document.querySelector('#description');
    const ressentiElement = document.querySelector('#ressenti');
    const humiditeElement = document.querySelector('#humidite');
    const ventElement = document.querySelector('#vent');
    const iconElement = document.querySelector('#icon');
    const footerElement = document.querySelector('footer');

    //ajouter cle API
    const API_KEY = "6b5b9f88dc8aa788de27ceda653291e1";
        
    async function recupereMeteo(ville) {
        //Réinitialiser le DOM
        erreurDiv.style.display = 'none';
        meteoDiv.style.display = 'none';
        chargmentDiv.style.display = 'block';
        try {
            //construire l'url de l'API et la clé
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${API_KEY}&units=metric&lang=fr`;
            console.log(`Récupération de la météo pour une ville: ${ville}`);
            
            //faire la requête pour recuperer la météo
            const response = await fetch(url);

            //verifier si la requête a réussi
            if (!response.ok){
                if(response.status === 404){
                    throw new Error(`La ville "${ville}" n'a pas été trouvée.`);
                }else{ 
                    throw new Error(`Erreur ${response.status}: ${response.statusText}`);
                }
            }
            
            //convertir les données
            const donnees = await response.json();
            console.log("Données méteo récupérées:", donnees);
            
            //mettre à jour le DOM avec les données récupérées
            nomVilleElement.textContent = donnees.name;
            temperatureElement.textContent = Math.round(donnees.main.temp) + '°C';
            //Première lettre en majuscule
            const description = donnees.weather[0].description;
            descriptionElement.textContent = description.charAt(0).toUpperCase() + description.slice(1);
            ressentiElement.textContent = 'Ressenti: ' + Math.round(donnees.main.feels_like) + '°C';
            humiditeElement.textContent = 'Humidité: ' + donnees.main.humidity + '%';
            ventElement.textContent = 'Vent: ' + Math.round(donnees.wind.speed * 3.6 )+ ' km/h';
            //Afficher l'icône météo
            const weatherIcon = donnees.weather[0].icon;
            iconElement.innerHTML = `<img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="${description}">`;
            // Définir l'arrière-plan en fonction de la météo
            //obtenir l'heure actuelle pour la ville
            const heurelocale = new Date();
            //afficher le bloc météo
            meteoDiv.style.display = 'block';
            chargmentDiv.style.display = 'none';
        } catch(error) {
            console.error("Erreur lors de la récupération des données météo:", error);
            erreurDiv.style.display = 'block';
            chargmentDiv.style.display = 'none';
            alert('Une erreur est survenue lors de la récupération des données météo. Veuillez réessayer plus tard.');
        }
    }
    
    //faire la requete pour recuperer la météo
    rechercherButton.addEventListener('click', function() {
        const ville = villeInput.value.trim();
        if (ville === '') {
            alert('Veuillez entrer le nom d\'une ville.');
            return;
        }
        recupereMeteo(ville);
    });
    //en appuyant sur le bouton entree
    villeInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Évite la soumission par défaut si l'input est dans un <form>
            rechercherButton.click(); // Simule le clic sur le bouton pour réutiliser le code existant
        }
    });
});
