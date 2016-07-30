import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './Reducers';
import Routes from './routes';
import Middlewares from './Middlewares';
import SagaMiddleware from './Middlewares/Saga';
import Sagas from './Sagas';

const store = createStore(Reducers, Middlewares);
const routes = Routes(store);

import './../stylesheet/index.scss';

SagaMiddleware.run(Sagas);

render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById("app")
);