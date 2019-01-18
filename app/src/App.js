import React, { Component } from "react";
import characters from "./characters.json";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Board from "./components/Board";
import GameTile from "./components/GameTile";

const startMessage = "Click to Start";
const correctGuessMessage = "Woohoo! Point!";
const incorrectGuessMessage = "Whoops! Game Over."

class App extends Component {
  state = {
    characters,
    score: 0,
    topScore: 0,
    message: startMessage
  };

  componentDidMount() {
    this.setState({ characters: this.shuffle(this.state.characters) });
  };

  shuffle = characters => {
    for (let i = characters.length; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const character = characters[i];
      characters[i] = characters[j];
      characters[j] = character;
    }
    return characters;
  }

  resetGame = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({ 
        topScore: this.state.score,
        score: 0
      });
    }

    this.state.characters.forEach(character => {
      this.changeClickStatus(character.id, false);
    });

    this.setState({ message: incorrectGuessMessage });
  }

  checkIfClicked = id => {
    this.state.characters.forEach(character => {
      if(character.id === id) {
        return character.isClicked;
      }
    })
  }

  changeClickStatus = (id, isClickedStatus) => {
    this.setState(state => {
      const characters = state.characters.map(character => {
        if (character.id === id) {
          character.isClicked = isClickedStatus;
        } 
        return character;
      });
      return characters;
    });
  }

  onItemClick = event => {
    const id = event.target.id;

    if (this.checkIfClicked(id) === true) {
      this.resetGame();
    } else {
      this.changeClickStatus(id, true);

      this.setState({ 
        score: this.state.score + 1,
        message: correctGuessMessage
      });

    }

    this.setState({ characters: this.shuffle(this.state.characters) });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Board>
          {
            this.state.characters.map(piece =>
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
