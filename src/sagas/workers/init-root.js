import { delay, put } from 'redux-saga/effects';
import { rootInitFinish } from 'src/ducks/root/actions';

export function* initRootWorker() {
    yield delay(3000);

    yield put(rootInitFinish({ content: { field: 'example' } }));
}
