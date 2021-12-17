import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom"
import { MensCard } from "./MensCard";

export const MenProductDeatils = ()=> {
    const {id} = useParams()
    const [data, setdata] = React.useState([])
    const [isLoading,setIsLoading] = React.useState(false)
    const fetchData = ()=>{
        return axios.get("http://localhost:3000/mens/"+id)
    }
    const handleFetchData = async()=>{
        try{
            const {data} = await fetchData(id)
            console.log(data)
            setdata(data)
        }
        catch(err){
            console.log(err)
        }
        

    }
    useEffect(()=>{
        handleFetchData()
    },[])
    return(
        <div>
           <MensCard 
           brand={data.brand}
           name = {data.name}
           length = {data.length}
           price = {data.price}
           />
        </div>
    )
}