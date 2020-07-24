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