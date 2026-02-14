import pandas as pd


def clean_df(df: pd.DataFrame) -> pd.DataFrame:
    df = df.copy()

    # numeric coercion
    for col in ["age", "income", "spend"]:
        df[col] = pd.to_numeric(df[col], errors="coerce")

    # date conversion
    df["signup_date"] = pd.to_datetime(df["signup_date"], errors="coerce")

    # text normalization
    df["city"] = df["city"].astype(str).str.strip().str.lower()
    df["city"] = df["city"].replace({"": "unknown"}).fillna("unknown")

    df["segment"] = df["segment"].astype(str).str.strip().str.upper()

    # remove duplicates
    df = df.drop_duplicates(subset=["client_id"], keep="first")

    # drop invalid rows
    df = df.dropna(subset=["age", "income", "spend"])

    # derived columns
    df["margin"] = df["income"] - df["spend"]
    df["spend_ratio"] = df["spend"] / df["income"]

    return df
