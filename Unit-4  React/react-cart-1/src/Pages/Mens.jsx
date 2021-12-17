import React,{useEffect} from "react"
import axios from "axios"
import style from "../Css/Mens.module.css"
import { Link } from "react-router-dom"
export const Mens = ()=>{
    const [isLoading, setIsLoading] = React.useState(false)
    const [data,setData] = React.useState([])

    const fetchData = ()=>{
        return axios.get("http://localhost:3000/mens")
    }

    const handlefetch = async()=>{
        try{
            setIsLoading(true)
            const {data} = await fetchData()
            console.log(data)
            setData(data)
            setIsLoading(false)
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        handlefetch()
    }, [])

    if(isLoading){
        return <div>...Loading</div>
    }
    return(
        <div className={style.productContainer}>
            {data.map((item)=>(
                <div key={item.id}  className={style.productName}>
                    <h2>{item.name}</h2>
                    <Link to={`/mens/${item.id}`} >Click here for more Detail</Link>
                </div>
            ))}
        </div>
    )
}