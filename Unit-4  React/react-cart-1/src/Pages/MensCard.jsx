import style from "../Css/Card.module.css"
export const MensCard = ({brand,name,length,price})=>{
    return(
        <div className={style.card}>
            <h2>{brand}</h2>
            <h3>{name}</h3>
            <h3>{length}</h3>
            <h3> Rs: {price}</h3>

        </div>
    )
}