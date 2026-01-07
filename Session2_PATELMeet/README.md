# Advanced Python — Session 2

## OOP SalesDataset (CSV Analysis)

This project is part of the **Advanced Python course — Session 2**.
It focuses on refactoring a simple CSV-based data analysis workflow into a **clean object-oriented design** using Python.

The core idea is to group **data and behavior together** inside a single class, following OOP best practices commonly used in professional data projects.

---

## Project Goals

* Practice Object-Oriented Programming (OOP) fundamentals
* Design a clean and minimal class-based API
* Manage dataset state using class attributes
* Load and clean CSV data safely
* Compute business KPIs using class methods
* Export computed results to a CSV file
* Run the project from the command line using arguments

---

## Project Structure

```
session2/
├── main.py
├── README.md
├── requirements.txt
├── src/
│   └── sales_dataset.py
├── data/
│   ├── sales_clean.csv
│   └── sales_dirty.csv
└── out/
    └── revenue_by_product.csv
```

---

## Key Design Concepts

* **SalesDataset class**

  * Stores dataset path and loaded rows
  * Controls the full data lifecycle: load → compute → export

* **Encapsulation**

  * All business logic lives inside class methods
  * External code interacts with the dataset through a clear API

* **Defensive Programming**

  * Invalid or missing rows are skipped with warnings
  * Empty datasets return safe default values

---

## Setup Instructions

Create and activate a virtual environment:

```
python -m venv venv
```

Activate the environment (OS-specific), then install dependencies:

```
pip install -r requirements.txt
```

> Note: This project uses only the Python standard library, so `requirements.txt` may be empty.

---

## How to Run

From the project root directory:

```
python main.py --input data/sales_clean.csv
python main.py --input data/sales_dirty.csv
```

---

## Program Output

When executed, the program:

* Loads and cleans CSV sales data
* Prints total revenue
* Prints revenue grouped by product
* Displays the top-selling product
* Skips invalid rows with clear warning messages
* Exports results to:

```
out/revenue_by_product.csv
```

---

## Technologies Used

* Python (standard library only)
* csv
* argparse
* Object-Oriented Programming principles

---

## Author

PATEL Meet
Advanced Python Course — Session 2
