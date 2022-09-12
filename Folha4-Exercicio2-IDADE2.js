    const prompt= require ('prompt-sync')()
    
    const daysText = prompt ('Type days of life: ');
    const days = Number (daysText);

    const year = days / 365
    const months = (days % 365) / 30
    const days2 = (days % 365) % 30

    console.log (`You has ${Math.floor(year)} , ${Math.floor(months)} months, and ${days2} days`)
