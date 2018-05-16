import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      board: [
        [...Array(3)],
        [...Array(3)],
        [...Array(3)],
      ],
      xplays: true,
      winner: '',
    }
  }

  isWinner = (board) => {
    if (this.state.winner === '') {
      let winner = '';
      for (let i = 0; i<3; i++) {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] != null) {
          winner = board[i][0];
        }
        if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] != null) {
          winner = board[0][i];
        }
      }
      if ((board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] != null) ||
          (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2])) {
        winner = board[1][1];
      }
      if (winner !== '') {
        console.log(winner)
        this.setState({winner})
      }
    }
  }

  setBox = (row, col) => {
    // create copy, mutate, pass back to state
    let temp = JSON.parse(JSON.stringify(this.state));
    if (temp.board[row][col] == null) {
      let nextplay = this.state.xplays === true ? 'X' : 'O';
      temp.board[row][col] = nextplay;
      this.isWinner(temp.board);
      this.setState({
        board: temp.board,
        xplays: !this.state.xplays,
      });
    }
  }

  render() {
    const { winner } = this.state;

    return (
      <div className='container'>
        <div className='flex-grid'>
          {this.state.board.map((row , i) => (
            <div key={i} className='row'>
              {row.map((box, j) => (
                <div key={j} className='box'>
                  <div className='data' onClick={() => this.setBox(i, j)}>
                    {box}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        {winner &&
          <p>{winner} wins!</p>
        }
      </div>
    )
  }
}

export default App;