export function calculPrix(cpu, ram, gpu) {

    let prix = 0;


    if(cpu === "i5"){
        prix += 200;
    }

    if(cpu === "i7"){
        prix += 350;
    }

    if(cpu === "i9"){
        prix += 600;
    }

    prix += Number(ram) * 5;
    prix += Number(gpu);
    return prix;
}