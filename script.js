const playGame = () => {
    // Create the random numbers for the powerball
    let compNum = []
    for (let i = 1; i < 9; i++){
        compNum.push(Math.floor(Math.random() * 101))
    }
    console.log(compNum)
    
    let userNum = []
    for (let i = 1; i < 8; i++){
        userNum.push(parseInt(document.getElementById("guess" + [i]).value))
    }
    console.log(userNum)

    // Output each random number
    for (let i = 1; i < 8; i++){
        document.getElementById("test" + [i]).innerHTML = (compNum[i])
    }

    for (var i  = 0; i < 8; i++){
        if (compNum[i] === userNum[i]){
        document.getElementById("winner").innerHTML = "You got one!!"
        }
        else if (compNum === userNum ) {
        document.getElementById("winner").innerHTML = "YOU WIN!!";
        }
        else {
        document.getElementById("winner").innerHTML = "You Lose!!";    
        }
    }
}

