
import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import App from './views/App.js';
import StoreProducts from './views/StoreProducts.js';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'


import textTest from './redux/reducers/textTest'
import storeReducer from './redux/reducers/storeReducer'

const rootReducer = combineReducers({
    textTest, storeReducer
});
let store = createStore(rootReducer);



require('./main.scss');

render((
    <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/store" component={StoreProducts} />
    </Router>
    </Provider>
), document.getElementById('content'));