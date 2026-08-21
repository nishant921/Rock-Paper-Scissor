# Rock Paper Scissors Game: https://precious-kataifi-c429e2.netlify.app/

A simple and interactive **Rock Paper Scissors** web game where you play against the computer.

## 🎮 Features

* Rock, Paper, and Scissors gameplay
* Random computer moves
* Player and computer score tracking
* Winning streak counter
* Best winning streak saved using `localStorage`
* Win, lose, and draw messages
* Responsive design for desktop and mobile
* Keyboard accessibility
* SEO-friendly HTML structure

## 🛠️ Tech Stack

* HTML5
* CSS3
* JavaScript
* Browser Local Storage

## 📂 Project Structure

```text
Rock-Paper-Scissor/
│
├── index.html
├── style.css
├── app.js
├── rock.png
├── paper.png
└── scissors.png
```

## 🕹️ How to Play

1. Choose **Rock**, **Paper**, or **Scissors**.
2. The computer randomly selects its move.
3. The winner is determined by the standard rules:

   * Rock beats Scissors
   * Scissors beats Paper
   * Paper beats Rock
4. A draw occurs when both players choose the same option.
5. A win increases your winning streak.
6. A loss resets the current winning streak to `0`.
7. Your **Best Winning Streak** is saved in your browser.

## 📊 Winning Streak

Example:

```text
Win  → Streak: 1
Win  → Streak: 2
Win  → Streak: 3
Draw → Streak: 3
Win  → Streak: 4
Lose → Streak: 0
Win  → Streak: 1
```

The best streak remains saved even after refreshing the page.

## 🚀 Run Locally

Clone the repository:

```bash
git clone https://github.com/nishant921/Rock-Paper-Scissor.git
```

Open the project folder:

```bash
cd Rock-Paper-Scissor
```

Then open `index.html` in a browser or use **VS Code Live Server**.

## 🌐 Deployment

The project can be deployed using **Netlify** and connected to GitHub for continuous deployment.

After making changes:

```bash
git add .
git commit -m "Update game"
git push
```

Netlify automatically deploys the latest changes from the connected GitHub repository.

## 📱 Responsive Design

The game is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

## 🔮 Future Improvements

* Add sound effects
* Add game reset button
* Add difficulty levels
* Add animations
* Add dark/light theme
* Add multiplayer mode
* Add game statistics
* Add countdown before each round

## 👨‍💻 Author

**Nishant**

Built as a JavaScript practice project to demonstrate DOM manipulation, event handling, game logic, and browser local storage.
