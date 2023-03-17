import {createStore, applyMiddleware} from 'redux';
import {MoviesReducer} from '../reducer/Movierducer';
import thunk from 'redux-thunk';

// 1-create store
export const Store = createStore(MoviesReducer, applyMiddleware(thunk));
