import React, {useState, useEffect} from 'react';
import Peg from './Peg';
import './Row.css'

const Row = ({rowId, isActive, checkSolution}) => {
  const [pegValues, setPegValues] = useState(new Array(4).fill(null));
  const [clues, setClues] = useState(new Array(4).fill(''))

  const submitGuess = () => {
    if (pegValues.includes(null)) {
      return;
    }
    const clues = checkSolution(pegValues);
    setClues(clues);
  }

  const updatePegValues = (pegIdx, color) => {
    const nPegValues = pegValues;
    nPegValues[pegIdx] = color;
    setPegValues(nPegValues);
  }

  const RowClues = () => (
    <div className="RowClues">
      {clues.map((clueColor, i) => 
      <Peg key={`ans-r${rowId}-a${i}`} isClue clueColor={clueColor ? clueColor : ''} />)}
    </div>
  );

  const spaces = [];
  for (let i = 0; i < 4; i++) {
    spaces.push(<Peg key={`peg-r${rowId}-${i}`} isActive={isActive} updateRow={(color) => updatePegValues(i, color)} />);
  }
  return (
    <div className="Row" key={rowId}>
      {spaces}
      <RowClues />
      {isActive && <button onClick={submitGuess}>Submit</button>}
    </div>
  );
}

export default Row;
