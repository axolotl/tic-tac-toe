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
    }
  }

  setBox = (row, col) => {
    // create copy, mutate, pass back to state
    let temp = JSON.parse(JSON.stringify(this.state));
    let nextplay = this.state.xplays == true ? 'x' : 'o';
    temp.board[row][col] = nextplay;
    this.setState({
      board: temp.board,
      xplays: !this.state.xplays,
    });
  }

  render() {
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
      </div>
    )
  }
}

export default App;