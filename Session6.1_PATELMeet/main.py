import argparse
import pandas as pd
import matplotlib.pyplot as plt
from src.reporting import (
    compute_kpis,
    revenue_by_segment,
    top_cities,
    pivot_income_by_city_segment,
)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", required=True)
    args = parser.parse_args()

    df = pd.read_csv(args.input)

    # KPIs
    kpis = compute_kpis(df)
    print("KPIs:", kpis)

    # Segment analysis
    seg = revenue_by_segment(df)
    print("\nBy segment:\n", seg)

    # Top cities
    cities = top_cities(df)
    print("\nTop cities:\n", cities)

    # Pivot
    pivot = pivot_income_by_city_segment(df)
    print("\nPivot table:\n", pivot)

    # Export
    seg.to_csv("out/segment_report.csv")
    pivot.to_csv("out/pivot_income.csv")

    # Plot
    cities.plot(kind="bar", title="Top Cities")
    plt.tight_layout()
    plt.savefig("out/top_cities.png")
    plt.close()

    print("\nExports written to out/")


if __name__ == "__main__":
    main()
import argparse
import pandas as pd
import matplotlib.pyplot as plt
from src.reporting import (
    compute_kpis,
    revenue_by_segment,
    top_cities,
    pivot_income_by_city_segment,
)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", required=True)
    args = parser.parse_args()

    df = pd.read_csv(args.input)

    # KPIs
    kpis = compute_kpis(df)
    print("KPIs:", kpis)

    # Segment analysis
    seg = revenue_by_segment(df)
    print("\nBy segment:\n", seg)

    # Top cities
    cities = top_cities(df)
    print("\nTop cities:\n", cities)

    # Pivot
    pivot = pivot_income_by_city_segment(df)
    print("\nPivot table:\n", pivot)

    # Export
    seg.to_csv("out/segment_report.csv")
    pivot.to_csv("out/pivot_income.csv")

    # Plot
    cities.plot(kind="bar", title="Top Cities")
    plt.tight_layout()
    plt.savefig("out/top_cities.png")
    plt.close()

    print("\nExports written to out/")


if __name__ == "__main__":
    main()
import argparse
import pandas as pd
import matplotlib.pyplot as plt
from src.reporting import (
    compute_kpis,
    revenue_by_segment,
    top_cities,
    pivot_income_by_city_segment,
)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", required=True)
    args = parser.parse_args()

    df = pd.read_csv(args.input)

    # KPIs
    kpis = compute_kpis(df)
    print("KPIs:", kpis)

    # Segment analysis
    seg = revenue_by_segment(df)
    print("\nBy segment:\n", seg)

    # Top cities
    cities = top_cities(df)
    print("\nTop cities:\n", cities)

    # Pivot
    pivot = pivot_income_by_city_segment(df)
    print("\nPivot table:\n", pivot)

    # Export
    seg.to_csv("out/segment_report.csv")
    pivot.to_csv("out/pivot_income.csv")

    # Plot
    cities.plot(kind="bar", title="Top Cities")
    plt.tight_layout()
    plt.savefig("out/top_cities.png")
    plt.close()

    print("\nExports written to out/")


if __name__ == "__main__":
    main()
import argparse
import pandas as pd
import matplotlib.pyplot as plt
from src.reporting import (
    compute_kpis,
    revenue_by_segment,
    top_cities,
    pivot_income_by_city_segment,
)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", required=True)
    args = parser.parse_args()

    df = pd.read_csv(args.input)

    # KPIs
    kpis = compute_kpis(df)
    print("KPIs:", kpis)

    # Segment analysis
    seg = revenue_by_segment(df)
    print("\nBy segment:\n", seg)

    # Top cities
    cities = top_cities(df)
    print("\nTop cities:\n", cities)

    # Pivot
    pivot = pivot_income_by_city_segment(df)
    print("\nPivot table:\n", pivot)

    # Export
    seg.to_csv("out/segment_report.csv")
    pivot.to_csv("out/pivot_income.csv")

    # Plot
    cities.plot(kind="bar", title="Top Cities")
    plt.tight_layout()
    plt.savefig("out/top_cities.png")
    plt.close()

    print("\nExports written to out/")


if __name__ == "__main__":
    main()
