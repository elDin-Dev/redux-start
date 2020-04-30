
const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) => {

    console.log('[reducer:]',action)
    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1,
        }
    }

    return state;
}

export default reducer;