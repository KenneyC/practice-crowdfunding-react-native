import { createStore, combineReducers } from 'redux';
import {modalReducer} from '../reducers/modal';

const rootReducer = combineReducers({
    modal: modalReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
