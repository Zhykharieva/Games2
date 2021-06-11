
import React, { useState } from "react";

import GameBoard from '../components/Board';
import { GameProps, ICoords } from "../@types";


const GameView: React.FC<GameProps>  = ({game, isConnectFour, isTicTacToe}) => {
    const boardZero = JSON.parse(JSON.stringify(game.field.board));

    const initialStore = {
      board: boardZero,
      boardView: boardZero.map((elem: []) => elem.map((cell: number | string | null ) => cell = null)),
    };
    
  const [board, setBoard] = useState(initialStore.board);
  const [boardView, setBoardView] = useState(initialStore.boardView);
  const isPlayerWin = game.gameInfo.strategy.checkWin(game.field.board);
  const winner = `Winner:  ${game.players[game.currentPlayerIndex].name}`;
  const nextPlayer = `Next Player:  ${game.players[game.currentPlayerIndex].name} : ${game.players[game.currentPlayerIndex].sign}`;
  const gameResult = isPlayerWin ? winner : 'Anyone wins';

  const handleClick = (coords: ICoords) => {
    if (!game.isFinished){
        const {x, y} = coords;
        const symbol = game.players[game.currentPlayerIndex].sign;
        game.makeMove(coords);
        const changedBoardView = JSON.parse(JSON.stringify(boardView));
        changedBoardView[x][y] = symbol; 
        setBoard(game.field.board);
        setBoardView(changedBoardView)
    }
    else {
    alert(`Game finished, you can't move! Press 'restart' if You want to play`)
    }              
      };
    
      const handleRestart = () => {
        game.clearBoard();
        setBoard(game.field.board);
        setBoardView(initialStore.boardView);
      }
    

  return (
    <>
      <h1>React GAME</h1>
      {isConnectFour&&(<GameBoard board={boardView} boardWidth ='430px' onClick={handleClick}/>)}
      {isTicTacToe && (<GameBoard board={boardView} boardWidth ='190px' onClick={handleClick} />)}
      <div className="info-wrapper">
        <h3>{game.isFinished ? gameResult : nextPlayer}</h3>
      </div> 
      <button onClick={handleRestart}>Restart</button>
    </>
  );
};

export default GameView;