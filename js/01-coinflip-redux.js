let coinFlip
let numTimes = prompt('How many times do you want to flip the coin?')

for (let i = 1; i <= numTimes; i++) {
    let randomNum = Math.round(Math.random())
    let coinFlip = randomNum
    if (coinFlip < 1) {
        console.log('Heads')
    } else {
        console.log('Tails')
    }
}