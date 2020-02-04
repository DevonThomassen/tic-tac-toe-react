import React from 'react';
import Square from './Square';

interface Props {
  readonly squareAmount: number;
  squares: Array<null | string>,
  xIsNext: boolean;
  onClick: (i: number) => void;
}

const Board = (props: Props) => {
  return (
    <div className="board">
      {[...Array(props.squareAmount)].map((e, i) =>
        <Square
          key={i}
          value={props.squares[i]}
          onClick={() => props.onClick(i)}
        />)}
    </div>
  );
}

export default Board;
