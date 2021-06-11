import { useState } from 'react';
import GameView from '../GameView';
import { gameTicTacToe, gameConnectFour } from '../utils/gameModels'


const Auth = () => {
  const [isTicTacToe, setTicTacToe] = useState(false)
  const [isFourInRow, setFourInRow] = useState(false)
  
  const handleGameChoose = ({target}: React.ChangeEvent<HTMLSelectElement>) => {
    const value = target.value;
   
    if(value === 'TicTacToeGame'){
      setTicTacToe(true);
      setFourInRow(false)
    }
    else {
      setTicTacToe(false);
      setFourInRow(true)
    }
  }
  return (
    <div className="App">
      <select name="" id="" onChange={handleGameChoose}>
      <option value="">Choose the game</option>
        <option value="TicTacToeGame">TicTacToeGame</option>
        <option value="FourInRow">FourInRow</option>
      </select>
     
     { isTicTacToe &&  (<GameView game={gameTicTacToe} isConnectFour={false} isTicTacToe={true}/>)}
     { isFourInRow && (<GameView game={gameConnectFour} isConnectFour={true} isTicTacToe={false}/>)}
    </div>
  );

};
export default Auth