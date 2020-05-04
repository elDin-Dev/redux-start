import * as actionsTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    results: [],
}


const deleteResult= (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.resultElId);
    return updateObject(state, {results: updatedArray})
}

const reducer = (state = initialState, action) => {

    console.log('[reducer:]', action)

    switch (action.type) {

        case actionsTypes.STORE_RESULT:
            return updateObject(state, {
                results: state.results.concat({
                    id: new Date(),
                    value: action.result * 2,
                }),
            }
            )
        case actionsTypes.DELETE_RESULT:
            return deleteResult(state, action);

    }

    return state;
}

export default reducer;