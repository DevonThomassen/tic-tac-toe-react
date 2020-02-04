import React, { Component } from 'react';
import Board from './Board';
import CalculateWinner from '../Classes/CalculateWinner';

interface State {
  readonly squareAmount: number;
  xIsNext: boolean;
  stepNumber: number;
  history: Array<{ squares: Array<null | string> }>;
}

class Game extends Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      squareAmount: 9,
      stepNumber: 0,
      xIsNext: true
    };
  }

  private handleClick(i: number): void {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[this.state.stepNumber];
    const squares = current.squares.slice();

    if (CalculateWinner(squares) || squares[i])
      return

    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    })
  }

  private jumpTo(step: number) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = CalculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        `Go to move #${move}` :
        `Go to game start`;
      return (
        <li key={`move${move}`}>
          <button
            onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })

    let status;
    if (winner)
      status = `Winner: ` + winner;
    else
      status = `Next player: ${this.state.xIsNext ? "X" : "O"}`

    return (
      <div className="game">
        <Board
          onClick={i => this.handleClick(i)}
          squareAmount={this.state.squareAmount}
          squares={current.squares}
          xIsNext={this.state.xIsNext} />

        <div className="info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    )
  }

}

export default Game;
