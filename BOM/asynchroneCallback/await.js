function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
    console.log("Début du programme");
    await wait(2000);
    console.log("Message au milieu");
    await wait(2000);
    console.log("Fin du programme");
}
run();

