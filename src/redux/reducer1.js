import * as Action from './Action';

export const name = (state={
    name: "arghadip C",
    isLoading: false,
}, action)=>{


    switch(action.type){
        case Action.CHANGE_NAME:
            
            var name = action.payload.name;
            var date = new Date().toISOString();

            return state.concat(name, date);
            
            // return state = "newargha";
            // return [...state, action.payload.name]
        
        case Action.CHANGE_NAME_LOADING:
            return {...state, isLoading:true}
        default:
            return state;
    }   
}