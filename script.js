const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        const index = cell.getAttribute('data-index');
        
        if (board[index] === '') {
            board[index] = currentPlayer;
            cell.textContent = currentPlayer;
            if (checkWin()) {
                message.textContent = "O seu presente é um abraço virtual s2";
                endGame();
            } else if (board.every(cell => cell !== '')) {
                message.textContent = "Empate!";
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
});

function checkWin() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winPatterns.some(pattern => {
        return pattern.every(index => board[index] === currentPlayer);
    });
}

function endGame() {
    cells.forEach(cell => cell.style.pointerEvents = 'none');
}
