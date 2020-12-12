import React, { useState, createContext } from 'react';

export const State = createContext();


const StateProvider = (props) => {
  let b = [];
  let bl = [];
  let w = [];
  for (let i = 0; i < 8; i++) {
    b.push([]);
    for (let j = 0; j < 4; j++) {
      let c = i < 3 ? false : (i > 4 ? true : null);
      b[i].push({ x: j, y: i, isBlack: c, king: false });
      if (c !== null && c) {
        bl.push({ x: j, y: i, isBlack: c, king: false });
      }
      if (c !== null && !c) {
        w.push({ x: j, y: i, isBlack: c, king: false });
      }
    }
  }
  const [board, setBoard] = useState(b);
  const [black, setBlack] = useState(bl);
  const [white, setWhite] = useState(w);
  const [selected, setSelected] = useState(null);
  const [isBlacksTurn, setIsBlacksTurn] = useState(true);
  const [jumping, setJumping] = useState(null);

  const play = (piece, pos) => {
    let removed = null;
    if (Math.abs(piece.y - pos.y) == 2) {
      removed = { x: (piece.x + pos.x) / 2, y: (piece.y + pos.y) / 2 };
    }
    let newBoard = [];
    let newBlack = [...black];
    let newWhite = [...white];
    for (let i = 0; i < board.length; i++) {
      newBoard.push([]);
      for (let j = 0; j < board[i].length; j++) {
        if ((removed != null && removed.x === j && removed.y === i) || (piece.x === j && piece.y == i)) {
          //remove piece
          newBoard[i].push({ x: j, y: i, isBlack: null, king: false });
          if (board[i][j].isBlack) {
            newBlack = newBlack.filter((a) => a.x != j || a.y != i);
          } else {
            newWhite = newWhite.filter((a) => a.x != j || a.y != i);
          }
        } else if (pos.x === j && pos.y === i) {
          //add piece
          //king === true if was a king or if on last rank 
          if (board[i][j].isBlack) {
            newBlack.push({ x: j, y: i, isBlack: piece.isBlack, king: piece.king ? true : (piece.isBlack ? (i == 0 ? true : false) : (i == 7 ? true : false)) });
          } else {
            newWhite.push({ x: j, y: i, isBlack: piece.isBlack, king: piece.king ? true : (piece.isBlack ? (i == 0 ? true : false) : (i == 7 ? true : false)) });
          }
          newBoard[i].push({ x: j, y: i, isBlack: piece.isBlack, king: piece.king ? true : (piece.isBlack ? (i == 0 ? true : false) : (i == 7 ? true : false)) });
        } else {
          //no change
          newBoard[i].push({ x: j, y: i, isBlack: board[i][j].isBlack, king: board[i][j].king });
        }
      }
    }
    setBlack(newBlack);
    setWhite(newWhite);
    setBoard(newBoard);
    if (jumpMoves(newBoard[pos.y][pos.x], newBoard) > 0) {
      setJumping({ x: pos.x, y: pos.y });
    } else {
      setJumping(null);
      setIsBlacksTurn(!isBlacksTurn);
    }
  }

  const select = (piece) => {
    setSelected(piece);
  }

  const winner = () => {
    if (black.length == 0) {
      return "White wins!";
    }
    if (white.length == 0) {
      return "Black wins!";
    }
    if (isBlacksTurn) {
      for (let i = 0; i < black.length; i++) {
        if (getValidMoves(black[i]) > 0) {
          return null;
        }
      }
      return "White wins!"
    } else {
      for (let i = 0; i < white.length; i++) {
        if (getValidMoves(white[i]) > 0) {
          return null;
        }
      }
      return "Black wins!"
    }
  }

  const getValidMoves = (piece) => {
    if (jumping !== null) {
      if (!(piece.x == jumping.x && piece.y == jumping.y)) {
        return [];
      }
      return jumpMoves(piece, board);
    }
    let mustMovePieces = mustMove(piece);
    if (mustMovePieces.length === 0) {
      return singleMoves(piece);
    } else {
      return jumpMoves(piece, board);
    }
  }

  const singleMoves = (piece) => {
    let moves = [];
    if (piece.isBlack || piece.king) {
      if (piece.y > 0) {
        let r = right(piece.x, piece.y, true);
        if (r < 4 && board[piece.y - 1][r].isBlack === null) {
          moves.push({ x: r, y: piece.y - 1 });
        }
        let l = left(piece.x, piece.y, true);
        if (l >= 0 && board[piece.y - 1][l].isBlack === null) {
          moves.push({ x: l, y: piece.y - 1 });
        }
      }
    }

    if (!piece.isBlack || piece.king) {
      if (piece.y < 8) {
        let r = right(piece.x, piece.y, false);
        if (r >= 0 && board[piece.y + 1][r].isBlack === null) {
          moves.push({ x: r, y: piece.y + 1 });
        }
        let l = left(piece.x, piece.y, false);
        if (l < 4 && board[piece.y + 1][l].isBlack === null) {
          moves.push({ x: l, y: piece.y + 1 });
        }
      }
    }
    return moves;
  }

  const jumpMoves = (piece, board) => {
    let moves = [];
    if (piece.isBlack || piece.king) {
      if (piece.y > 1) {
        let r = right(piece.x, piece.y, true);
        if (r < 3 && board[piece.y - 1][r].isBlack === !piece.isBlack) {
          if (board[piece.y - 2][right(r, piece.y - 1, true)].isBlack === null) {
            moves.push({ x: r, y: piece.y - 1 });
          }
        }
        let l = left(piece.x, piece.y, true);
        if (l > 0 && board[piece.y - 1][l].isBlack === !piece.isBlack) {
          if (board[piece.y - 2][left(l, piece.y - 1, true)].isBlack === null) {
            moves.push({ x: l, y: piece.y - 1 });
          }
        }
      }
    }
    if (!piece.isBlack || piece.king) {
      if (piece.y < 7) {
        let r = right(piece.x, piece.y, false);
        if (r > 0 && board[piece.y + 1][r].isBlack === !piece.isBlack) {
          if (board[piece.y + 2][right(r, piece.y + 1, false)].isBlack === null) {
            moves.push({ x: r, y: piece.y + 1 });
          }
        }
        let l = left(piece.x, piece.y, false);
        if (l < 3 && board[piece.y + 1][l].isBlack === !piece.isBlack) {
          if (board[piece.y + 2][left(l, piece.y + 1, false)].isBlack === null) {
            moves.push({ x: l, y: piece.y + 1 });
          }
        }
      }
    }
    return moves;
  }

  const mustMove = () => {
    let pieces = [];
    if (isBlacksTurn) {
      for (let i = 0; i < black.length; i++) {
        if (jumpMoves(black[i]).length > 0, board) {
          pieces.push(black[i]);
        }
      }
    } else {
      for (let i = 0; i < white.length; i++) {
        if (jumpMoves(white[i]).length > 0, board) {
          pieces.push(white[i]);
        }
      }
    }
    return pieces;
  }

  const right = (x, y, up) => {
    if (up) {
      if (y % 2 == 0) {
        return x + 1;
      } else {
        return x;
      }
    } else {
      if (y % 2 == 0) {
        return x;
      } else {
        return x - 1;
      }
    }
  }

  const left = (x, y, up) => {
    if (up) {
      if (y % 2 == 0) {
        return x;
      } else {
        return x - 1;
      }
    } else {
      if (y % 2 == 0) {
        return x + 1;
      } else {
        return x;
      }
    }
  }

  return (
    <State.Provider value={{ board, isBlacksTurn, selected, select, play, getValidMoves, winner }}>
      {props.children}
    </State.Provider>
  );
}

export default StateProvider;