import React, {useState} from 'react';
import Row from './Row';
import './Board.css';

const Board = ({}) => {
  const [currentRow, setCurrentRow] = useState(0);
  const [lastRowResult, setLastRowResult] = useState(['', '', '', '']);
  const solution = ['blue', 'blue', 'blue', 'yellow'];

  const checkSolution = attempt => {
    const clues = [];
    const missedDict = {};

    for (let i = 0; i < attempt.length; i++) {
      if (attempt[i] === solution[i]) {
        clues.push('black');
      } else {
        if (missedDict[attempt[i]]) {
          missedDict[attempt[i]] += 1;
        } else {
          missedDict[attempt[i]] = 1;
        }
      }
    }
    return [...clues, ...new Array(4 - clues.length).fill('')];
  }

  const rows = [];
  for (let i = 0; i < 10; i++) {
    rows.push(
      <Row
        rowId={i}
        key={'row-' + i}
        isActive={i === currentRow}
        checkSolution={checkSolution}
      />
    );
  }
  return (
    <div className="Board">
      {rows}
    </div>
  );
}

export default Board;
