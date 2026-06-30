/// Violia avec PLOTLY
let tester5 = document.getElementById('tester5');

let data5 = [
    {
        x: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
        y: [98, 87, 93, 83, 78, 69, 95, 91, 93, 95, 92, 89],
        type: "bar",

        marker: {
            color: "steelblue"
        },

        width: 0.4   // BARRES PLUS FINES
    }
];

let layout = {
    title: "Pourcentage de CA de l'année 2022",

    bargap: 0.5,        //  espace entre les barres
    bargroupgap: 0.2,

    font: { size: 14 },

    margin: { t: 50 }
};

let config = {
    responsive: true
};

Plotly.newPlot(tester5, data5, layout, config);