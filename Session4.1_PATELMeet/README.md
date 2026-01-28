# Advanced Python — Session 4.1

## NumPy Data Analysis Project

This project is part of the **Advanced Python course — Session 4 (Part 1)**.
It focuses on performing structured numerical data analysis using **NumPy** while building a clean, modular, and reproducible Python project.

The objective is to move from basic Python data handling to **vectorized numerical computation**, which is the foundation of scientific computing, data analysis, and machine learning workflows.

---

## Project Goals

* Practice numerical data handling using **NumPy arrays**
* Build a robust CSV loader that converts data into numeric matrices
* Handle missing or invalid values safely using `NaN`
* Compute descriptive statistics efficiently using vectorized operations
* Filter data based on column conditions
* Compute a full correlation matrix
* Export processed results to CSV files
* Run the project from the command line using arguments

---

## Project Structure

```
Session4.1_PATELMeet/
├── main.py
├── README.md
├── requirements.txt
├── src/
│   ├── np_io.py
│   └── np_stats.py
├── data/
│   ├── measures_clean.csv
│   └── measures_dirty.csv
└── out/
    ├── filtered_rows.csv
    └── correlation_matrix.csv
```

---

## Key Design Concepts

* **Vectorized Computation**

  * All statistics are computed using NumPy array operations
  * Avoids slow Python loops

* **Robust Data Loading**

  * Invalid rows are skipped with warnings
  * Missing values are converted to `NaN`
  * Data is stored as a 2D NumPy array

* **Modular Design**

  * `np_io.py` handles data loading
  * `np_stats.py` handles all numerical analysis
  * `main.py` orchestrates the pipeline

* **Defensive Programming**

  * Prevents crashes from dirty or incomplete data
  * Ensures numerical functions handle `NaN` correctly

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

---

## How to Run

From the project root directory:

```
python main.py --input data/measures_clean.csv
python main.py --input data/measures_dirty.csv
```

---

## Program Output

When executed, the program:

* Loads numerical CSV data into a NumPy array
* Prints column means, minimums, and maximums
* Filters rows based on a column threshold
* Computes a correlation matrix between columns
* Exports results to:

```
out/filtered_rows.csv
out/correlation_matrix.csv
```

---

## Technologies Used

* Python
* NumPy
* argparse
* Modular project structure

---

## Author

PATEL Meet
Advanced Python Course — Session 4.1
