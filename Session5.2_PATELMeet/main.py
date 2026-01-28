# ================= TIC TAC TOE =================

class TicTacToe:
    def __init__(self):
        self.board = [" " for _ in range(9)]
        self.current_player = "X"

    def print_board(self):
        for i in range(0, 9, 3):
            print(self.board[i], "|", self.board[i+1], "|", self.board[i+2])
        print()

    def available_moves(self):
        return [i for i, spot in enumerate(self.board) if spot == " "]

    def make_move(self, position):
        if 0 <= position < 9 and self.board[position] == " ":
            self.board[position] = self.current_player
            self.current_player = "O" if self.current_player == "X" else "X"
            return True
        return False

    def check_winner(self):
        wins = [
            (0,1,2),(3,4,5),(6,7,8),
            (0,3,6),(1,4,7),(2,5,8),
            (0,4,8),(2,4,6)
        ]
        for a, b, c in wins:
            if self.board[a] == self.board[b] == self.board[c] != " ":
                return self.board[a]
        if " " not in self.board:
            return "Draw"
        return None


# ================= MINIMAX AI =================

def minimax(game, is_maximizing):
    winner = game.check_winner()
    if winner == "X":
        return -1
    if winner == "O":
        return 1
    if winner == "Draw":
        return 0

    if is_maximizing:
        best_score = -float("inf")
        for move in game.available_moves():
            game.board[move] = "O"
            score = minimax(game, False)
            game.board[move] = " "
            best_score = max(score, best_score)
        return best_score
    else:
        best_score = float("inf")
        for move in game.available_moves():
            game.board[move] = "X"
            score = minimax(game, True)
            game.board[move] = " "
            best_score = min(score, best_score)
        return best_score


def best_move(game):
    best_score = -float("inf")
    move_choice = None

    for move in game.available_moves():
        game.board[move] = "O"
        score = minimax(game, False)
        game.board[move] = " "
        if score > best_score:
            best_score = score
            move_choice = move

    return move_choice


def human_vs_ai():
    game = TicTacToe()

    while True:
        game.print_board()

        if game.current_player == "X":
            try:
                move = int(input("Your move (0-8): "))
            except ValueError:
                print("Enter a number!")
                continue

            if not game.make_move(move):
                print("Invalid move")
                continue
        else:
            move = best_move(game)
            game.make_move(move)
            print("AI chose:", move)

        winner = game.check_winner()
        if winner:
            game.print_board()
            print("Winner:", winner)
            break


# ================= CONNECT FOUR =================

class ConnectFour:
    ROWS = 6
    COLS = 7

    def __init__(self):
        self.board = [[" " for _ in range(self.COLS)] for _ in range(self.ROWS)]
        self.current_player = "X"

    def print_board(self):
        for row in self.board:
            print("|".join(row))
        print("-" * (self.COLS * 2 - 1))

    def available_moves(self):
        return [c for c in range(self.COLS) if self.board[0][c] == " "]

    def make_move(self, col):
        if col not in self.available_moves():
            return False

        for row in reversed(range(self.ROWS)):
            if self.board[row][col] == " ":
                self.board[row][col] = self.current_player
                self.current_player = "O" if self.current_player == "X" else "X"
                return True

    def check_winner(self):
        # Horizontal
        for r in range(self.ROWS):
            for c in range(self.COLS - 3):
                if self.board[r][c] != " " and all(self.board[r][c+i] == self.board[r][c] for i in range(4)):
                    return self.board[r][c]

        # Vertical
        for r in range(self.ROWS - 3):
            for c in range(self.COLS):
                if self.board[r][c] != " " and all(self.board[r+i][c] == self.board[r][c] for i in range(4)):
                    return self.board[r][c]

        # Diagonals
        for r in range(self.ROWS - 3):
            for c in range(self.COLS - 3):
                if self.board[r][c] != " " and all(self.board[r+i][c+i] == self.board[r][c] for i in range(4)):
                    return self.board[r][c]

        for r in range(3, self.ROWS):
            for c in range(self.COLS - 3):
                if self.board[r][c] != " " and all(self.board[r-i][c+i] == self.board[r][c] for i in range(4)):
                    return self.board[r][c]

        return None


def connect_four_game():
    game = ConnectFour()

    while True:
        game.print_board()

        try:
            move = int(input(f"Player {game.current_player}, column (0-6): "))
        except ValueError:
            print("Enter a number!")
            continue

        if not game.make_move(move):
            print("Invalid column")
            continue

        winner = game.check_winner()
        if winner:
            game.print_board()
            print("Winner:", winner)
            break


# ================= MAIN MENU =================

if __name__ == "__main__":
    print("1. Tic Tac Toe vs AI")
    print("2. Connect Four")

    choice = input("Choose game: ")

    if choice == "1":
        human_vs_ai()
    else:
        connect_four_game()
