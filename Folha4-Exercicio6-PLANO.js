const prompt = require("prompt-sync")();

const valuex1 = prompt('Type value x1: ');
const x1 = Number (valuex1)

const valuey1 = prompt('Type value y1: ');
const y1 = Number (valuey1)

const valuex2 = prompt ('Type value x2: ');
const x2 = Number (valuex2)

const valuey2 = prompt ('Typer value y2: ');
const y2 = Number(valuey2)

const valueD = Math.pow (x2 - x1, 2) + Math.pow (y2 - y1, 2);
const valueD2 = Math.sqrt (valueD)

console.log (`The result of the operation is: ${valueD2}`)