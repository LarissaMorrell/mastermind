import React, { Component } from "react";

import Board from "./Board";
import Chat from "./Chat";
import Peg from "./Peg";
import "./App.css";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Chat />
          <div style={{width: 400}}>
            <Board />
          </div>
      </div>
    );
  }
}

export default App;
