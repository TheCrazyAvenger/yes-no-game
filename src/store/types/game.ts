import { FETCH_GAME_SUCCESS } from '@store/actions/actionTypes';

export interface IYesNo {
  title: string;
  text: string;
  solution: string;
  difficult: number;
  time: number;
  color: string;
  id: number;
}

export interface GameState {
  yesno: [IYesNo] | null;
}

interface FetchGameSuccess {
  type: typeof FETCH_GAME_SUCCESS;
  yesno: [IYesNo];
}

export type GameAction = FetchGameSuccess;
