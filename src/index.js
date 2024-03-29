import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory} from 'react-router';
import routes from './routes';
import '../node_modules/jquery/dist/jquery.min';
import './styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js';


const store = configureStore();

render(
    <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')

);