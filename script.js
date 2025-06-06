// document.addEventListener('DOMContentLoaded', () => {
//     const board = document.getElementById('board');
//     const message = document.querySelector('.message');
//     const newGameButton = document.querySelector('.new-game-button');
//     const cells = [];

//     let currentPlayer = 'X';
//     let gameBoard = ['', '', '', '', '', '', '', '', ''];
//     let gameActive = true;

//     // Initialize the game board
//     for (let i = 0; i < 9; i++) {
//         const cell = document.createElement('div');
//         cell.classList.add('cell');
//         cell.dataset.index = i;
//         cell.addEventListener('click', handleCellClick);
//         cells.push(cell);
//         board.appendChild(cell);
//     }

//     function handleCellClick() {
//         const index = this.dataset.index;

//         if (gameBoard[index] === '' && gameActive) {
//             gameBoard[index] = currentPlayer;
//             this.textContent = currentPlayer;

//             if (checkWinner()) {
//                 endGame(`Player ${currentPlayer} wins!`);
//             } else if (gameBoard.every(cell => cell !== '')) {
//                 endGame("It's a draw!");
//             } else {
//                 currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//                 message.textContent = `Player ${currentPlayer}'s turn`;
//             }
//         }
//     }

//     function checkWinner() {
//         const winPatterns = [
//             [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
//             [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
//             [0, 4, 8], [2, 4, 6]             // Diagonals
//         ];

//         for (const pattern of winPatterns) {
//             const [a, b, c] = pattern;
//             if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
//                 highlightWinningCells([a, b, c]);
//                 return true;
//             }
//         }

//         return false;
//     }

//     function highlightWinningCells(cellsToHighlight) {
//         for (const index of cellsToHighlight) {
//             cells[index].style.backgroundColor = '#c0ffc0';
//         }
//     }

//     function endGame(result) {
//         gameActive = false;
//         message.textContent = result;
//         newGameButton.style.display = 'block';
//     }

//     newGameButton.addEventListener('click', startNewGame);

//     function startNewGame() {
//         gameBoard = ['', '', '', '', '', '', '', '', ''];
//         gameActive = true;
//         currentPlayer = 'X';
//         message.textContent = "Player X's turn";
//         newGameButton.style.display = 'none';

//         for (const cell of cells) {
//             cell.textContent = '';
//             cell.style.backgroundColor = '#fff';
//         }
//     }
// });












// working code

// document.addEventListener('DOMContentLoaded', () => {
//     const board = document.getElementById('board');
//     const message = document.querySelector('.message');
//     const newGameButton = document.querySelector('.new-game-button');
//     const cells = [];

//     let currentPlayer = 'X';
//     let gameBoard = ['', '', '', '', '', '', '', '', ''];
//     let gameActive = true;

//     // Initialize the game board
//     for (let i = 0; i < 9; i++) {
//         const cell = document.createElement('div');
//         cell.classList.add('cell');
//         cell.dataset.index = i;
//         cell.addEventListener('click', handleCellClick);
//         cells.push(cell);
//         board.appendChild(cell);
//     }

//     function handleCellClick() {
//         const index = this.dataset.index;

//         if (gameBoard[index] === '' && gameActive) {
//             gameBoard[index] = currentPlayer;
//             this.textContent = currentPlayer;

//             if (checkWinner()) {
//                 endGame(`Player ${currentPlayer} wins!`);
//             } else if (gameBoard.every(cell => cell !== '')) {
//                 endGame("It's a draw!");
//             } else {
//                 currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//                 message.textContent = `Player ${currentPlayer}'s turn`;

//                 if (currentPlayer === 'O') {
//                     setTimeout(aiMove, 500);  // AI makes a move after 500ms
//                 }
//             }
//         }
//     }

//     // AI logic - chooses a random empty cell for now
//     function aiMove() {
//         const emptyCells = gameBoard
//             .map((value, index) => value === '' ? index : null)
//             .filter(index => index !== null);

//         if (emptyCells.length > 0) {
//             const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
//             gameBoard[randomIndex] = 'O';
//             cells[randomIndex].textContent = 'O';

//             if (checkWinner()) {
//                 endGame('Player O wins!');
//             } else if (gameBoard.every(cell => cell !== '')) {
//                 endGame("It's a draw!");
//             } else {
//                 currentPlayer = 'X';
//                 message.textContent = `Player ${currentPlayer}'s turn`;
//             }
//         }
//     }

//     function checkWinner() {
//         const winPatterns = [
//             [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
//             [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
//             [0, 4, 8], [2, 4, 6]             // Diagonals
//         ];

//         for (const pattern of winPatterns) {
//             const [a, b, c] = pattern;
//             if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
//                 highlightWinningCells([a, b, c]);
//                 return true;
//             }
//         }

//         return false;
//     }

//     function highlightWinningCells(cellsToHighlight) {
//         for (const index of cellsToHighlight) {
//             cells[index].style.backgroundColor = '#c0ffc0';
//         }
//     }

//     function endGame(result) {
//         gameActive = false;
//         message.textContent = result;
//         newGameButton.style.display = 'block';
//     }

//     newGameButton.addEventListener('click', startNewGame);

//     function startNewGame() {
//         gameBoard = ['', '', '', '', '', '', '', '', ''];
//         gameActive = true;
//         currentPlayer = 'X';
//         message.textContent = "Player X's turn";
//         newGameButton.style.display = 'none';

//         for (const cell of cells) {
//             cell.textContent = '';
//             cell.style.backgroundColor = '#fff';
//         }
//     }
// });







// working using ai

// document.addEventListener('DOMContentLoaded', () => {
//     const board = document.getElementById('board');
//     const message = document.querySelector('.message');
//     const newGameButton = document.querySelector('.new-game-button');
//     const cells = [];

//     let currentPlayer = 'X';
//     let gameBoard = ['', '', '', '', '', '', '', '', ''];
//     let gameActive = true;

//     // Initialize the game board
//     for (let i = 0; i < 9; i++) {
//         const cell = document.createElement('div');
//         cell.classList.add('cell');
//         cell.dataset.index = i;
//         cell.addEventListener('click', handleCellClick);
//         cells.push(cell);
//         board.appendChild(cell);
//     }

//     function handleCellClick() {
//         const index = this.dataset.index;

//         if (gameBoard[index] === '' && gameActive) {
//             gameBoard[index] = currentPlayer;
//             this.textContent = currentPlayer;

//             if (checkWinner()) {
//                 endGame(`Player ${currentPlayer} wins!`);
//             } else if (gameBoard.every(cell => cell !== '')) {
//                 endGame("It's a draw!");
//             } else {
//                 currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//                 message.textContent = `Player ${currentPlayer}'s turn`;

//                 if (currentPlayer === 'O') {
//                     setTimeout(aiMove, 500);  // AI makes a move after 500ms
//                 }
//             }
//         }
//     }

//     // AI logic using minimax algorithm
//     function aiMove() {
//         const bestMove = minimax(gameBoard, 'O').index;
//         gameBoard[bestMove] = 'O';
//         cells[bestMove].textContent = 'O';

//         if (checkWinner()) {
//             endGame('Player O wins!');
//         } else if (gameBoard.every(cell => cell !== '')) {
//             endGame("It's a draw!");
//         } else {
//             currentPlayer = 'X';
//             message.textContent = `Player ${currentPlayer}'s turn`;
//         }
//     }

//     // Minimax algorithm to calculate the best move for AI
//     function minimax(board, player) {
//         const emptyCells = board.filter(cell => cell === '');
        
//         // Base cases for winner/draw
//         if (checkWinner('X')) return { score: -10 };
//         if (checkWinner('O')) return { score: 10 };
//         if (emptyCells.length === 0) return { score: 0 };

//         const moves = [];
//         for (let i = 0; i < 9; i++) {
//             if (board[i] === '') {
//                 const move = {};
//                 move.index = i;
//                 board[i] = player;

//                 if (player === 'O') {
//                     const result = minimax(board, 'X');
//                     move.score = result.score;
//                 } else {
//                     const result = minimax(board, 'O');
//                     move.score = result.score;
//                 }

//                 board[i] = '';  // Reset the board after trying the move
//                 moves.push(move);
//             }
//         }

//         // Find the best move
//         let bestMove;
//         if (player === 'O') {
//             let bestScore = -Infinity;
//             for (const move of moves) {
//                 if (move.score > bestScore) {
//                     bestScore = move.score;
//                     bestMove = move;
//                 }
//             }
//         } else {
//             let bestScore = Infinity;
//             for (const move of moves) {
//                 if (move.score < bestScore) {
//                     bestScore = move.score;
//                     bestMove = move;
//                 }
//             }
//         }
//         return bestMove;
//     }

//     function checkWinner(player = currentPlayer) {
//         const winPatterns = [
//             [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
//             [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
//             [0, 4, 8], [2, 4, 6]             // Diagonals
//         ];

//         for (const pattern of winPatterns) {
//             const [a, b, c] = pattern;
//             if (gameBoard[a] === player && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
//                 highlightWinningCells([a, b, c]);
//                 return true;
//             }
//         }

//         return false;
//     }

//     function highlightWinningCells(cellsToHighlight) {
//         for (const index of cellsToHighlight) {
//             cells[index].style.backgroundColor = '#c0ffc0';
//         }
//     }

//     function endGame(result) {
//         gameActive = false;
//         message.textContent = result;
//         newGameButton.style.display = 'block';
//     }

//     newGameButton.addEventListener('click', startNewGame);

//     function startNewGame() {
//         gameBoard = ['', '', '', '', '', '', '', '', ''];
//         gameActive = true;
//         currentPlayer = 'X';
//         message.textContent = "Player X's turn";
//         newGameButton.style.display = 'none';

//         for (const cell of cells) {
//             cell.textContent = '';
//             cell.style.backgroundColor = '#fff';
//         }
//     }
// });





// no change in the cell of the code


// document.addEventListener('DOMContentLoaded', () => {
//     const board = document.getElementById('board');
//     const message = document.querySelector('.message');
//     const newGameButton = document.querySelector('.new-game-button');
//     const cells = [];

//     let currentPlayer = 'X';
//     let gameBoard = ['', '', '', '', '', '', '', '', ''];
//     let gameActive = true;

//     // Initialize the game board
//     for (let i = 0; i < 9; i++) {
//         const cell = document.createElement('div');
//         cell.classList.add('cell');
//         cell.dataset.index = i;
//         cell.addEventListener('click', handleCellClick);
//         cells.push(cell);
//         board.appendChild(cell);
//     }

//     function handleCellClick() {
//         const index = this.dataset.index;

//         if (gameBoard[index] === '' && gameActive) {
//             gameBoard[index] = currentPlayer;
//             this.textContent = currentPlayer;

//             if (checkWinner(currentPlayer)) {
//                 endGame(`Player ${currentPlayer} wins!`);
//                 highlightWinningCells(checkWinner(currentPlayer));
//             } else if (gameBoard.every(cell => cell !== '')) {
//                 endGame("It's a draw!");
//             } else {
//                 currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//                 message.textContent = `Player ${currentPlayer}'s turn`;

//                 if (currentPlayer === 'O') {
//                     setTimeout(aiMove, 500);  // AI makes a move after 500ms
//                 }
//             }
//         }
//     }

//     // AI logic using minimax algorithm
//     function aiMove() {
//         const bestMove = minimax(gameBoard, 'O').index;
//         gameBoard[bestMove] = 'O';
//         cells[bestMove].textContent = 'O';

//         if (checkWinner('O')) {
//             endGame('Player O wins!');
//             highlightWinningCells(checkWinner('O'));
//         } else if (gameBoard.every(cell => cell !== '')) {
//             endGame("It's a draw!");
//         } else {
//             currentPlayer = 'X';
//             message.textContent = `Player ${currentPlayer}'s turn`;
//         }
//     }

//     // Minimax algorithm to calculate the best move for AI
//     function minimax(board, player) {
//         const emptyCells = board.filter(cell => cell === '');

//         // Base cases for winner/draw
//         if (checkWinner('X')) return { score: -10 };
//         if (checkWinner('O')) return { score: 10 };
//         if (emptyCells.length === 0) return { score: 0 };

//         const moves = [];
//         for (let i = 0; i < 9; i++) {
//             if (board[i] === '') {
//                 const move = {};
//                 move.index = i;
//                 board[i] = player;

//                 if (player === 'O') {
//                     const result = minimax(board, 'X');
//                     move.score = result.score;
//                 } else {
//                     const result = minimax(board, 'O');
//                     move.score = result.score;
//                 }

//                 board[i] = '';  // Reset the board after trying the move
//                 moves.push(move);
//             }
//         }

//         // Find the best move
//         let bestMove;
//         if (player === 'O') {
//             let bestScore = -Infinity;
//             for (const move of moves) {
//                 if (move.score > bestScore) {
//                     bestScore = move.score;
//                     bestMove = move;
//                 }
//             }
//         } else {
//             let bestScore = Infinity;
//             for (const move of moves) {
//                 if (move.score < bestScore) {
//                     bestScore = move.score;
//                     bestMove = move;
//                 }
//             }
//         }
//         return bestMove;
//     }

//     function checkWinner(player) {
//         const winPatterns = [
//             [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
//             [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
//             [0, 4, 8], [2, 4, 6]             // Diagonals
//         ];

//         for (const pattern of winPatterns) {
//             const [a, b, c] = pattern;
//             if (gameBoard[a] === player && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
//                 return [a, b, c];
//             }
//         }

//         return false;
//     }

//     function highlightWinningCells(cellsToHighlight) {
//         if (cellsToHighlight) {
//             for (const index of cellsToHighlight) {
//                 cells[index].style.backgroundColor = '#c0ffc0';
//             }
//         }
//     }

//     function endGame(result) {
//         gameActive = false;
//         message.textContent = result;
//         newGameButton.style.display = 'block';
//     }

//     newGameButton.addEventListener('click', startNewGame);

//     function startNewGame() {
//         gameBoard = ['', '', '', '', '', '', '', '', ''];
//         gameActive = true;
//         currentPlayer = 'X';
//         message.textContent = "Player X's turn";
//         newGameButton.style.display = 'none';

//         for (const cell of cells) {
//             cell.textContent = '';
//             cell.style.backgroundColor = '#fff';
//         }
//     }
// });







document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const message = document.querySelector('.message');
    const newGameButton = document.querySelector('.new-game-button');
    const cells = [];

    let currentPlayer;
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    // Initialize the game board
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        cell.addEventListener('click', handleCellClick);
        cells.push(cell);
        board.appendChild(cell);
    }

    // Randomly decide which player starts the game
    function decideFirstPlayer() {
        currentPlayer = Math.random() < 0.5 ? 'X' : 'O';
        message.textContent = `Player ${currentPlayer}'s turn`;

        // If AI starts first, make the first move immediately
        if (currentPlayer === 'O') {
            setTimeout(aiMove, 500);
        }
    }

    function handleCellClick() {
        const index = this.dataset.index;

        if (gameBoard[index] === '' && gameActive) {
            gameBoard[index] = currentPlayer;
            this.textContent = currentPlayer;

            if (checkWinner(currentPlayer)) {
                endGame(`Player ${currentPlayer} wins!`);
                highlightWinningCells(checkWinner(currentPlayer));
            } else if (gameBoard.every(cell => cell !== '')) {
                endGame("It's a draw!");
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                message.textContent = `Player ${currentPlayer}'s turn`;

                if (currentPlayer === 'O') {
                    setTimeout(aiMove, 500);  // AI makes a move after 500ms
                }
            }
        }
    }

    // AI logic using minimax algorithm
    function aiMove() {
        const bestMove = minimax(gameBoard, 'O').index;
        gameBoard[bestMove] = 'O';
        cells[bestMove].textContent = 'O';

        if (checkWinner('O')) {
            endGame('Player O wins!');
            highlightWinningCells(checkWinner('O'));
        } else if (gameBoard.every(cell => cell !== '')) {
            endGame("It's a draw!");
        } else {
            currentPlayer = 'X';
            message.textContent = `Player ${currentPlayer}'s turn`;
        }
    }

    // Minimax algorithm to calculate the best move for AI
    function minimax(board, player) {
        const emptyCells = board.filter(cell => cell === '');

        // Base cases for winner/draw
        if (checkWinner('X')) return { score: -10 };
        if (checkWinner('O')) return { score: 10 };
        if (emptyCells.length === 0) return { score: 0 };

        const moves = [];
        for (let i = 0; i < 9; i++) {
            if (board[i] === '') {
                const move = {};
                move.index = i;
                board[i] = player;

                if (player === 'O') {
                    const result = minimax(board, 'X');
                    move.score = result.score;
                } else {
                    const result = minimax(board, 'O');
                    move.score = result.score;
                }

                board[i] = '';  // Reset the board after trying the move
                moves.push(move);
            }
        }

        // Find the best move
        let bestMove;
        if (player === 'O') {
            let bestScore = -Infinity;
            for (const move of moves) {
                if (move.score > bestScore) {
                    bestScore = move.score;
                    bestMove = move;
                }
            }
        } else {
            let bestScore = Infinity;
            for (const move of moves) {
                if (move.score < bestScore) {
                    bestScore = move.score;
                    bestMove = move;
                }
            }
        }
        return bestMove;
    }

    function checkWinner(player) {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (gameBoard[a] === player && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                return [a, b, c];
            }
        }

        return false;
    }

    function highlightWinningCells(cellsToHighlight) {
        if (cellsToHighlight) {
            for (const index of cellsToHighlight) {
                cells[index].style.backgroundColor = '#c0ffc0';
            }
        }
    }

    function endGame(result) {
        gameActive = false;
        message.textContent = result;
        newGameButton.style.display = 'block';
    }

    newGameButton.addEventListener('click', startNewGame);

    function startNewGame() {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;
        currentPlayer = 'X';  // Reset to X
        newGameButton.style.display = 'none';

        for (const cell of cells) {
            cell.textContent = '';
            cell.style.backgroundColor = '#fff';
        }

        decideFirstPlayer();  // Randomly choose the first player again
    }

    // Start the game with a random first player
    decideFirstPlayer();
});
