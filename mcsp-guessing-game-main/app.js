play()
function play(){
    let secretNumber = Math.floor(Math.random() * 100 + Math.random() * 10);
    let countGuesses = 0;
    let arrayOfGuesses = [];
    let name = prompt('what is your name?')
    while(true) {
        if(name === null) {
            alert('Thanks for playing');
                break;
        }
        let num1 = prompt('guess a number');
        if(num1 === null) {
            alert('Thanks for playing')
            break;
        }
        let num = Number(num1);
        if(Number.isNaN(num)) {
            alert('input a number')
            continue;
        }
        countGuesses++;
        arrayOfGuesses.push(num)
    if (secretNumber < num) {
        alert('Number is to big try again')
    } else if (secretNumber > num) {
        alert('Number is to small try again')
    } else {
        alert(`${name}! You finally won!! it only took ${countGuesses} guesses. Here are all your guesses! ${arrayOfGuesses}`);
       let playAgainNotice = confirm('wanna play again?')
       if(playAgainNotice === false) {
        break;
       } else {
        playAgain()
       function playAgain() {
        let secretNumber2 = Math.floor(Math.random() * 100 + Math.random() * 10);
    let countGuesses2 = 0;
    let arrayOfGuesses2 = [];
    while(true) {
        let num2 = prompt('guess a number');
        if(num2 === null) {
            break;
        }
        let num = Number(num2);
        if(Number.isNaN(num)) {
            alert('input a number')
            continue;
        }
        countGuesses2 += num - num + 1;
        arrayOfGuesses2.push(num)
    if (secretNumber2 < num) {
        alert('Number is to big try again')
    } else if (secretNumber2 > num) {
        alert('Number is to small try again')
    } else {
        alert(`${name}! You finally won!! it only took ${countGuesses2} guesses. last time it took ${countGuesses} Here are all your guesses! ${arrayOfGuesses2} I hope its less numbers this time take a look ${arrayOfGuesses}`);
        let goodBye = prompt('This is goodbye do not forget to say goodbye to your favorite game!')
        If (goodBye == typeof('string'))
        break;
       }
       }
    }
}
}
    }
}