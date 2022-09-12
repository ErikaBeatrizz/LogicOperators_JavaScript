const prompt = require("prompt-sync")();

const valorCar = prompt('Type car value: ');
const valor = Number (valorCar);

const distributor = valor * 0.28
const tax = valor * 0.45
finalvalue = valor + distributor + tax

console.log(`Final car value ${Math.round(finalvalue)}`);




