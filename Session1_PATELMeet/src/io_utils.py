import csv

def load_sales(path: str) -> list[dict]:
    rws = []

    with open(path, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)

        for line_no, row in enumerate(reader, start=2):
            try:
                product = row["product"].strip()
                quantity_raw = row["quantity"]
                if quantity_raw is None or quantity_raw == "":
                    raise ValueError("missing quantity")
                quantity = int(quantity_raw)
                price_raw = row["unit_price"]
                if price_raw is None or price_raw == "":
                    raise ValueError("missing unit_price")
                price_raw = price_raw.replace(",", ".")
                unit_price = float(price_raw)
                rws.append(
                    {
                        "date": row["date"],
                        "product": product,
                        "quantity": quantity,
                        "unit_price": unit_price,
                    }
                )
            except Exception as e:
                print(f"WARNING line {line_no} skipped: {e}")

    return rws