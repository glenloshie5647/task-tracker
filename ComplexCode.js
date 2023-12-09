/*
Filename: ComplexCode.js

This code is a complex implementation of a tic-tac-toe game using advanced JavaScript concepts such as object-oriented programming, module pattern, and event-driven programming. It utilizes HTML5 canvas for rendering the game board and supports two players. Enjoy!

*/

// Module Pattern
const TicTacToe = (() => {
  // Private Variables
  let canvas, ctx;
  let currentPlayer;
  let board;
  let gameOver;

  // Private Methods
  const initializeBoard = () => {
    board = [['', '', ''], ['', '', ''], ['', '', '']];
  };

  const drawBoard = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const cellWidth = canvas.width / 3;
    const cellHeight = canvas.height / 3;
    
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const x = j * cellWidth + cellWidth / 2;
        const y = i * cellHeight + cellHeight / 2;
        const symbol = board[i][j];

        ctx.strokeRect(
          j * cellWidth,
          i * cellHeight,
          cellWidth,
          cellHeight
        );

        ctx.font = "48px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        
        if (symbol === 'X') {
          ctx.fillText(symbol, x, y);
        } else if (symbol === 'O') {
          ctx.beginPath();
          ctx.arc(x, y, 48, 0, 2 * Math.PI);
          ctx.stroke();
        }
      }
    }
  };

  const checkWin = (player) => {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === player &&
        board[i][1] === player &&
        board[i][2] === player
      ) {
        return true;
      }
    }

    // Check columns
    for (let j = 0; j < 3; j++) {
      if (
        board[0][j] === player &&
        board[1][j] === player &&
        board[2][j] === player
      ) {
        return true;
      }
    }

    // Check diagonals
    if (
      board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player
    ) {
      return true;
    }
    if (
      board[0][2] === player &&
      board[1][1] === player &&
      board[2][0] === player
    ) {
      return true;
    }

    return false;
  };

  const switchPlayer = () => {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  };

  const handleCellClick = (event) => {
    if (gameOver) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const cellWidth = canvas.width / 3;
    const cellHeight = canvas.height / 3;

    const i = Math.floor(y / cellHeight);
    const j = Math.floor(x / cellWidth);

    if (board[i][j] === '') {
      board[i][j] = currentPlayer;
      drawBoard();

      if (checkWin(currentPlayer)) {
        gameOver = true;
        alert(`Player ${currentPlayer} wins!`);
      } else if (board.flat().every((cell) => cell !== '')) {
        gameOver = true;
        alert(`It's a draw!`);
      } else {
        switchPlayer();
      }
    }
  };

  // Public Method
  const startGame = () => {
    canvas = document.getElementById('board');
    ctx = canvas.getContext('2d');
    canvas.addEventListener('click', handleCellClick);

    initializeBoard();
    currentPlayer = 'X';
    gameOver = false;

    drawBoard();
  };

  return {
    startGame,
  };
})();

// Usage
TicTacToe.startGame();
