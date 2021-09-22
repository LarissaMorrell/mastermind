import React, { useState, useEffect } from "react";
import PrimaryButton from "./components/PrimaryButton";
import Peg from "./Peg";
import "./Row.css";

const Row = ({ rowId, isActive, checkSolution }) => {
  const [pegValues, setPegValues] = useState(new Array(4).fill(null));
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [clues, setClues] = useState(new Array(4).fill(""));

  const submitGuess = () => {
    if (pegValues.includes(null)) {
      return;
    }
    const clues = checkSolution(pegValues);
    setClues(clues);
  };

  const updatePegValues = (pegIdx, color) => {
    const nPegValues = pegValues;
    nPegValues[pegIdx] = color;
    setButtonDisabled(nPegValues.includes(null));
    setPegValues(nPegValues);
  };

  const RowClues = () => (
    <div className="clues-container">
      <div className="clue-row">
        <Peg isClue clueColor={clues[0]} />
        <Peg isClue clueColor={clues[1]} />
      </div>
      <div className="clue-row">
        <Peg isClue clueColor={clues[2]} />
        <Peg isClue clueColor={clues[3]} />
      </div>
    </div>
  );

  const spaces = [];
  for (let i = 0; i < 4; i++) {
    spaces.push(
      <div key={`game-space-r${rowId}-${i}`}>
        <div className="outer-ring">
          <Peg
            isActive={isActive}
            updateRow={(color) => updatePegValues(i, color)}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="Row" key={rowId}>
      <RowClues />
      {spaces}
      {isActive && <div style={{width: 75}}>
        <PrimaryButton handleClick={submitGuess} text="✓" disabled={buttonDisabled} />
      </div>}
    </div>
  );
};

export default Row;
