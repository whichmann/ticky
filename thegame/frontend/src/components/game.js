import React, { useState } from "react";
import Board from "./board";

const Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXIsNext] = useState(true);

  const moves = history.map((step, move) => {
    const previousMove = move ? "Go to move #" + move : "Reset game";
    return (
      <li key={move}>
        <button
          onClick={() => {
            goToPreviousStep(move + 1, step);
          }}
        >
          {previousMove}
        </button>
      </li>
    );
  });

  const goToPreviousStep = move => {
    console.log(move - 1)
    setHistory(history.slice(0, move));
    if (move === 0 || (move - 1) % 2) {
      setXIsNext(false);
    } else {
      setXIsNext(true);
    }
  };

  const handleClick = i => {
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";

    setHistory(winner ? history : [...history, { squares }]);
    setXIsNext(!xIsNext);
  };

  const current = history[history.length - 1];
  const winner = calculateWinner(current.squares);

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function calculateWinner(current) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        current[a] &&
        current[a] === current[b] &&
        current[a] === current[c]
      ) {
        return current[a];
      }
    }
    return null;
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={i => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ul>{moves}</ul>
      </div>
    </div>
  );
};

export default Game;
