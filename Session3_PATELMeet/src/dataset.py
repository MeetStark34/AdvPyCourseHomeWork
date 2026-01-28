class SalesDataset:
    def __init__(self, path: str, loader):
        self.path = path
        self.loader = loader
        self.sales = []

    def load(self):
        self.sales = self.loader.load(self.path)

    def __repr__(self):
        return f"SalesDataset(path={self.path!r}, n_sales={len(self)})"

    def __len__(self):
        return len(self.sales)

    def __iter__(self):
        return iter(self.sales)

    def __getitem__(self, idx):
        return self.sales[idx]
