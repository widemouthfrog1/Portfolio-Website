import React, { useContext } from 'react'
import { State } from './State';

const style = {
  position: "absolute",
  color: "#fda622",
  marginTop: "10vh",
  fontSize: "10vh"
}

const WinText = () => {
  const { winner, xIsNext } = useContext(State);
  if (winner !== null) {
    return <div style={style}>{winner}</div>
  } else {
    return <div style={style}>{xIsNext ? "Player X to move" : "Player O to move"}</div>
  }
}

export default WinText;