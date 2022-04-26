export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const ADD = "ADD"
export const PRODUCT = "PRODUCT"
export const SUBTRACT = "SUBTRACT"
export const DIVIDE = "DIVIDE"


export const increment = (count) => ({
    type : INCREMENT,
    payload : count
}) 
export const decrement = (count) => ({
    type : DECREMENT,

    payload : count
}) 
export const add = (value) => ({
    type : ADD,
    payload : value.value
}) 
export const product = (value) => ({
    type : PRODUCT,
    payload : value.value
}) 
export const subtract= (value) => ({
    type : SUBTRACT,
    payload : value.value
}) 
export const divide = (value) => ({
    type : DIVIDE,
    payload : value.value
}) 