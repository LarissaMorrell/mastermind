import React, { Component } from "react";

import Board from "./Board";
import Chat from "./Chat";
import PrimaryButton from "./components/PrimaryButton";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showFireworks: false };
  }

  setFireworks = showFireworks => this.setState({showFireworks});

  render() {
    return (
      <div className="App">
        <Board setFireworks={this.setFireworks} />
        {this.state.showFireworks && (
          <>
            <div className="pyro">
              <div className="before"></div>
              <div className="after"></div>
            </div>
            <div className="DialogBox">
              <h3>You Win!</h3>
              <p>Would you like to play another round?</p>
              <PrimaryButton handleClick={() => this.setFireworks(false)} text="Absolutely!" />
            </div>
          </>
        )}
      </div>
    );
  }
}

export default App;
