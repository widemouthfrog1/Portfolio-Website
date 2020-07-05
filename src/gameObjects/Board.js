import React from "react";
import Tile from "./Tile";
import "./Board.css";

class Board extends React.Component {
  renderTile(x, y) {
    return (
      <Tile
        value={this.props.tiles[x][y]}
        onClick={() => this.props.onClick(x, y)}
      />
    );
  }

  render() {
    return (
      <div className="board-rows">
        <div className="board-row">
          {this.renderTile(0, 2)}
          {this.renderTile(1, 2)}
          {this.renderTile(2, 2)}
        </div>
        <div className="board-row">
          {this.renderTile(0, 1)}
          {this.renderTile(1, 1)}
          {this.renderTile(2, 1)}
        </div>
        <div className="board-row">
          {this.renderTile(0, 0)}
          {this.renderTile(1, 0)}
          {this.renderTile(2, 0)}
        </div>
      </div>
    );
  }
}

export default Board;
