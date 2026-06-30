/// Violia avec CHARTJS
new Chart(document.getElementById("tester5"), {
    type: "bar",
    data: {
        labels: ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],
        datasets: [{
            label: "CA 2022 (%)",
            data: [98,87,93,83,78,69,95,91,93,95,92,89]
        }]
    }
});

// Récupération des données plus tard
let dataRetrievedLater = tester2.data;
let layoutRetrievedLater = tester2.layout;