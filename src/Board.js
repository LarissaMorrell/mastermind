import React, {useState} from 'react';
import _ from 'lodash';
import Row from './Row';
import './Board.css';

const Board = ({setFireworks}) => {
  const [currentRow, setCurrentRow] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const solution = ['blue', 'blue', 'blue', 'yellow'];

  const checkSolution = attempt => {
    let solutionDict = _.countBy(solution);
    let black = [];
    let white = [];
    let empty = [];

    for (let i = 0; i < attempt.length; i++) {
      if (attempt[i] === solution[i]) {
        black.push('black');
      } else if (solutionDict[attempt[i]]) {
          white.push('white');
          solutionDict[attempt[i]] -= 1;
      } else {
        empty.push('');
      }
    }
    setCurrentRow(currentRow + 1);
    if (black.length === solution.length) {
      setGameCompleted(true);
      setFireworks(true);
    }
    return [...black, ...white, ...empty];
  }

  const rows = [];
  for (let i = 0; i < 10; i++) {
    rows.push(
      <Row
        rowId={i}
        key={'row-' + i}
        isActive={i === currentRow && !gameCompleted}
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
