import csv

class SalesDataset:
    def __init__(self, path: str):
        self.path = path
        self.rows = []

    def load(self) -> None:
        self.rows = []

        with open(self.path, newline="", encoding="utf-8") as f:
            reader = csv.DictReader(f)

            for line_no, row in enumerate(reader, start=2):
                try:
                    product = row["product"].strip()

                    qty_raw = row["quantity"]
                    if not qty_raw:
                        raise ValueError("missing quantity")
                    qty = int(qty_raw)

                    price_raw = row["unit_price"]
                    if not price_raw:
                        raise ValueError("missing unit_price")
                    price_raw = price_raw.replace(",", ".")
                    price = float(price_raw)

                    self.rows.append({
                        "date": row["date"],
                        "product": product,
                        "quantity": qty,
                        "unit_price": price,
                    })

                except Exception as e:
                    print(f"WARNING line {line_no} skipped: {e}")

    def totalrev(self) -> float:
        if not self.rows:
            return 0.0
        return sum(r["quantity"] * r["unit_price"] for r in self.rows)

    def revbyproduct(self) -> dict[str, float]:
        if not self.rows:
            return {}

        rev = {}
        for r in self.rows:
            prod = r["product"]
            amount = r["quantity"] * r["unit_price"]
            rev[prod] = rev.get(prod, 0.0) + amount

        return rev

    def topproduct(self) -> tuple[str, float]:
        rev = self.revbyproduct()
        if not rev:
            return ("", 0.0)
        return max(rev.items(), key=lambda x: x[1])

    def exportrev(self, path: str) -> None:
        rev = self.revbyproduct()

        with open(path, "w", newline="", encoding="utf-8") as f:
            writer = csv.writer(f)
            writer.writerow(["product", "revenue"])

            for prod, amount in rev.items():
                writer.writerow([prod, round(amount, 2)])