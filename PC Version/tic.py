import pygame
import random

# Initialize pygame
pygame.init()

# Constants
WIDTH, HEIGHT = 300, 350
LINE_WIDTH = 5
GRID_SIZE = 3
CELL_SIZE = WIDTH // GRID_SIZE
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
RED = (255, 0, 0)
FONT = pygame.font.Font(None, 40)

# Screen setup
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Tic-Tac-Toe")

# Game variables
game_board = ["" for _ in range(9)]
player_symbol = "X"  # Default
ai_symbol = "O"
current_turn = random.choice(["player", "ai"])
winner = None

def draw_grid():
    """Draw the Tic-Tac-Toe grid"""
    screen.fill(BLACK)
    for i in range(1, GRID_SIZE):
        pygame.draw.line(screen, WHITE, (0, i * CELL_SIZE), (WIDTH, i * CELL_SIZE), LINE_WIDTH)
        pygame.draw.line(screen, WHITE, (i * CELL_SIZE, 0), (i * CELL_SIZE, WIDTH), LINE_WIDTH)

def draw_marks():
    """Draw X and O marks on the grid"""
    for i, mark in enumerate(game_board):
        if mark:
            row, col = divmod(i, GRID_SIZE)
            text = FONT.render(mark, True, WHITE)
            x, y = col * CELL_SIZE + 35, row * CELL_SIZE + 25
            screen.blit(text, (x, y))

def check_winner():
    """Check for a winner or a draw"""
    global winner
    win_patterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  # Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  # Columns
        [0, 4, 8], [2, 4, 6]             # Diagonals
    ]
    for pattern in win_patterns:
        if game_board[pattern[0]] == game_board[pattern[1]] == game_board[pattern[2]] and game_board[pattern[0]]:
            winner = f"{game_board[pattern[0]]} Wins!"
            return
    if "" not in game_board:
        winner = "It's a Draw!"

def ai_move():
    """AI makes a random move"""
    global current_turn
    available_moves = [i for i in range(9) if game_board[i] == ""]
    if available_moves:
        move = random.choice(available_moves)
        game_board[move] = ai_symbol
        check_winner()
        current_turn = "player"

def reset_game():
    """Reset the game state"""
    global game_board, winner, current_turn
    game_board = ["" for _ in range(9)]
    winner = None
    current_turn = random.choice(["player", "ai"])
    if current_turn == "ai":
        ai_move()

def draw_winner():
    """Display winner message"""
    text = FONT.render(winner, True, RED)
    screen.blit(text, (WIDTH // 3, HEIGHT - 40))
    pygame.draw.rect(screen, WHITE, (100, HEIGHT - 35, 100, 30), 2)
    text = FONT.render("New Game", True, WHITE)
    screen.blit(text, (105, HEIGHT - 35))

def draw_symbol_selection():
    """Show X/O selection screen"""
    screen.fill(BLACK)
    text = FONT.render("Choose X or O", True, WHITE)
    screen.blit(text, (80, 50))
    pygame.draw.rect(screen, WHITE, (80, 100, 50, 50), 2)
    pygame.draw.rect(screen, WHITE, (170, 100, 50, 50), 2)
    screen.blit(FONT.render("X", True, WHITE), (95, 110))
    screen.blit(FONT.render("O", True, WHITE), (185, 110))
    pygame.display.flip()

# Game loop
symbol_selected = False
running = True
while running:
    if not symbol_selected:
        draw_symbol_selection()
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            elif event.type == pygame.MOUSEBUTTONDOWN:
                x, y = event.pos
                if 80 <= x <= 130 and 100 <= y <= 150:
                    player_symbol, ai_symbol = "X", "O"
                    symbol_selected = True
                elif 170 <= x <= 220 and 100 <= y <= 150:
                    player_symbol, ai_symbol = "O", "X"
                    symbol_selected = True
                if symbol_selected and current_turn == "ai":
                    ai_move()
    else:
        draw_grid()
        draw_marks()
        if winner:
            draw_winner()
        pygame.display.flip()
        
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            elif event.type == pygame.MOUSEBUTTONDOWN and not winner:
                x, y = event.pos
                row, col = y // CELL_SIZE, x // CELL_SIZE
                index = row * GRID_SIZE + col
                if game_board[index] == "" and current_turn == "player":
                    game_board[index] = player_symbol
                    check_winner()
                    current_turn = "ai"
                    if not winner:
                        ai_move()
            elif event.type == pygame.MOUSEBUTTONDOWN and winner:
                x, y = event.pos
                if 100 <= x <= 200 and HEIGHT - 35 <= y <= HEIGHT:
                    reset_game()

pygame.quit()
