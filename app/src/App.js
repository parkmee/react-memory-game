import React, { Component } from "react";
import pieces from "./pieces.json";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Board from "./components/Board";
import GameTile from "./components/GameTile";

class App extends Component {
  state = {
    pieces
  };

  render() {
    return (
      <div>
      <Navbar />
      <Header />
      <Board>
        {
          this.state.pieces.map(piece =>
            <GameTile
              {...piece}
            />
          )
        }
      </Board>
    </div>
    )
  }
}

export default App;
