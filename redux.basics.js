const redux = require('redux');
const creatStore = redux.createStore;

const initialState = {
        counter: 0,
}

// Reducer
const rootReducer = (state = initialState, action) => {

        return state;
}

//Store
const store = creatStore(rootReducer);

console.log(store.getState());

// Dispactchin action

// Subcription
