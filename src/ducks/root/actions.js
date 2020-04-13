import { RootActionTypes } from './action-types';

export const rootInit = () => ({
    type: RootActionTypes.INIT_ROOT_START
});

export const rootInitFinish = data => ({
    type: RootActionTypes.INIT_ROOT_FINISH,
    data
});

export const rootInitError = error => ({
    type: RootActionTypes.INIT_ROOT_ERROR,
    error
});
