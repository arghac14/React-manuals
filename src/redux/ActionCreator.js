import * as Action from './Action';

export const changeName = (n) => ({
    type: Action.CHANGE_NAME,
    payload: {
        name: n
    }
});

export const changeAge = (a) => ({
    type: Action.CHANGE_AGE,
    payload: {
        Age: a
    }
});

export const fetchName = () =>(dispatch)=>{
    dispatch(nameLoading(True));

    setTimeout(()=>{
        dispatch(changeName("sas"));
    }, 2000)
}

export const nameLoading = () => ({
    type: Action.nameLoading
})

export const changeName = (n) =>({
    type: Action.changeName,
    payload: n
})