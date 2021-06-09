import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import weatherReducer from './weather/WeatherReducers';

const store = createStore(weatherReducer, applyMiddleware(logger, thunk));

export default store;
