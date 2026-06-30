// Premier graphique
new Chart(document.getElementById("tester1"), {
    type: "scatter",
    data: {
        datasets: [{
            label: "Puissance de 2",
            data: [
                {x:1, y:1},
                {x:2, y:2},
                {x:3, y:4},
                {x:4, y:8},
                {x:5, y:16}
            ]
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: "Puissance de 2"
            }
        }
    }
});

// Deuxième graphique
new Chart(document.getElementById("tester2"), {
    type: "scatter",
    data: {
        datasets: [{
            label: "Sales Growth",
            data: [
                {x:1999,y:10},
                {x:2000,y:15},
                {x:2001,y:13},
                {x:2002,y:17},
                {x:2003,y:9},
                {x:2004,y:10},
                {x:2005,y:15}
            ]
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: "Sales Growth"
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Year"
                },
                grid: {
                    display: false
                }
            },
            y: {
                title: {
                    display: true,
                    text: "Percent"
                }
            }
        }
    }
});

// Troisième graphique
new Chart(document.getElementById("tester3"), {
    type: "line",
    data: {
        labels: [1,2,3],
        datasets: [{
            label: "Graphique 3",
            data: [2,4,8]
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: "Graphique 3"
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "X"
                }
            },
            y: {
                title: {
                    display: true,
                    text: "Y"
                }
            }
        }
    }
});

// Quatrième graphique
new Chart(document.getElementById("tester4"), {
    type: "line",
    data: {
        labels: [1,2,3],
        datasets: [{
            label: "Graphique 4",
            data: [8,4,2]
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: "Graphique 4"
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "X"
                }
            },
            y: {
                title: {
                    display: true,
                    text: "Y"
                }
            }
        }
    }
});

// Récupération des données plus tard
let dataRetrievedLater = tester2.data;
let layoutRetrievedLater = tester2.layout;  