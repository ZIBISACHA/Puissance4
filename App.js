'use strict';

var board = [];

var currentPlayer = 1;

var columns_;
var rows_;

function vertical_check(column, row)
{
    var count = 0;
    // up
    for (var i = row; i >= 0; i++)
    {
        if (board[column][i] === currentPlayer)
        {
            
        }
    }
}

function horizontal_check(column, row)
{

}

function diagonal_check(column, row)
{

}

function check_win(column, row)
{
    vertical_check(column, row);
    horizontal_check(column, row);
    diagonal_check(column, row);
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
    check_win(column, row);
}