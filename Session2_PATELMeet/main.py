import argparse
from src.sales_dataset import SalesDataset


def main():
    parser = argparse.ArgumentParser(description="Sales Dataset Analysis (OOP)")
    parser.add_argument("--input", required=True, help="Path to sales CSV file")
    args = parser.parse_args()

    ds = SalesDataset(args.input)
    ds.load()

    print(f"Total revenue: {ds.total_revenue():.2f}")
    print("Revenue by product:")
    for product, value in ds.revenue_by_product().items():
        print(f"  {product}: {value:.2f}")

    top_name, top_value = ds.top_product()
    print(f"Top product: {top_name} ({top_value:.2f})")

    ds.export_revenue_by_product("out/revenue_by_product.csv")


if __name__ == "__main__":
    main()
