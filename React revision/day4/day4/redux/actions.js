
export const incrementCount = (data) => ({
    type: 'INCREMENT_COUNT',
    payload: data
});

export const decrementCount = (data) => ({
    type: 'DECREMENT_COUNT',
    payload: data
});

export const changeMode = (mode) => ({
    type: 'CHANGE_THEME',
    payload: mode
});