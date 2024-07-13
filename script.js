// Function to get user input for the game
function getUserInput(){
    // Prompting user for input (All input from prompt is parsed as STRING)
    let playerInput = prompt("What do you choose?\nKey in 0 or Rock for Rock\nKey in 1 or Paper for Paper \nand key in 2 or Scissors for Scissors");
    // Converting user input into int equivilent
    let playerChoice = inputIntConverter(playerInput);
    // Logging the user choice for debugging
    console.log("Player plays "+inputStringConverter(playerChoice));
    return playerChoice;
}
// Function to convert input into its respective integer choice for decision making
function inputIntConverter(input){
    //Receiving User's input for Rock/Paper/Scissors and converting to int for easier decision making
    if ( input === "0" || input === "Rock" || input === "rock" ){
        return 0;
    }else if ( input === "1" || input === "Paper" || input === "paper" ){
        return 1;
    }else if ( input === "2" || input === "Scissors" || input === "scissors" ){
        return 2;
    }else{
        // If user gives invalid input prompt user again to get valid input
        getUserInput();
    }
}
// Function to convert input into its respective string choice for logging
function inputStringConverter(input){
    //Receiving an Int and returning the string equivilent of computer/user choice for debugging
    // 0 for rock
    if ( input === 0 ){
        return "Rock";
    // 1 for paper
    }else if ( input === 1 ){
        return "Paper";
    // 2 for scissors
    }else if ( input === 2 ){
        return "Scissors";
    }
}
// Function to check if the computer is the one who wins the match
function winDecider( playerChoice, computerChoice ){
    //Declaring variable that returns who wins the match
    let roundResult=0;
    // Win condition for computer
    if (( computerChoice === 0 && playerChoice === 2) || (computerChoice === 1 && playerChoice === 0) || (computerChoice === 2 && playerChoice === 1)){
        console.log("Computer Wins this round");
        alert("COMPUTER WINS THIS ROUND");
        roundResult = "Computer"
    }
    // Draw condition
    else if (computerChoice === playerChoice){
        console.log("Draw!");
        alert("DRAW!");
    // Win condition for player
    }else{
        console.log("Player Wins this round");
        alert("You WIN THIS ROUND!")
        roundResult = "Player"
    }
    // Returns roundResult for score tracking purposes
    return roundResult;
}

/*Next round function prompts user if they would like to continue with another round
function nextRound(roundResult,computerScore,playerScore){
    // Prompt user
    let roundStarter = prompt("Would you like to start another round?\nEnter 1 or Yes to continue\nPress any other button to exit");
    // Gives User 3 options to say yes to another round of rock paper scissors
    if ( (roundStarter === "1")||(roundStarter === "Yes")||(roundStarter === "yes")){
        //Recursive function to restart rock paper scissors round
        rockPaperScissors(computerScore,playerScore);
    }
    else {
        // Exit message
        alert("Thanks for playing");
        // Let user see the results before ending 
        alert(`FINAL RESULTS\nPlayer score: ${playerScore} | Computer Score ${computerScore}`)
    }
}*/


// ScoreCounter function that computes the score of every round
function scoreCounter(roundResult,computerScore,playerScore){
    // When computer wins the round
    if (roundResult==="Computer"){
        // Incremanting the computer's score
        computerScore+=1;
        // Sends alert to user to indicate game is finished
        if (winChecker(computerScore,playerScore)){
            alert("COMPUTER WINS THE GAME !");
        }
        // Print the score after the round ends and game not won
        scorePrinter(computerScore,playerScore);    
    }else if (roundResult==="Player"){  // When player wins the round
        // Incremanting the player's score
        playerScore+=1;
        // Sends alert to user to indicate the game is finished
        if (winChecker(computerScore,playerScore)){
            alert("PLAYER WINS THE GAME !");
        }
        // Print the score after the round ends
        scorePrinter(computerScore,playerScore);
    }else {   // When round ends as a draw
        // Print the score after the round
        scorePrinter(computerScore,playerScore);
    }
    // Return updated scores
    return [computerScore, playerScore];
}


// scorePrinter function that prints the score so scoreCounter is less repetitive
function scorePrinter(computerScore,playerScore){
    alert(`Player score: ${playerScore} | Computer Score ${computerScore}`);
}


// Game ends when one side reaches 5
function winChecker(computerScore,playerScore){
    if ((computerScore===5)){   // Checking if computer score reaches 5
        return 1;
    } else if ((playerScore===5)){      // Checking if user score reaches 5
        return 1;    
    }    
}


// Function to implement actual best of 5 game of rock paper scissors
function rockPaperScissors(computerScore,playerScore){
    // Using getUserInput to prompt user for input and then converting it to int equivilent
    let playerChoice = getUserInput(); 
    // Getting random number from 0-2 inclusive for computer choice
    let computerChoice =(Math.floor(Math.random() * 3));
    // Logging the string equivilent of computer choice for debugging
    console.log("Computer plays "+inputStringConverter(computerChoice));
    // Let the player know the computer's choice
    alert("Computer plays "+inputStringConverter(computerChoice));
    // Using winDecider logic to log and send alert of winner    
    let roundResult = winDecider( playerChoice, computerChoice );
    // Let player view the scoreboard
    [computerScore, playerScore] = scoreCounter(roundResult,computerScore,playerScore);
    if (winChecker(computerScore,playerScore)){     //Checking if either side has won yet
        alert("Thanks for playing!");            // Alert to indicate the end of the game
        // Prompt to ask if user would like to start a new game
        let reStart=prompt("Would you want to play again?\nEnter 1 or yes to continue\nPress any other button to exit");
        if ((reStart==="1")||(reStart==="yes")||(reStart==="Yes")){
            rockPaperScissors(0,0);
        }else{      //End the game after the round
            alert("Goodbye");
        }
    }
    else{
        /* Commented out for smoother gameplay if planning to implement nextRound function need to delete rockPaperScissors below
        // Checking if user wants to play another round
        nextRound(roundResult,computerScore,playerScore);
        */
        // Start a new round
        rockPaperScissors(computerScore,playerScore);
    }
            
} 


//Final function to implement the full game
function playGame(){
// Initiate computer and player scores as 0 
    let computerScore = 0;
    let playerScore = 0;
    // Alert to greet the user
    alert("Hi! Let's play rock paper and scissors\nBest of 5! But you can leave in between rounds if you want!");
    rockPaperScissors(computerScore,playerScore);
}

// Function call to start the game
playGame();

