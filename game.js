
let maxNum = parseInt(prompt('Enter the maximum number'))
if (!maxNum) {
    maxNum = prompt('Enter valid Number')
}
let ranNum = Math.floor(Math.random() * maxNum) + 1

let guessNum = parseInt(prompt('Guess the Number'))
let attempts = 1
while (parseInt(guessNum) !== ranNum) {
    attempts++;
    if (guessNum > ranNum) {
        guessNum = prompt('Number to high guess again')
    } else {
        guessNum = prompt('Number to low guess again')
    }
}

console.log("Congratsssss You guessed right")
console.log(`Attempts ${attempts}`)
console.log(guessNum)






