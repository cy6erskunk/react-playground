import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { createStore } from 'redux';

const counter = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

const store = createStore(counter);

const render = () => {
  ReactDOM.render(
    <App value={store.getState()} store={store}/>,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
