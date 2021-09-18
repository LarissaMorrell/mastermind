import React, { Component } from "react";

import Board from "./Board";
import Chat from "./Chat";
import "./App.css";

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="column">
          <Board />
        </div>
        <div className="column">
          <Chat />
        </div>
      </div>
    );
  }
}

export default App;
