import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';
import { configureStore } from 'src/store';
import { createBrowserHistory } from 'history';
import { config } from 'src/routing';

const history = createBrowserHistory();
const store = configureStore(history);

export const App = () => {
    console.log('app');

    return (
        <Provider store={store}>
            <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
                <Switch>
                    { config.map(route => (
                        <Route { ...route } />
                    )) }
                </Switch>
            </ConnectedRouter>
        </Provider>
    )
};
