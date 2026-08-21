/* =========================================
   GAME VARIABLES
========================================= */

let userScore = 0;
let computerScore = 0;


/* =========================================
   HIGH SCORE
========================================= */

// Get saved high score
let highScore = Number(
    localStorage.getItem("highScore")
) || 0;


/* =========================================
   DOM ELEMENTS
========================================= */

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScoreP = document.querySelector("#user-score");

const compScoreP = document.querySelector("#computer-score");

const highScoreDisplay =
    document.querySelector("#high-score");


/* =========================================
   DISPLAY SAVED HIGH SCORE
========================================= */

highScoreDisplay.innerText = highScore;


/* =========================================
   GENERATE COMPUTER CHOICE
========================================= */

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


/* =========================================
   DRAW
========================================= */

const draw = () => {

    msg.innerText =
        "Game Draw! Play Again";

    msg.style.backgroundColor =
        "#f59e0b";
};


/* =========================================
   SHOW WINNER
========================================= */

const showWinner = (
    userWin,
    userChoice,
    computerChoice
) => {

    if (userWin) {

        /* -----------------------------
           USER WINS
        ----------------------------- */

        userScore++;

        userScoreP.innerText =
            userScore;


        /* -----------------------------
           UPDATE HIGH SCORE
        ----------------------------- */

        if (userScore > highScore) {

            highScore = userScore;

            highScoreDisplay.innerText =
                highScore;

            localStorage.setItem(
                "highScore",
                highScore
            );
        }


        msg.innerText =
            `You win! ${userChoice} beats ${computerChoice}`;

        msg.style.backgroundColor =
            "#16a34a";

    } else {

        /* -----------------------------
           COMPUTER WINS
        ----------------------------- */

        computerScore++;

        compScoreP.innerText =
            computerScore;


        msg.innerText =
            `You lose! ${computerChoice} beats ${userChoice}`;

        msg.style.backgroundColor =
            "#dc2626";
    }
};


/* =========================================
   PLAY GAME
========================================= */

const playGame = (userChoice) => {

    const computerChoice =
        genComputerChoice();


    /* -----------------------------
       DRAW
    ----------------------------- */

    if (userChoice === computerChoice) {

        draw();

        return;
    }


    /* -----------------------------
       DETERMINE WINNER
    ----------------------------- */

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


/* =========================================
   CLICK EVENTS
========================================= */

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


/* =========================================
   KEYBOARD SUPPORT
========================================= */

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
