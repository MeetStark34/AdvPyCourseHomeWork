class SalesAnalyzer:
    def __init__(self, sales):
        self.sales = sales

    def total_revenue(self):
        return sum(s.revenue for s in self.sales)

    def revenue_by_product(self):
        revenue = {}
        for s in self.sales:
            revenue[s.product] = revenue.get(s.product, 0.0) + s.revenue
        return revenue

    def top_product(self):
        revenue = self.revenue_by_product()
        if not revenue:
            return ("", 0.0)
        return max(revenue.items(), key=lambda x: x[1])

    def export_revenue_by_product(self, path):
        import csv
        with open(path, "w", newline="", encoding="utf-8") as f:
            writer = csv.writer(f)
            writer.writerow(["product", "revenue"])
            for p, r in self.revenue_by_product().items():
                writer.writerow([p, round(r, 2)])
