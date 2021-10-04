import { FETCH_GAME_SUCCESS } from '@store/actions/actionTypes';
import { GameState, GameAction } from '@store/types/game';

const initialState: GameState = {
  yesno: null,
};

export const gameReducer = (
  state = initialState,
  action: GameAction
): GameState => {
  switch (action.type) {
    case FETCH_GAME_SUCCESS:
      return {
        ...state,
        yesno: action.yesno,
      };
    default:
      return state;
  }
};
