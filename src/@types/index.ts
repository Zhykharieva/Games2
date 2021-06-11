import { IFieldProps, IGameProps, IPlayersInfo } from "game-core/dist/@types/types";

export type CellProps = {
    value: any
    onClick(): void
  };

export type FieldProps = {
    board: [][]
    boardWidth: string
    onClick(coords: ICoords): void
};

export interface ICoords {
    x: number
    y: number
};

interface IGame {
        currentPlayerIndex: number;
        field: IFieldProps;
        gameInfo: any;
        isFinished: boolean;
        players: Array<IPlayersInfo>;
        clearBoard: () => void;
        makeMove: (coords: ICoords) => void;
}
export type GameProps = {
    game: IGame
    isConnectFour: boolean
    isTicTacToe: boolean
  };
