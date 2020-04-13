import { all, takeLatest } from 'redux-saga/effects';
import { RootActionTypes } from 'src/ducks/root/action-types';
import { LOCATION_CHANGE } from 'connected-react-router';
import { initRootWorker } from './workers/init-root';
import { locationChange } from './location';

export default function* sagas() {
    yield takeLatest(LOCATION_CHANGE, locationChange);
    yield takeLatest(RootActionTypes.INIT_ROOT_START, initRootWorker);
};
