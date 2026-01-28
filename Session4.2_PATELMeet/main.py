import argparse
import numpy as np
from src.np_io import load_numeric_csv
from src.np_stats import (
    column_means,
    column_mins,
    column_maxs,
    filter_rows_by_column,
    correlation_matrix,
)


def main():
    parser = argparse.ArgumentParser(description="NumPy Data Analysis")
    parser.add_argument("--input", required=True)
    args = parser.parse_args()

    data = load_numeric_csv(args.input)

    print("Means:", column_means(data))
    print("Mins:", column_mins(data))
    print("Maxs:", column_maxs(data))

    filtered = filter_rows_by_column(data, col_index=1, threshold=30)
    print("Rows with age > 30:", filtered)

    corr = correlation_matrix(data)
    print("Correlation matrix:\n", corr)

    np.savetxt("out/filtered_rows.csv", filtered, delimiter=",", fmt="%.2f")
    np.savetxt("out/correlation_matrix.csv", corr, delimiter=",", fmt="%.3f")


if __name__ == "__main__":
    main()
