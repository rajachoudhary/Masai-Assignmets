export const FETCH_DATA = "FETCH_DATA"
export const PRIVATE_ROUTE = "PRIVATE_ROUTE"

export const fetchData = (data)=> ({
    type:FETCH_DATA,
    payload:data
})
export const privateRoute = (data)=>({
    type : PRIVATE_ROUTE,
    payload: data
})

export const getAllData = () =>{
    return (dispatch) => {
        fetch("http://localhost:3000/employee")
        .then((response) => response.json())
        .then((data) => dispatch(fetchData(data)));
    };
}