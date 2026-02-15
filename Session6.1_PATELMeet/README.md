# Advanced Python — Session 6.1

## Pandas Reporting & Analytical Dashboard

This project is part of the **Advanced Python course — Session 6 (Part 1)**.
It focuses on transforming cleaned customer data into **analytical reports and summaries** using pandas, following common data analyst workflows.

Building on the cleaning pipeline from Session 5.3, this session emphasizes **aggregation, grouping, pivot tables, and basic visualization**.

---

## Project Goals

* Load a cleaned dataset using pandas
* Compute global KPIs
* Perform grouped analysis by segment and city
* Build pivot tables for multi-dimensional analysis
* Generate summary exports
* Produce a basic visualization
* Maintain a modular and reproducible project structure

---

## Project Structure

```
Session6.1_PATELMeet/
├── main.py
├── requirements.txt
├── README.md
├── src/
│   └── reporting.py
├── data/
│   └── clients_cleaned.csv
└── out/
    ├── segment_report.csv
    ├── pivot_income.csv
    └── top_cities.png
```

---

## Key Analysis Steps

### 📊 KPI Computation

The pipeline computes global metrics such as:

* Total number of rows
* Mean income
* Mean spend
* Mean margin

These provide a quick overview of the dataset health and business performance.

---

### 🧮 Segment Analysis

Using `groupby`, the project computes average income, spend, and margin per customer segment.

This helps compare customer groups and identify high-value segments.

---

### 🌆 Top Cities

The script identifies the most frequent cities in the dataset using value counts.

This highlights geographic concentration of clients.

---

### 🔀 Pivot Table

A pivot table is generated to analyze **average income by city and segment**, enabling multi-dimensional insights.

---

### 📈 Visualization

A bar chart of the top cities is produced using matplotlib and exported as an image.

---

### 💾 Exports

The pipeline writes analytical outputs to:

```
out/segment_report.csv
out/pivot_income.csv
out/top_cities.png
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
python main.py --input data/clients_cleaned.csv
```

---

## Technologies Used

* Python
* pandas
* matplotlib
* GroupBy and pivot operations
* Analytical reporting patterns

---

## Author

PATEL Meet
Advanced Python Course — Session 6.1
