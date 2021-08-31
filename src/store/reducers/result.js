import * as actionTypes from '../actions/actionTypes';

const initialState = {
    result: []
};

// const deleteResult = (state, action) => {
//     const newResults = [...state.result];
//     newResults.splice(action.index, 1);
//     return {
//         ...state,
//         result: newResults
//     }
// }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                // concat creats a new array than add the new item
                result: state.result.concat(action.counter)
            }
        case 'DELETE_RESULT':
            // const itemIndexToDelete = 3;
            // const updatedResult = state.result.filter((_, index) => index !== itemIndexToDelete);

            const newResults = [...state.result];
            newResults.splice(action.index, 1);
            return {
                ...state,
                result: newResults
            }
        // return deleteResult (state, action);
        default:
            return state;
            
    }

};

export default reducer;
