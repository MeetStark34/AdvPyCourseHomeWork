import pandas as pd


def compute_kpis(df: pd.DataFrame) -> dict:
    return {
        "rows": len(df),
        "mean_income": df["income"].mean(),
        "mean_spend": df["spend"].mean(),
        "mean_margin": df["margin"].mean(),
    }


def revenue_by_segment(df: pd.DataFrame) -> pd.DataFrame:
    return (
        df.groupby("segment")[["income", "spend", "margin"]]
        .mean()
        .sort_index()
    )


def top_cities(df: pd.DataFrame, n: int = 5) -> pd.Series:
    return df["city"].value_counts().head(n)


def pivot_income_by_city_segment(df: pd.DataFrame) -> pd.DataFrame:
    return pd.pivot_table(
        df,
        values="income",
        index="city",
        columns="segment",
        aggfunc="mean",
    )
