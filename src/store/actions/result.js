import * as actionTypes from './actionTypes';

export const storeResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        counter: res
    };
};

// using async function
export const storeAsyncResult = (res) => {
    return (dispatch, getState) => {
        console.log("----------");
        console.log(getState().ctr.counter);
        setTimeout(() => {
            dispatch(storeResult(res));
        }, 2000);
    }
};

export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        index: resElId
    };
};
