# Advanced Python — Session 3

## Advanced OOP Data Pipeline (CSV & JSON)

This project is part of the **Advanced Python course — Session 3**.
It focuses on building a **flexible, extensible data analysis pipeline** using advanced Object-Oriented Programming (OOP) concepts such as inheritance, polymorphism, interfaces, composition, properties, and dunder methods.

The core idea is to design the pipeline **once** and allow different data sources (CSV or JSON) to be plugged in **without changing the analysis code**.

---

## Project Goals

* Apply advanced Object-Oriented Programming concepts
* Use inheritance and abstract base classes (ABC) to define clear contracts
* Implement polymorphism to support multiple data formats
* Separate responsibilities using composition
* Build Pythonic classes with properties and dunder methods
* Load and clean CSV and JSON data safely
* Compute business KPIs using reusable analysis logic
* Export computed results to a CSV file
* Run the project from the command line using arguments

---

## Project Structure

```
session3/
├── main.py
├── README.md
├── requirements.txt
├── src/
│   ├── errors.py
│   ├── models.py
│   ├── loaders.py
│   ├── dataset.py
│   └── analyzer.py
├── data/
│   ├── sales.csv
│   ├── sales.json
│   ├── sales_dirty.csv
│   └── sales_dirty.json
└── out/
    └── revenue_by_product.csv
```

---

## Key Design Concepts

* **Interfaces and Contracts (ABC)**

  * `BaseLoader` defines a strict loading interface
  * All loaders must implement the same `load()` method

* **Inheritance and Polymorphism**

  * `CSVLoader` and `JSONLoader` inherit from `BaseLoader`
  * The same pipeline works regardless of the chosen loader

* **Composition**

  * `SalesDataset` *has a* loader instead of being one
  * Loaders can be swapped without changing dataset or analysis logic

* **Domain Modeling**

  * `Sale` is an immutable data model
  * Revenue is computed using a `@property`

* **Pythonic Objects**

  * Dunder methods (`__len__`, `__iter__`, `__getitem__`, `__repr__`)
  * Dataset behaves like a native Python collection

* **Defensive Programming**

  * Invalid rows are skipped with warnings
  * Schema validation prevents silent errors

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
python main.py --format csv --input data/sales.csv
python main.py --format json --input data/sales.json
python main.py --format csv --input data/sales_dirty.csv
python main.py --format json --input data/sales_dirty.json
```

---

## Program Output

When executed, the program:

* Loads and cleans CSV or JSON sales data
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
* json
* argparse
* dataclasses
* abc (Abstract Base Classes)
* Advanced Object-Oriented Programming principles

---

## Author

PATEL Meet
Advanced Python Course — Session 3
