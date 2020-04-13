import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { root } from './root/reducer';

export default history => combineReducers({
    router: connectRouter(history),
    root
});
