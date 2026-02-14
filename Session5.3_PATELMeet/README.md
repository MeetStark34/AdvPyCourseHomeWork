# Advanced Python — Session 5.3

## Pandas Data Cleaning Pipeline

This project is part of the **Advanced Python course — Session 5 (Part 3)**.
It focuses on building a robust and reusable **data cleaning pipeline using pandas**, following real-world data engineering practices.

The objective is to safely ingest messy CSV data, normalize it, compute key performance indicators (KPIs), and export a clean dataset ready for analysis.

---

## Project Goals

* Load structured CSV data using pandas
* Handle malformed rows safely
* Normalize textual and numeric fields
* Convert dates with error tolerance
* Remove duplicates and invalid records
* Engineer new business features
* Compute summary KPIs
* Export a cleaned dataset
* Maintain a clean, modular project structure

---

## Project Structure

```
Session5.3_PATELMeet/
├── main.py
├── requirements.txt
├── README.md
├── src/
│   └── cleaning.py
├── data/
│   ├── clients_clean.csv
│   └── clients_dirty.csv
└── out/
    └── clients_cleaned.csv
```

---

## Key Pipeline Steps

### 🧩 Data Loading

* Reads CSV using pandas
* Skips malformed rows using defensive parsing
* Performs initial inspection (shape, columns, missing values)

---

### 🧼 Data Cleaning

Implemented in `cleaning.py`:

* Numeric coercion with error handling
* Date parsing with invalid-date protection
* Text normalization (city and segment)
* Duplicate removal by `client_id`
* Dropping rows with critical missing values

---

### ⚙️ Feature Engineering

The pipeline derives new business metrics:

* **margin** = income − spend
* **spend_ratio** = spend / income

These features are commonly used in customer analytics workflows.

---

### 📊 KPI Reporting

The script prints:

* Final row count
* Mean income
* Mean spend
* Top cities
* Mean margin

---

### 💾 Export

Cleaned dataset is saved to:

```
out/clients_cleaned.csv
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
python main.py --input data/clients_dirty.csv
```

You may also test with the clean dataset.

---

## Technologies Used

* Python
* pandas
* argparse
* Defensive data engineering practices

---

## Author

PATEL Meet
Advanced Python Course — Session 5.3
