// Ecouter l'événement de clic sur le bouton de soumission
document.querySelector("#submit-btn").addEventListener("click", function(event) {
  event.preventDefault();
  // Obtenir les valeurs des champs de saisie
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  // Vérifier si les champs sont vides
  if (name === "" || email === "" || message === "") {
    alert("Veuillez remplir tous les champs");
    return;
  }

  // Vérifier si l'adresse e-mail est valide
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Adresse e-mail invalide");
    return;
  }

  // Afficher une alerte pour indiquer que le formulaire a été soumis avec succès
  alert("Le formulaire a été soumis avec succès !");
});