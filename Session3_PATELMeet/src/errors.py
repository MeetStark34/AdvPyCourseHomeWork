class DatasetError(Exception):
    pass

class SchemaError(DatasetError):
    pass

class ParseRowError(DatasetError):
    pass
