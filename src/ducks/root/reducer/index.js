import { combineReducers } from 'redux';
import { loading } from './loading';
import { data } from './data';

export const root = combineReducers({
    loading,
    data
});
