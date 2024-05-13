secret_num=30
alert('Game Rules: This game is number guessing game, you need to guess the secret number within 5 chances. Click ok to start')
i=0
while(i < 5){
    guess_num=parseInt(prompt("Enter a number to guess the secret number: "))
    if(guess_num > secret_num){
        alert('The number is high!')
        i++
        if(i==5){
            alert("Game Over! The correct number was "+secret_num)
        break
        }
    }
    else if(guess_num < secret_num) {
        alert('The number is Low!')
        i++
        if(i==5){
            alert("Game Over! The correct number was "+secret_num)
        break
        }
    }
    else if (guess_num == secret_num) {
        alert("Congratulations! You've guessed the number!")
        break
    }
}