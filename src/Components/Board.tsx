import React, { Component } from 'react';
import Square from './Square';
import CalculateWinner from './CalculateWinner';

interface State {
  readonly squareAmount: number;
  squares: Array<null | string>,
  xIsNext: boolean
}

class Board extends Component<{}, State> {

  constructor(props: {}) {
    super(props);

    this.state = {
      squareAmount: 9,
      squares: Array(9).fill(null),
      xIsNext: true
    }

  }

  private handleClick(i: number): void {
    const squares = this.state.squares.slice();
    if (CalculateWinner(squares) || squares[i])
      return
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    })

  }

  render() {
    // TODO: De hoofdletter veranderen naar kleine letter
    const winner: string | null = CalculateWinner(this.state.squares);
    let status;
    if (winner)
      status = `Winner: ` + winner;
    else 
      status = `Next player: ${this.state.xIsNext ? "X" : "O"}`
    
      console.log(status)
    return (
      <div className="board">
        {[...Array(this.state.squareAmount)].map((e, i) =>
          <Square
            key={i}
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
          />)}
      </div>
    );
  }

}

export default Board;
