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

  handleChange = e => {
    console.log(e.target.value)
  }

  handleSubmit = e => {
    e.preventDefault();
    alert(e.target.value)
  }
 
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
        {/* <div>
          <form id="my-form" onSubmit={this.handleSubmit}>
            <label htmlFor="my-input">Practice</label>
            <input id="my-input" name="the-input" type="text" onChange={this.handleChange} />
            <button type="submit">Submit</button>
          </form>
        </div> */}
      </div>
    );
  }
}

export default App;
