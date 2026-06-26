const USERNAME = "TonyStark";
const PASSWORD = "starktower";


function getCookie(name) {

    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {

        const [key, value] = cookie.split("=");

        if (key === name) {
            return decodeURIComponent(value);
        }
    }

    return null;
}


const button = document.createElement("button");

button.textContent = "Espace utilisateur";

document.body.appendChild(button);


button.addEventListener("click", () => {

    const username = getCookie("username");

    const mdp = getCookie("mdp");


    const url =
        username === USERNAME &&
        mdp === PASSWORD
            ? "./connected.html"
            : "./incorrect.html";


    window.open(
        url,
        "resultat",
        "width=400,height=400"
    );

});