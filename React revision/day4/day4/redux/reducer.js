const initialState = {
    themeMode: 'dark',
    count: 0,
};

export const reducer = (store = initialState, action) => {
    switch(action.type) {
        case "INCREMENT_COUNT":
            return {
                ...store,
                count: store.count + action.payload
            };
        case "DECREMENT_COUNT":
            return {
                ...store,
                count: store.count - action.payload
        }
        case "CHANGE_THEME": 
            return {
                ...store,
                themeMode: action.payload
            }
    }
}