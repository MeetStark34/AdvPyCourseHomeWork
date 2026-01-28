import numpy as np


def column_means(arr: np.ndarray) -> np.ndarray:
    return np.nanmean(arr, axis=0)


def column_mins(arr: np.ndarray) -> np.ndarray:
    return np.nanmin(arr, axis=0)


def column_maxs(arr: np.ndarray) -> np.ndarray:
    return np.nanmax(arr, axis=0)


def filter_rows_by_column(arr: np.ndarray, col_index: int, threshold: float) -> np.ndarray:
    return arr[arr[:, col_index] > threshold]


def correlation_matrix(arr: np.ndarray) -> np.ndarray:
    return np.corrcoef(arr, rowvar=False)
