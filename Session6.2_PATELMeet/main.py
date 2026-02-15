import numpy as np
import matplotlib.pyplot as plt
from src.astar import astar


def create_grid():
    grid = np.zeros((10, 10))

    # obstacles
    grid[3, 1:8] = 1
    grid[6, 2:9] = 1

    return grid


def plot_path(grid, path, start, goal):
    plt.figure(figsize=(5,5))
    plt.imshow(grid, cmap="gray_r")

    if path:
        y, x = zip(*path)
        plt.plot(x, y)

    plt.scatter(start[1], start[0], marker="o", label="Start")
    plt.scatter(goal[1], goal[0], marker="x", label="Goal")
    plt.legend()
    plt.title("A* Pathfinding")

    plt.savefig("out/astar_path.png")
    plt.close()


def main():
    grid = create_grid()
    start = (0, 0)
    goal = (9, 9)

    path = astar(grid, start, goal)

    if path:
        print("Path length:", len(path))
    else:
        print("No path found")

    plot_path(grid, path, start, goal)
    print("Saved to out/astar_path.png")


if __name__ == "__main__":
    main()
