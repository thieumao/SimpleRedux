/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const defaultState = { value: 1, highlight: false };

const reducer = (state = defaultState, action) => {
    if (action.type === "UP") return { value: state.value + 1, highlight: state.highlight };
    if (action.type === "DOWN") return { value: state.value - 1, highlight: state.highlight };
    if (action.type === "CHANGE_COLOR") return { value: state.value, highlight: !state.highlight };
    return state;
}

const store = createStore(reducer);

export default class DemoRedux extends React.Component {
    render() {
        return (
          <Provider store={store}>
            <App />
          </Provider>
        );
    }
}

AppRegistry.registerComponent(appName, () => DemoRedux);