import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './footer.css';
import App from './App';
import Clock from './Clock';
import * as serviceWorker from './serviceWorker';

//import thu vien cua redux 
import {createStore} from 'redux';
import myReducer from './reducers/index';
import { Provider } from 'react-redux';
const store = createStore(myReducer);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider> ,
    document.getElementById('content')
);

 
 
serviceWorker.unregister();
