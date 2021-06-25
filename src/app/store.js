// import { configureStore } from '@reduxjs/toolkit';
import {createStore} from 'redux'
import allReducers from '../redux/reducers/index';


let reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const store = createStore(allReducers,reduxDevTools);
