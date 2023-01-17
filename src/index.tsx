import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import App from './App';
import React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import {chakraThemeConfig} from './styles/chakraThemeConfig';
import {Provider} from 'react-redux';
import rootReducer from './store';
import {legacy_createStore} from 'redux';

const store = legacy_createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <ChakraProvider theme={chakraThemeConfig}>
        <Provider store={store}>
            <App />
        </Provider>
    </ChakraProvider>
);
