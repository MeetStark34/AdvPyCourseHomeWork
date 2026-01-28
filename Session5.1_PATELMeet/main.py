class BankAccount:
    def __init__(self, owner_name: str, initial_balance: float):
        self.owner_name = owner_name
        self._balance = initial_balance  # private attribute

    def deposit(self, amount: float):
        if amount > 0:
            self._balance += amount

    def withdraw(self, amount: float):
        if 0 < amount <= self._balance:
            self._balance -= amount

    def get_balance(self):
        return self._balance

class Student:
    def __init__(self, name: str):
        self.name = name
        self.grades = []

    def add_grade(self, grade: float):
        self.grades.append(grade)

    def average(self):
        if not self.grades:
            return 0
        return sum(self.grades) / len(self.grades)


class Classroom:
    def __init__(self, name: str):
        self.name = name
        self.students = []

    def add_student(self, student: Student):
        self.students.append(student)

    def class_average(self):
        if not self.students:
            return 0
        return sum(s.average() for s in self.students) / len(self.students)

class Car:
    def __init__(self, brand: str):
        self.brand = brand
        self.speed = 0
        self.engine_on = False

    def start_engine(self):
        self.engine_on = True

    def stop_engine(self):
        self.engine_on = False
        self.speed = 0

    def accelerate(self, value: float):
        if self.engine_on:
            self.speed += value
        else:
            print("Engine is off!")

    def brake(self, value: float):
        self.speed = max(0, self.speed - value)
class Book:
    def __init__(self, title: str, author: str):
        self.title = title
        self.author = author
        self.is_borrowed = False


class Library:
    def __init__(self, name: str):
        self.name = name
        self.books = []

    def add_book(self, book: Book):
        self.books.append(book)

    def borrow_book(self, title: str):
        for book in self.books:
            if book.title == title and not book.is_borrowed:
                book.is_borrowed = True
                return True
        return False

    def return_book(self, title: str):
        for book in self.books:
            if book.title == title and book.is_borrowed:
                book.is_borrowed = False
                return True
        return False


class User:
    user_count = 0

    def __init__(self, username: str, email: str):
        self.username = username
        self.email = email
        User.user_count += 1

    def display_info(self):
        print(f"{self.username} ({self.email})")

    @classmethod
    def total_users(cls):
        return cls.user_count

if __name__ == "__main__":
    # BankAccount
    acc = BankAccount("Alice", 100)
    acc.deposit(50)
    acc.withdraw(30)
    print("Balance:", acc.get_balance())

    # Classroom
    s1 = Student("Tom")
    s1.add_grade(12)
    s1.add_grade(14)

    s2 = Student("Emma")
    s2.add_grade(10)
    s2.add_grade(16)

    classroom = Classroom("Math")
    classroom.add_student(s1)
    classroom.add_student(s2)
    print("Class average:", classroom.class_average())

    # Car
    car = Car("Toyota")
    car.accelerate(50)  # should warn
    car.start_engine()
    car.accelerate(50)
    car.brake(20)
    print("Car speed:", car.speed)

    # Library
    lib = Library("City Library")
    book = Book("1984", "Orwell")
    lib.add_book(book)
    print("Borrowed:", lib.borrow_book("1984"))
    print("Returned:", lib.return_book("1984"))

    # User counter
    u1 = User("john", "john@mail.com")
    u2 = User("anna", "anna@mail.com")
    print("Total users:", User.total_users())
