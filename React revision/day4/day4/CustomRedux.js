
// Redux

// State/Store -> Object


ACTION -> DISPATCH -> REDUCER(STORE) -> VIEW


// COUNT: 0

// Button(5) Button(10)

// ACTION:
// const actionIncrement = {
//     type: "INCREMENT_COUNT",
//     payload: 5,
// }

// {
//     type: "ADD_TODO_ITEM",
//     payload: 'Study redux',
// }


// {
//     type: "REMOVE_TODO_ITEM",
//     payload: 1,
// }

// // I'm a delivery boy
// DISPATCH:
// dispatch(actionIncrement);


// STORE:
// store = {
//     fruits: [],
//     TODOS: []
// }

// reducer(store, action) {
//     if(action.type == "ADD_TODO_ITEM") {
//         return {
//             ...store,
//             TODOS: [ ...store.TODOS, action.payload]
//         }
//     }
//     if(action.type == "REMOVE_TODO_ITEM") {
//         const newToDos = store.TODOS.filter((item, index) => {
//             if(index === action.payload) {
//                 return false
//             } 
//             return true
//         }),
//         return {
//             ...store,
//             TODOS: newToDos
//         }
//     }
// };
const reducerPtweb3 = (store, action) => {
    if(action.type == "ADD_TODO_ITEM") {
        return {
            ...store,
            TODOS: [ ...store.TODOS, action.payload]
        }
    }
    if(action.type == "REMOVE_TODO_ITEM") {
        const newToDos = store.TODOS.filter((item, index) => {
            if(index === action.payload) {
                return false
            } 
            return true
        }),
        return {
            ...store,
            TODOS: newToDos
        }
    }
};

class Store {
    constructor(reducer, initialState) {
        this.reducer = reducer; //reducerPtweb3
        this.state = initialState //   { TODOs: [] }
    }

    getState() {
        return this.state
    }

    dispatch(action) {
        this.state = this.reducer(this.state, action)
    }
}

const store = new Store(
    reducerPtweb3, 
    {
        TODOs: []
    }
);

store.dispatch({
    type: 'ADD_TODO_ITEM',
    payload: 'Learning redux'
});


const state = store.getState();

