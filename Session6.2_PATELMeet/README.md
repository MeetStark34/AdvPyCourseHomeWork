# Advanced Python — Session 6.2

## A* Pathfinding Algorithm (Grid Navigation)

This project is part of the **Advanced Python course — Session 6 (Part 2)**.
It implements the classical **A* (A-star) pathfinding algorithm** to compute the shortest path on a 2D grid with obstacles.

This session focuses on algorithmic problem solving, graph search, and heuristic-based optimization, which are fundamental concepts in artificial intelligence and robotics.

---

## Project Goals

* Model a grid-based environment
* Represent obstacles and free cells
* Implement the A* search algorithm
* Use a heuristic (Manhattan distance)
* Reconstruct the optimal path
* Visualize the result
* Export the generated path image

---

## Project Structure

```
Session6.2_PATELMeet/
├── main.py
├── requirements.txt
├── README.md
├── src/
│   └── astar.py
├── data/
└── out/
    └── astar_path.png
```

---

## Algorithm Overview

### 🔍 A* Search

A* is an informed search algorithm that finds the shortest path between a start and goal node by combining:

* **g(n)**: cost from start to current node
* **h(n)**: heuristic estimate to the goal
* **f(n) = g(n) + h(n)**

The algorithm always expands the node with the lowest estimated total cost.

---

### 📏 Heuristic

This implementation uses **Manhattan distance**, which is appropriate for grid movement limited to four directions.

```
h(n) = |x1 - x2| + |y1 - y2|
```

---

### 🧭 Grid World

The environment is a 10×10 grid where:

* `0` = free cell
* `1` = obstacle

The algorithm navigates around obstacles to reach the goal.

---

## Visualization

The script generates a plot showing:

* Obstacles (black cells)
* Start position
* Goal position
* Optimal path

Output file:

```
out/astar_path.png
```

---

## Setup Instructions

Create and activate the virtual environment:

```
python -m venv venv
source venv/Scripts/activate
```

Install dependencies:

```
pip install -r requirements.txt
```

---

## How to Run

From the project directory:

```
python main.py
```

The script will compute the path and save the visualization.

---

## Key Concepts Covered

* Graph search algorithms
* Heuristic design
* Priority queues (heapq)
* Path reconstruction
* Grid-based navigation
* Algorithm visualization

---

## Technologies Used

* Python
* NumPy
* matplotlib
* heapq
* A* search algorithm

---

## Author

PATEL Meet
Advanced Python Course — Session 6.2
