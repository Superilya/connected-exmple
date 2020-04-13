import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import reducers from 'src/ducks';
import sagas from 'src/sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export const configureStore = history =>  {
    const store = createStore(
        reducers(history),
        composeEnhancers(applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware
        ))
    );

    sagaMiddleware.run(sagas);

    return store;
}
