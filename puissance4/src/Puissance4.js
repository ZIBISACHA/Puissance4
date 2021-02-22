import $ from 'jquery'
import React from 'react'


class Puissance4 extends React.Component {
    constructor(props) {
      super(props);
      this.columns = props.column;
      this.rows = props.rows;
      this.board = [];
  
      this.createGameBoard();
    }
  
    createGameBoard()
    {
      for (let i = 0; i < this.rows - 1; i++)
      {
        this.board[i] = new Array(this.columns);
        for (let j = 0; j < this.columns - 1; j++)
        {
            this.board[i][j] = "<div>red</div>";
        }
      }
    }
  
    render() {
      return(
        <div id="gameboard">
        </div>
      )
    }
}
  
export default Puissance4;