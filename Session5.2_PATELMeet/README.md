# Advanced Python — Session 5.2

## Game Development & Minimax AI

This project is part of the **Advanced Python course — Session 5 (Part 2)**.
It combines **game logic, object-oriented design, and artificial intelligence algorithms** to build interactive board games with decision-making capabilities.

This session represents a major step from basic OOP toward **algorithmic thinking and AI search strategies**.

---

## Project Goals

* Design game systems using object-oriented programming
* Model board states and player turns
* Implement rule-based winner detection
* Apply the **Minimax algorithm** for AI decision making
* Simulate game trees through recursion
* Handle user interaction and game loops
* Build multiple game types within one project

---

## Project Structure

```
Session5.2_PATELMeet/
├── main.py
├── README.md
└── requirements.txt
```

---

## Implemented Games

### 🎮 Tic-Tac-Toe

A classic 3x3 board game implemented with full game logic.

**Features:**

* Board state tracking
* Turn management
* Winner and draw detection
* Human vs Human support (base logic)

---

### 🤖 Tic-Tac-Toe AI (Minimax)

An AI opponent powered by the **Minimax algorithm**.

**Concepts Practiced:**

* Recursive game-tree exploration
* State simulation and backtracking
* Maximizing vs minimizing player logic
* Optimal decision making

The AI evaluates all possible future moves and chooses the best one, making it impossible to defeat with perfect play.

---

### 🔵 Connect Four

A 6x7 grid-based game with gravity-based token placement.

**Features:**

* Dynamic board representation
* Horizontal, vertical, and diagonal win detection
* Valid move checking
* Interactive player gameplay

---

## Key Concepts Covered

* Object-Oriented Design for Games
* Game State Management
* Recursion
* Minimax Search Algorithm
* Decision Trees
* Backtracking Techniques
* Defensive input handling

---

## How to Run

From the project directory:

```
python main.py
```

Then choose a game mode from the menu.

---

## Program Output

The program allows users to:

* Play Tic-Tac-Toe against an AI
* Play Connect Four in interactive mode
* Observe AI decision making in real time

---

## Technologies Used

* Python
* Object-Oriented Programming
* Recursive algorithms
* Game AI concepts

---

## Author

PATEL Meet
Advanced Python Course — Session 5.2
