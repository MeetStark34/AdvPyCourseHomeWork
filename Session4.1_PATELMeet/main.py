class Student:
    def __init__(self, name: str, grades: list[float]):
        self.name = name
        self.grades = grades

    def average(self) -> float:
        return sum(self.grades) / len(self.grades)

    def has_passed(self) -> bool:
        return self.average() >= 10

    def __repr__(self):
        return f"Student(name={self.name}, avg={self.average():.2f})"

class BankAccount:
    def __init__(self, owner: str, balance: float = 0.0):
        self.owner = owner
        self._balance = balance

    @property
    def balance(self):
        return self._balance

    def deposit(self, amount: float):
        if amount > 0:
            self._balance += amount

    def withdraw(self, amount: float):
        if 0 < amount <= self._balance:
            self._balance -= amount

    def __repr__(self):
        return f"BankAccount(owner={self.owner}, balance={self._balance:.2f})"

class Car:
    def __init__(self, brand: str, fuel: float):
        self.brand = brand
        self.fuel = fuel

    def drive(self, distance: float):
        fuel_needed = distance * 0.1
        if fuel_needed <= self.fuel:
            self.fuel -= fuel_needed
            print(f"{self.brand} drove {distance} km")
        else:
            print("Not enough fuel")

    def refuel(self, amount: float):
        self.fuel += amount

    def __repr__(self):
        return f"Car(brand={self.brand}, fuel={self.fuel:.1f})"

if __name__ == "__main__":
    # Student
    s = Student("Alice", [12, 15, 9])
    print(s, "Passed:", s.has_passed())

    # Bank account
    acc = BankAccount("Bob", 100)
    acc.deposit(50)
    acc.withdraw(30)
    print(acc)

    # Car
    car = Car("Toyota", 20)
    car.drive(50)
    car.refuel(10)
    print(car)
