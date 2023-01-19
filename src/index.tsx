import ReactDOM from 'react-dom/client';
import './styles/main.css';
import App from './App';
import React from 'react';
import {Provider} from 'react-redux';
import rootReducer from './store';
import {legacy_createStore} from 'redux';

const store = legacy_createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
