# Advanced Python — Session 1 Lab

## CSV Sales Analysis Project

This project is part of the **Advanced Python course (Session 1)**.
The goal is to build a **clean, professional Python project** that loads sales data from CSV files, handles dirty data safely, computes key business metrics, and exports results — using **only the Python standard library**.

---

## Project Objectives

* Set up a professional Python project structure
* Work with virtual environments (venv)
* Load and clean CSV data using `csv.DictReader`
* Handle missing and invalid data gracefully
* Compute business KPIs (Key Performance Indicators)
* Run the project from the command line using arguments
* Export results to a CSV file

---

## Project Structure

```
session1/
├── main.py
├── README.md
├── requirements.txt
├── src/
│   ├── io_utils.py
│   └── stats_utils.py
├── data/
│   ├── sales_clean.csv
│   └── sales_dirty.csv
└── out/
    └── revenue_by_product.csv
```

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

* Prints total revenue
* Prints revenue grouped by product
* Displays the top-selling product
* Skips invalid rows with warning messages
* Exports results to:

```
out/revenue_by_product.csv
```

---

## Key Concepts Demonstrated

* Separation of concerns (I/O vs business logic)
* Defensive programming with real-world data
* Command-line interfaces using `argparse`
* Clean, maintainable Python code structure

---

## Author

PATEL Meet
Advanced Python Course — Session 1

