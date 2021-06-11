import React from "react";
import { CellProps } from "../../@types";
import {Cell} from './styled'

const CellButton: React.FC<CellProps>= ({ value, onClick }) => {
  const style: string = value ? `squares ${value}` : `squares`;

  return (
    <Cell className={style} onClick={onClick}>
      {value}
    </Cell>
  );
};
export default CellButton;