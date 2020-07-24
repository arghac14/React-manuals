import { createStore, combineReducers, applyMiddleware } from 'redux';
import { name} from './reducer1';
import { age} from './reducer2';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({
            name: name,
            Age: age,
            show: true
        })
    );
    return store;
}