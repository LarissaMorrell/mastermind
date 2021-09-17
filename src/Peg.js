import React, {useState} from "react";

import "./Peg.css";

const COLORS = ['empty', 'blue', 'yellow', 'red', 'green', 'white', 'black'];

const Peg = ({updateRow, isActive, isClue, clueColor}) => {
	const [colorIndex, setColorIndex] = useState(0);

	const handleClick = () => {
		if (!isActive) return;
		setColorIndex((colorIndex + 1) % COLORS.length);
		updateRow(COLORS[colorIndex + 1]);
	}

	let colorClass = colorIndex !== null ? ' ' + COLORS[colorIndex] : '';
	if (isClue) {
		colorClass += ' clue ' + clueColor;
	}
	return (
		<div className={'Peg' + colorClass} onClick={handleClick} />
	);
};

export default Peg;
