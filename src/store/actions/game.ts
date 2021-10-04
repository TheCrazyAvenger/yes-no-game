import axios from 'axios';
import { Dispatch } from 'redux';
import { FETCH_GAME_SUCCESS } from './actionTypes';

export const fetchGame = () => {
  return async (dispatch: Dispatch) => {
    try {
      const responce = await axios.get(
        'https://yes-no-game-4cf4a-default-rtdb.firebaseio.com/yesno.json'
      );

      const yesno = Object.values(responce.data)[0];

      dispatch({
        type: FETCH_GAME_SUCCESS,
        yesno,
      });
    } catch (e) {
      console.log(e);
    }
  };
};
