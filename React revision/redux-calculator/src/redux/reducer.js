import {  ADD, DECREMENT, DIVIDE, INCREMENT, PRODUCT, SUBTRACT } from "./action";


const initialState = {
    count : 0,
    value : 5
}
export const reducer = (store = initialState,action) =>{

    switch (action.type) {

        case INCREMENT:
        return{
            ...store.count,
            count:store.count + action.payload
        };

        case DECREMENT:
        return{
            ...store.count,
            count:store.count - action.payload
        };
        case ADD:
        return{
            ...store.value,
            value:store.value + action.payload
        };
        case SUBTRACT:
        return{
            ...store.value,
            value:store.value - action.payload
        };
        case DIVIDE:
        return{
            ...store.value,
            value:store.value / action.payload
        };
        case PRODUCT:
        return{
            ...store.value,
            value:store.value * action.payload
        };

        default:
            return store;
    }
}