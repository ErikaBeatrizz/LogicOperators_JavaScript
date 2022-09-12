const prompt= require ('prompt-sync')()

const firstNoteText = prompt('Type first note: ');
const first = Number (firstNoteText);

const secondNoteText = prompt ('Type second note: ');
const second = Number (secondNoteText);

const thirdNoteText = prompt ('Type the third note: ');
const third = Number (thirdNoteText);

const media = ((first * 2) + (second*3) + (third*5)) / (2 + 3 + 5)

console.log (`Your final average is: ${media}`)