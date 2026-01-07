import csv


def total_revenue(rows: list[dict]) -> float:
    return sum(r["quantity"] * r["unit_price"] for r in rows)


def revenue_by_product(rows: list[dict]) -> dict[str, float]:
    revenue = {}
    for r in rows:
        product = r["product"]
        value = r["quantity"] * r["unit_price"]
        revenue[product] = revenue.get(product, 0.0) + value
    return revenue


def top_product(revenue_dict: dict[str, float]) -> tuple[str, float]:
    return max(revenue_dict.items(), key=lambda x: x[1])


def export_revenue_by_product(revenue_dict: dict[str, float], path: str) -> None:
    with open(path, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["product", "revenue"])

        for product, revenue in revenue_dict.items():
            writer.writerow([product, round(revenue, 2)])