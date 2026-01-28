# Advanced Python — Session 5.1

## Deep Dive into Object-Oriented Programming (OOP)

This project is part of the **Advanced Python course — Session 5 (Part 1)**.
It focuses on strengthening Object-Oriented Programming skills through a set of progressively structured class design exercises.

The goal of this session is to move beyond basic class definitions and practice **state management, encapsulation, class relationships, and class-level behavior**.

---

## Project Goals

* Reinforce core OOP principles in Python
* Design classes that model real-world systems
* Use private attributes and controlled access
* Manage object state safely through methods
* Build relationships between classes (composition)
* Use class variables and class methods
* Practice defensive logic and state validation

---

## Project Structure

```
Session5.1_PATELMeet/
├── main.py
├── README.md
└── requirements.txt
```

---

## Implemented Exercises

### 🏦 BankAccount

Models a simple banking system.

**Concepts practiced:**

* Private attribute (`_balance`)
* Deposit and withdrawal validation
* Encapsulation of internal state

---

### 🎓 Student & Classroom

Represents students and a classroom environment.

**Concepts practiced:**

* Object composition (a classroom contains students)
* Managing collections of objects
* Computing aggregated statistics (class average)

---

### 🚗 Car with State Validation

Simulates a car with realistic operational rules.

**Concepts practiced:**

* State-dependent behavior (engine on/off)
* Preventing invalid actions
* Managing speed safely

---

### 📚 Book & Library

Models a basic library system.

**Concepts practiced:**

* Object relationships
* Tracking object state (borrowed / returned)
* Searching objects inside a collection

---

### 👤 User Class Counter

Tracks the number of user objects created.

**Concepts practiced:**

* Class variables
* Class methods (`@classmethod`)
* Shared state across instances

---

## Key OOP Concepts Covered

* Encapsulation
* Object state management
* Composition (objects containing other objects)
* Class vs instance attributes
* Defensive programming
* Method-based state transitions

---

## How to Run

From the project directory:

```
python main.py
```

---

## Program Output

The script demonstrates:

* Account balance updates
* Class average calculation
* Car engine state validation
* Book borrowing and returning
* Tracking total number of users created

---

## Technologies Used

* Python
* Object-Oriented Programming principles

---

## Author

PATEL Meet
Advanced Python Course — Session 5.1
