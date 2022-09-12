const prompt = require("prompt-sync")();

const valueA = prompt('Type value A: ');
const A = Number (valueA);

const valueB = prompt('Type value B: ');
const B = Number (valueB)

const valueC = prompt('Type value C: ');
const C = Number (valueC);

const valueD = prompt('Type value D: ');
const D = Number (valueD);

const valueE = prompt('Type value E: ');
const E = Number (valueE)

const valueF = prompt('Type value F: ');
const F = Number (valueF);

const valueX = (C * E - B * F) / (A * E - B * D)
const valueY = (A * F - C * D) / (A * E - B * D)

console.log(`The value of X is: ${valueX} and value of Y is: ${valueY}`);

