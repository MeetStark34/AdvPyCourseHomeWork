import numpy as np


def load_numeric_csv(path: str) -> np.ndarray:
    rows = []

    with open(path, encoding="utf-8") as f:
        header = f.readline().strip().split(",")

        for line_no, line in enumerate(f, start=2):
            parts = [p.strip() for p in line.strip().split(",")]

            if len(parts) != len(header):
                print(f"WARNING line {line_no} skipped: wrong number of columns")
                continue

            try:
                numeric_row = []
                for value in parts:
                    if value == "" or value.upper() == "NA":
                        numeric_row.append(np.nan)
                    else:
                        numeric_row.append(float(value))
                rows.append(numeric_row)

            except ValueError as e:
                print(f"WARNING line {line_no} skipped: {e}")

    if not rows:
        return np.empty((0, len(header)))

    return np.array(rows, dtype=float)
