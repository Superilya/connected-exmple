import { config } from 'src/routing';
import { put } from 'redux-saga/effects';
import { matchPath } from 'react-router';
import qs from 'qs';

export const locationChange = function* (action) {
    let isFound = false;
    let i = 0;

    while (i < config.length && !isFound) {
        const route = config[i];
        const match = matchPath(action.payload.location.pathname, route);

        if (match && match.isExact) {
            if (typeof route.init === 'function') {
                yield put(route.init(match.params, qs.parse(action.payload.location.search)));
            }

            isFound = true;
        }
        i += 1;
    }
};
