    const prompt= require ('prompt-sync')()
   
    const ageText = prompt('Type your age: ');
    const age = Number(ageText);
    
    const monthText = prompt('Type your month: ');
    const month = Number(monthText);

    const daysText = prompt('Type your days: ');
    const days = Number(daysText);

    const total = (age * 365) + (month * 30) + days
    console.log('Their total days of lives are: ' + total)







