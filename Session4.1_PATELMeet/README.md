# Advanced Python — Session 4.1

## OOP Mini Exercises

This project is part of the **Advanced Python course — Session 4 (Part 1)**.
It focuses on reinforcing core **Object-Oriented Programming (OOP)** principles through small, practical class-based exercises.

Unlike larger data projects, this session emphasizes **class design, encapsulation, and object behavior**, helping build a strong foundation for writing structured, maintainable Python code.

---

## Project Goals

* Practice defining and using Python classes
* Implement constructors (`__init__`) to manage object state
* Use methods to model real-world behaviors
* Apply encapsulation and controlled attribute access
* Use `@property` for safe attribute exposure
* Implement `__repr__` for readable object representation
* Test object interactions through a simple main script

---

## Project Structure

```
Session4.1_PATELMeet/
├── main.py
├── README.md
└── requirements.txt
```

---

## Implemented Classes

### 👩‍🎓 Student

Represents a student with a name and a list of grades.

**Features:**

* Computes average grade
* Determines pass/fail status
* Provides readable object representation

---

### 🏦 BankAccount

Models a simple bank account system.

**Features:**

* Private balance storage (`_balance`)
* Deposit and withdrawal methods with validation
* Read-only balance access via `@property`
* Encapsulation of internal state

---

### 🚗 Car

Represents a car with fuel management behavior.

**Features:**

* Fuel consumption when driving
* Refueling capability
* Basic validation of fuel usage

---

## Key Design Concepts

* **Encapsulation** — Internal data is protected and modified only through methods
* **Object Behavior** — Objects simulate real-world entities
* **State Management** — Attributes track the state of each object
* **Readable Objects** — `__repr__` improves debugging and output clarity

---

## How to Run

From the project directory:

```
python main.py
```

---

## Program Output

The program demonstrates:

* Student average and pass status
* Bank account balance updates after deposit and withdrawal
* Car fuel consumption and refueling behavior

---

## Technologies Used

* Python
* Object-Oriented Programming principles

---

## Author

PATEL Meet
Advanced Python Course — Session 4.1
