import React, {useState} from "react";

import "./Peg.css";

const COLORS = ['blue', 'yellow', 'red', 'green', 'white', 'black'];

const Peg = ({updateRow, isActive}) => {
	const [colorIndex, setColorIndex] = useState(null);

	const handleClick = () => {
		if (!isActive) return;
		setColorIndex((colorIndex + 1) % COLORS.length);
		updateRow(COLORS[colorIndex + 1]);
	}

	const colorClass = colorIndex !== null ? ' ' + COLORS[colorIndex] : ' empty';
	return (
		<div className={'Peg' + colorClass} onClick={handleClick} />
	);
};

export default Peg;
