import { RootActionTypes } from '../action-types';

const initialState = false;

export const loading = (state = initialState, action) => {
    switch (action.type) {
        case RootActionTypes.INIT_ROOT_START: {
            return true;
        }

        case RootActionTypes.INIT_ROOT_FINISH:
        case RootActionTypes.INIT_ROOT_ERROR: {
            return false;
        }

        default: {
            return state;
        }
    }
}