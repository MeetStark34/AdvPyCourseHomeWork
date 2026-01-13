from dataclasses import dataclass

@dataclass(frozen=True)
class Sale:
    date: str
    product: str
    quantity: int
    unit_price: float

    @property
    def revenue(self) -> float:
        return self.quantity * self.unit_price
