    const prompt= require ('prompt-sync')()

    const secondsText = prompt('How many seconds did the event last?: ');
    const seconds = Number (secondsText);

    const hour = seconds / 3600
    const minutes = (seconds%60) / 60
    const seconds2 = (seconds%60) % 60

    console.log(`The event lasted ${Math.floor(hour)} hours, ${Math.floor(minutes)} minutes and ${Math.floor(seconds)} seconds`)
