import axios from "axios";
import React,{useEffect} from "react";
import { Link } from "react-router-dom";
export const Users = ()=>{
    const [data,setData] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(true)
    const fetchData = ()=>{
        return axios.get("https://reqres.in/api/users")
    }
    const handleFetchData = async ()=>{
        try{
            setIsLoading(true)
            const {data} = await fetchData()
            console.log(data)
            setData(data)
        }
        catch(err){
            console.log(err)
        } 
        setIsLoading(false)
    
    };
    useEffect(() => {
        handleFetchData()
    },[]);
    if(isLoading){
        return <div>....isLoading</div>
    }
    return(
        <>
        <div  >
             <h1>Users</h1>
            {data?.data?.map((item)=>(
                <div key={item.id}>
                <h3>{item.first_name + " " + item.last_name}</h3>
                <Link to={`users/${item.id}`} style={{textAlign:"center"}}>Show more info</Link>
                </div>
            ))}
        </div> 
        </>
    )
}