import React from "react";
import { FieldProps } from "../../@types";
import CellButton from "../Cell";

import { Board} from "./styled";

const GameBoard: React.FC<FieldProps> = ({board, onClick,  boardWidth }) => {

    
  return(
   <Board boardWidth={boardWidth}> 
    {board.map((elem, index) => 
      
        elem.map((cell: JSX.Element, ind) => 
          { 
          return cell = <CellButton key={index-ind} value={cell}  onClick={() => onClick({x: index, y: ind})}/>
          }))}
  </Board>
  )};

export default GameBoard;