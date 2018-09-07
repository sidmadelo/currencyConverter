import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import Converter, {reducer} from './converter';

const middleware = [thunk];

const store = createStore(reducer, applyMiddleware(...middleware));

export default () => (
    <Provider store={store}>
        <Converter />
    </Provider>
);
