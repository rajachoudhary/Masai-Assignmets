import { FETCH_DATA, PRIVATE_ROUTE } from "./action";


const initialState = {
    employees:[],
    privateUser:false
};

export const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                employees: action.payload
            };
        case PRIVATE_ROUTE:
            return {
                ...state,
                privateUser: action.payload
            };
        
        default:
            return state;
    }
};
