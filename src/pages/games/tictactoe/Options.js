import React, { useContext } from 'react'
import { State } from './State'
import "./Options.css"

const Options = () => {
  const { reset } = useContext(State);
  return <button className="new-game" style={{ marginTop: "70.5vh", marginLeft: "45vh" }} onClick={reset}>New Game</button>
}

export default Options;