const diagnostics = {
    cpu: 80, 
    memory: 70,
    disk: 90,
}

function calcAverage(stats) {
    let sum = 0
    for(let elem in stats){
        sum += diagnostics[elem]
        // const arr = Object.values(stats);
        // const sum = arr.reduce((acc, elem) => (acc + elem), 0);
        // return sum / arr.length;
    }

    return sum / Object.keys(diagnostics).length;
}

console.log(`Avarage health: ${calcAverage(diagnostics)}`);