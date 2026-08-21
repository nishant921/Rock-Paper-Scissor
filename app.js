let userScore = 0;
let computerScore = 0;

// Current winning streak
let winningStreak =
    Number(localStorage.getItem("winningStreak")) || 0;

// Best consecutive winning streak
let bestStreak =
    Number(localStorage.getItem("bestStreak")) || 0;


// DOM Elements
const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScoreP =
    document.querySelector("#user-score");

const compScoreP =
    document.querySelector("#computer-score");

const highScoreDisplay =
    document.querySelector("#high-score");


// Display best streak when page loads
highScoreDisplay.innerText = bestStreak;


// Generate computer choice
const genComputerChoice = () => {

    const options = [
        "rock",
        "paper",
        "scissor"
    ];

    const randIdx =
        Math.floor(Math.random() * options.length);

    return options[randIdx];
};


// Draw
const draw = () => {

    msg.innerText =
        "Game Draw! Play Again";

    msg.style.backgroundColor =
        "#f59e0b";
};


// Show winner
const showWinner = (
    userWin,
    userChoice,
    computerChoice
) => {

    if (userWin) {

        // User score
        userScore++;

        userScoreP.innerText =
            userScore;


        // Increase winning streak
        winningStreak++;


        // Update best streak
        if (winningStreak > bestStreak) {

            bestStreak =
                winningStreak;

            highScoreDisplay.innerText =
                bestStreak;

            localStorage.setItem(
                "bestStreak",
                bestStreak
            );
        }


        msg.innerText =
            `You win! ${userChoice} beats ${computerChoice}`;

        msg.style.backgroundColor =
            "#16a34a";

    } else {

        // Computer score
        computerScore++;

        compScoreP.innerText =
            computerScore;


        // Losing resets current streak
        winningStreak = 0;


        msg.innerText =
            `You lose! ${computerChoice} beats ${userChoice}`;

        msg.style.backgroundColor =
            "#dc2626";
    }
};


// Play game
const playGame = (userChoice) => {

    const computerChoice =
        genComputerChoice();


    // Draw
    if (userChoice === computerChoice) {

        draw();

        return;
    }


    // Determine winner
    let userWin;


    if (userChoice === "rock") {

        userWin =
            computerChoice === "paper"
                ? false
                : true;

    } else if (userChoice === "paper") {

        userWin =
            computerChoice === "scissor"
                ? false
                : true;

    } else {

        userWin =
            computerChoice === "rock"
                ? false
                : true;
    }


    showWinner(
        userWin,
        userChoice,
        computerChoice
    );
};


// Mouse click
choices.forEach((choice) => {

    choice.addEventListener(
        "click",
        () => {

            const userChoice =
                choice.getAttribute("id");

            playGame(userChoice);
        }
    );

});


// Keyboard support
choices.forEach((choice) => {

    choice.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                const userChoice =
                    choice.getAttribute("id");

                playGame(userChoice);
            }
        }
    );

});
