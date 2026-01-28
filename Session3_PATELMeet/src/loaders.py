import csv
import json
from abc import ABC, abstractmethod

from .models import Sale
from .errors import SchemaError, ParseRowError


REQUIRED_FIELDS = {"date", "product", "quantity", "unit_price"}


class BaseLoader(ABC):
    @abstractmethod
    def load(self, path: str) -> list[Sale]:
        pass


class CSVLoader(BaseLoader):
    def load(self, path: str) -> list[Sale]:
        sales = []

        with open(path, newline="", encoding="utf-8") as f:
            reader = csv.DictReader(f)

            if not REQUIRED_FIELDS.issubset(reader.fieldnames):
                raise SchemaError("Missing required CSV columns")

            for line_no, row in enumerate(reader, start=2):
                try:
                    product = row["product"].strip()

                    quantity_raw = row["quantity"]
                    if quantity_raw is None or quantity_raw == "":
                        raise ParseRowError("missing quantity")
                    quantity = int(quantity_raw)

                    price_raw = row["unit_price"]
                    price_raw = price_raw.replace(",", ".")
                    unit_price = float(price_raw)

                    sales.append(
                        Sale(
                            date=row["date"],
                            product=product,
                            quantity=quantity,
                            unit_price=unit_price,
                        )
                    )

                except Exception as e:
                    print(f"WARNING CSV line {line_no} skipped: {e}")

        return sales


class JSONLoader(BaseLoader):
    def load(self, path: str) -> list[Sale]:
        sales = []

        with open(path, encoding="utf-8") as f:
            data = json.load(f)

        if not data:
            return sales

        if not REQUIRED_FIELDS.issubset(data[0].keys()):
            raise SchemaError("Missing required JSON keys")

        for idx, row in enumerate(data, start=1):
            try:
                product = row["product"].strip()

                quantity_raw = row["quantity"]
                if quantity_raw is None:
                    raise ParseRowError("missing quantity")
                quantity = int(quantity_raw)

                price_raw = str(row["unit_price"]).replace(",", ".")
                unit_price = float(price_raw)

                sales.append(
                    Sale(
                        date=row["date"],
                        product=product,
                        quantity=quantity,
                        unit_price=unit_price,
                    )
                )

            except Exception as e:
                print(f"WARNING JSON record {idx} skipped: {e}")
        
        return sales