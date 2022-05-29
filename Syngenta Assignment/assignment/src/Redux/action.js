export const GET_COLOR = "GET_COLOR"
export const GET_CIRCLE = "GET_CIRCLE" 
export const RESTORE_CIRCLE = "RESTORE_CIRCLE"
export const REMOVE_CIRCLE = "REMOVE_CIRCLE"

export const getColor = (data) => ({
    type : GET_COLOR,
    payload : data
})

export const getCircle = (data)=>({
    type:"GET_CIRCLE",
    payload:data
})

export const restoreCircle = (data)=>({
    type:"RESTORE_CIRCLE",
    payload:data
})

export const removeCircle = (data)=>({
    type:"REMOVE_CIRCLE",
    payload:data
})
