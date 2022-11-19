import { Dispatch } from 'redux';
import { ActionType, Action } from '../types'

export const selectCompany = (id: number) => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            dispatch({
              type: ActionType.SELECT_COMPANY,
              payload: id
            });

        } catch(err) {
            console.log(err)
        }
    }
} 