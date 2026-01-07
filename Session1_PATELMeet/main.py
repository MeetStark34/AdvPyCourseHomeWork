import argparse
from src.io_utils import load_sales
from src.stats_utils import (
    total_revenue,
    revenue_by_product,
    top_product,
    export_revenue_by_product,)

def main():
    parser = argparse.ArgumentParser(description="CSV Sales Analysis")
    parser.add_argument("--input", required=True, help="Path to sales CSV file")
    args = parser.parse_args()

    rows = load_sales(args.input)

    total = total_revenue(rows)
    by_product = revenue_by_product(rows)
    top = top_product(by_product)

    print(f"Total revenue: {total:.2f}")
    print("Revenue by product:")
    for product, value in by_product.items():
        print(f"  {product}: {value:.2f}")

    print(f"Top product: {top[0]} ({top[1]:.2f})")

    export_revenue_by_product(by_product, "out/revenue_by_product.csv")

if __name__ == "__main__":
    main()
