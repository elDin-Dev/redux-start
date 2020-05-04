import * as actionsTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    results: [],
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

            /*
            const id=2;        
            const newArray = [...state.results]
            newArray.splice(id,1);
            */

            //Copy an array--->const updatedArray = state.reducer.filter(result=>true);

            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return updateObject(state, {results: updatedArray})

    }

    return state;
}

export default reducer;