export default class FormulairePC {

    constructor(container) {
        this.container = container;
    }


    create() {

        const form = document.createElement("form");
        form.id = "pcForm";


        const cpu = document.createElement("select");
        cpu.name = "cpu";


        ["i5", "i7", "i9"].forEach(processeur => {

            const option = document.createElement("option");

            option.value = processeur;
            option.textContent = processeur;

            cpu.appendChild(option);

        });


        const ram = document.createElement("input");

        ram.type = "number";
        ram.name = "ram";
        ram.placeholder = "RAM en Go";


        const gpu = document.createElement("select");

        gpu.name = "gpu";


        [
            ["100","GTX"],
            ["300","RTX"],
            ["600","RTX Pro"]

        ].forEach(carte => {

            const option = document.createElement("option");

            option.value = carte[0];
            option.textContent = carte[1];

            gpu.appendChild(option);

        });


        const button = document.createElement("button");

        button.type = "submit";
        button.textContent = "Calculer";


        form.append(
            cpu,
            ram,
            gpu,
            button
        );


        this.container.appendChild(form);


        return {
            form,
            cpu,
            ram,
            gpu
        };
    }
}