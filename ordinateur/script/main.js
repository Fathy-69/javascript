import FormulairePC from "./formulairePC.js";
import { calculPrix } from "./calculPrix.js";


const container = document.getElementById("app");


const formulaire = new FormulairePC(container);


const elements = formulaire.create();



elements.form.addEventListener(
    "submit",
    function(event){

        event.preventDefault();


        const prix = calculPrix(
            elements.cpu.value,
            elements.ram.value,
            elements.gpu.value
        );


        alert(`Prix estimé : ${prix} €`);

    }
);