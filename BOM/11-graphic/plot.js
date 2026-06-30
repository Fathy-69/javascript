// Premier graphique
let tester1 = document.getElementById('tester1');
let data1= [ 
{            x: [1, 2, 3, 4, 5],
            y: [1, 2, 4, 8, 16],
            type: 'scatter'
        }
 ] ;
let layout1= {
        title: "Puissance de 2",
        margin: { t: 40 }
    };
Plotly.newPlot(tester1,data1,layout1);


// Deuxième graphique
let tester2 = document.getElementById('tester2');

let data2 = [
    {
        x: [1999, 2000, 2001, 2002, 2003, 2004, 2005],
        y: [10, 15, 13, 17, 9, 10, 15],
        type: 'scatter'
    }
];

let layout2 = {
    title: 'Sales Growth',
    xaxis: {
        title: 'Year',
        showgrid: false,
        zeroline: false
    },
    yaxis: {
        title: 'Percent',
        showline: false
    },
    margin: { t: 40 }
};


Plotly.newPlot(
    tester2,
    data2,
    layout2
);
//troisième graphique
Plotly.newPlot("tester3", [{
    x: [1,2,3],
    y: [2,4,8]
}]);
//quatrième graphique
Plotly.newPlot("tester4", [{
    x: [1,2,3],
    y: [8,4,2]
}]);

// Récupération des données plus tard
let dataRetrievedLater = tester2.data;
let layoutRetrievedLater = tester2.layout;