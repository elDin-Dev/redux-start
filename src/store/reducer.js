import { bindActionCreators } from "redux";
import * as actionsTypes from './actions'

const initialState = {
    counter: 0,
    results: [],
}

const reducer = (state = initialState, action) => {

    console.log('[reducer:]', action)

    switch (action.type) {
        case actionsTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState

        case actionsTypes.DECREMENT:

            return {
                ...state,
                counter: state.counter - 1,
            }
        case actionsTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val,
            };

        case actionsTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val,
            };
        case actionsTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({
                    value: state.counter,
                    id: new Date(),
                }),
            };
        case actionsTypes.DELETE_RESULT:
        
        /*
        const id=2;        
        const newArray = [...state.results]
        newArray.splice(id,1);
        */

        //Copy an array--->const updatedArray = state.reducer.filter(result=>true);

        const updatedArray = state.results.filter(result=>result.id !== action.resultElId);

        return {
                ...state,
                results: updatedArray,
            };


    }

    return state;
}

export default reducer;