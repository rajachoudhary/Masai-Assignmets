import React, {useEffect} from "react";
import axios from "axios"
import { Link } from "react-router-dom";
export const ProductPage = ()=> {
    const [data,setData] = React.useState(null)
    const [ isLoading,setIsLoading] = React.useState(true)

    const fetchData = ()=>{
        return axios.get("http://localhost:3000/product")
    }
    const handlefetchData = async()=>{
        try{
            setIsLoading(true)
            const getData = await fetchData()
            console.log(getData)
            setData(getData)
            setIsLoading(false)
        }
        catch(err){
            console.log(err)
        }

    }
    useEffect(() => {
        handlefetchData()
    }, [])

    if(isLoading){
        return <div>...isLoading</div>
    }
    return(
        <div>
            <h1>Choose Your Product</h1>
            {data?.data?.map((item)=>(
                <div key = {item.id}>
                    <h3>{item.name}</h3>
                    <Link to={`product/${item.id}`}>click here</Link>
                </div>
            ))}
        </div>
    )
}