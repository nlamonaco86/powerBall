const playGame = () => {
    // Create the random numbers for the powerball
    let compNum = []
    for (let i = 1; i < 9; i++) {
        compNum.push(Math.floor(Math.random() * 101))
    }
    console.log(compNum)

    let userNum = []
    for (let i = 1; i < 8; i++) {
        userNum.push(parseInt(document.getElementById("guess" + [i]).value))
    }
    console.log(userNum)

    // Output each random number
    for (let i = 1; i < 8; i++) {
        document.getElementById("test" + [i]).innerHTML = (compNum[i])
    }

    let win = true;
    let gotOne = false;
    for (let i = 0; i < 8; i++) {
        if (compNum[i] === userNum[i]) {
            gotOne = true;
        }
        else if (compNum[i] != userNum[i]) {
            win = false;
        }
    }
    if (win) {
        document.getElementById("winner").innerHTML = "You Won!!"
    }
    else if (gotOne) {
        document.getElementById("winner").innerHTML = "You got one!!"
    }
    else {
        document.getElementById("winner").innerHTML = "You Lose!!"
    }
}

