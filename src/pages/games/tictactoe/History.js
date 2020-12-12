import React, { useContext } from 'react'
import { State } from './State'
import "./History.css"

const height = 50;
const historyStyle = {
  height: height + "vh"
}
const buttonStyle = {
  height: (height / 5) + "vh"
}

const History = () => {
  const { history, historyIndex, lookup } = useContext(State);
  let jsx = null;
  if (history !== null && history !== undefined) {
    jsx = history.map((item, i) => {
      let cN = "history-button";
      if (historyIndex === history.length - (i + 1)) {
        cN += " history-button-highlight";
      }
      return <button className={cN} style={buttonStyle} key={i} onClick={() => lookup(i)} >{i}</button>
    })
  }
  return (
    <div className="history" style={historyStyle}>
      {jsx}
    </div>

  );
}

export default History;