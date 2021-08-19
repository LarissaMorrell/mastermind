import React, {Component} from "react";

import Draggable from "react-draggable";

import "./Peg.css";

class Peg extends Component {
	state = {
		activeDrags: 0,
		deltaPosition: {
			x: 0, y: 0
		}
	};

	handleDrag = (e, ui) => {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  }

	render() {
		console.log(this.state)
		return (
			<Draggable
				bounds="parent"
				grid={[20, 20]}
				onDrag={this.handleDrag}
			>
				<div className="Peg"/>
			</Draggable>
		);
	}
};

export default Peg;
