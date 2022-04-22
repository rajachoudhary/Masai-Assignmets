import {
    store
} from './redux/store.js';

import {
    incrementCount, decrementCount, changeMode
} from './redux/actions.js';

console.log(store.getState());
store.dispatch(incrementCount(10));
store.dispatch(incrementCount(10));
store.dispatch(decrementCount(5));
store.dispatch(changeMode('light'));
console.log(store.getState());