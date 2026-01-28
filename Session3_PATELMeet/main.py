import argparse
from src.loaders import CSVLoader, JSONLoader
from src.dataset import SalesDataset
from src.analyzer import SalesAnalyzer

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", required=True)
    parser.add_argument("--format", required=True, choices=["csv", "json"])
    args = parser.parse_args()

    loader = CSVLoader() if args.format == "csv" else JSONLoader()

    dataset = SalesDataset(args.input, loader)
    dataset.load()

    analyzer = SalesAnalyzer(dataset)

    print(f"Total revenue: {analyzer.total_revenue():.2f}")
    name, value = analyzer.top_product()
    print(f"Top product: {name} ({value:.2f})")

    analyzer.export_revenue_by_product("out/revenue_by_product.csv")

if __name__ == "__main__":
    main()
