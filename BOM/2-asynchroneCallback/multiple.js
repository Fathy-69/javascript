function affResultat(tab) {
    console.log(tab);
}

async function multiples(nb, callback) {
    let multiples = new Array();
    for(let i = 1; i <= nb; i++) {
        multiples.push(i * 18);
    }
    callback(multiples);
}


multiples(5, affResultat)