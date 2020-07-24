import { createStore, combineReducers } from 'redux';
import { name} from './reducer1';
import { age} from './reducer2';

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