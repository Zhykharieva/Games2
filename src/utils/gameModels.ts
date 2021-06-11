import { Game, TicTacToe } from 'game-core';
import FourInRow from '../ConnectFourStrategy';

export const gameConnectFour = new Game({
    playersList: ['Ann', 'Vasya'],
    strategy: new FourInRow(),
    fieldSize: { x: 7, y: 6 },
  });
  
export  const gameTicTacToe = new Game({
    playersList: ['PlayerOne', 'PlayerTwo'],
    strategy: new TicTacToe(),
    fieldSize: { x: 3, y: 3 },
  });
  