'use strict';

var board = [];

var currentPlayer = 1;

var columns_;
var rows_;

function vertical_check()
{

}

function horizontal_check()
{

}

function diagonal_check()
{

}

function check_win()
{
    vertical_check();
    horizontal_check();
    diagonal_check();
}

function createBoard(columns, rows)
{
    columns_ = columns;
    rows_ = rows;

    for (var i = 0; i <= rows - 1; i++) {
      board[i] = [];
      for(var j = 0; j <= columns - 1; j++)
      {
          board[i][j] = 0;
      }
  }
  console.log(board);
}

function check_play(column)
{
    console.log("COLUMN CLICKED :: " + column)
    for(var i = rows_ - 1; i >= 0; i--) {
        if (board[i][column - 1] === 0)
        {
            return i;
        }
    }
    return null;
}

function play(column)
{
    let row = check_play(column);

    if (row === null)
    {
        // alert("COLUMN FULL: please click on an empty cell");
        return;
    }
    if (board[column][row] === 0)
        board[column][row] = currentPlayer;
    console.log(board);
    check_win();
}