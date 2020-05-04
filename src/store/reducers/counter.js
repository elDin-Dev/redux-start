import * as actionsTypes from '../actions/actionTypes'

const initialState = {
    counter: 0,
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
    }

    return state;
}

export default reducer;