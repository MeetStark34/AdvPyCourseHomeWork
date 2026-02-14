import argparse
import pandas as pd
from src.cleaning import clean_df


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", required=True)
    args = parser.parse_args()

    # Task A — load + inspect
    df = pd.read_csv(args.input, on_bad_lines="skip")

    print("Shape:", df.shape)
    print("Columns:", df.columns.tolist())
    print(df.head())
    print(df.info())
    print("Missing values:\n", df.isna().sum())

    # Task B — cleaning
    clean = clean_df(df)

    # Task C — KPIs
    print("\nFinal rows:", len(clean))
    print("Mean income:", clean["income"].mean())
    print("Mean spend:", clean["spend"].mean())
    print("Top cities:\n", clean["city"].value_counts().head(3))
    print("Mean margin:", clean["margin"].mean())

    # Task D — export
    clean.to_csv("out/clients_cleaned.csv", index=False)
    print("\nExported to out/clients_cleaned.csv")


if __name__ == "__main__":
    main()
