export const ProductCard = ({productName,price})=>{
    return(
        <div>
            <h1>{productName}</h1>
            <h3> Rs:{price}</h3>   
        </div>
    )
}