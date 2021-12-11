import axios from "axios"
import React,{useEffect} from "react"
export const Users = ()=>{
    const [data,setData] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState()
    const fetchData = ()=>{
        return axios.get("https://reqres.in/api/users")
    }
    const handleFetchData = async ()=>{
        try{
            setIsLoading(true)
            const getData = await fetchData()
            console.log(getData)
            setData(getData)
        }
        catch(err){
            console.log("error")
        }
    
    }
    useEffect(() => {
        handleFetchData()
    }, [])

    return(
        <div>
            
        </div>
    )
}