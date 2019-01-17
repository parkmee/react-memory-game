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

  shuffle = characterArray => {
    let value;
    let randomNumber;
    let arrayLength = characterArray.length;
    
    while (0 !== arrayLength) {
      randomNumber = Math.floor(Math.random()* arrayLength);
      arrayLength -= 1;

      value = characterArray[arrayLength];
      characterArray[arrayLength] = characterArray[randomNumber];
      characterArray[randomNumber] = value;
    }

    return characterArray;
  }

  restart = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
    }

    this.setState({ score: 0 });

    this.state.characters.forEach(character => {
      this.resetClicks(character.id, false);
    });

    this.setState({ message: incorrectGuessMessage });
  }

  checkIfClicked = id => {
    let value;

    this.state.characters.forEach(character => {
      if(character.id === id) {
        return value = character.checkIfClicked;
      }
    })

    return value;
  }

  updateOnClick = (id, isClicked) => {
    this.setState(state => {
      const characters = state.characters.map(character => {
        if (character.id === id) {
          character.isClicked = isClicked;
        } 
        return character;
      });
      return characters;
    });
  }

  itemClicked = event => {
    const id = event.target.id;

    if (this.checkIfClicked(id) === true) {
      this.restart();
    } else {
      this.updateOnClick(id, true);

      this.setState({ score: this.state.score + 1});

      this.setState({ message: correctGuessMessage });
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
