import { RootActionTypes } from '../action-types';

const initialState = null;

export const data = (state = initialState, action) => {
    switch (action.type) {
        case RootActionTypes.INIT_ROOT_FINISH: {
            return action.data;
        }

        default: {
            return state;
        }
    }
}