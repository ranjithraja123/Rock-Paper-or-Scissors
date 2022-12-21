let userInput;
let compinput;
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput == "rock" || userInput == "paper" || userInput == "scissors" ) {
        return userInput;

    }
    else {
        console.log("Error");
    }
}

const getComputerChoice = (compinput) => {
    compinput = compinput.toLowerCase();
    if (compinput == "rock" || compinput == "paper" || compinput == "scissors" ) {
        return compinput;

    }
    else {
        console.log("Error");
    }

}

const determineWinner = (userChoice , computerChoice) => {
    if (userChoice == computerChoice) {
        return "tie";
    }
    if ( userChoice=="rock"){
        if (computerChoice == "paper") {
            return "User lost"
        }
        else if (computerChoice == "scissors") {
            return "user won"
        }
    }
    if (userChoice=="paper") {
        if (computerChoice == "rock") {
            return "user won"
        }
        else if (computerChoice == "scissors") {
            return "user lost"
        }
    }
    if (userChoice=="scissors") {
        if (computerChoice == "rock") {
            return "user lost"
        }
        else if (computerChoice == "paper") {
            return "user won"
        }
    }

}

const playGame = () => {
    let userChoice = getUserChoice("rock")
    let computerChoice = getComputerChoice("paper")
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice))    
}

playGame()
