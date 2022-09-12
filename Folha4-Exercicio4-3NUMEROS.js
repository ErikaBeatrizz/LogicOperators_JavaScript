    const prompt= require ('prompt-sync')()

    const valueAText = prompt('Type value of A: ');
    const A = Number (valueAText);

    const valueBText = prompt('Type value of B: ');
    const B = Number (valueBText);

    const valueCText = prompt ('Type value of C: ');
    const C = Number (valueCText);

    const R = Math.pow (A + B, 2)
    const S = Math.pow (B + C, 2)
    const D = R + S / 2

    console.log (`The value of expression D is ${D}`)





