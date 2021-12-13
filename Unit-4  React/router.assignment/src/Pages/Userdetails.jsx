import axios from "axios"
import React from "react"
import {Link,useParams } from "react-router-dom"
import { useEffect } from "react"
import { Usercard } from "./UserCard"

  export const UserDetail = () => {
      const {id} = useParams()
      const [data,setData] = React.useState(null)
      const [isLoading, setIsLoading] = React.useState(true)
        const getData = (id)=> {
            return axios.get("https://reqres.in/api/users/" + id);
        }
        const handleGetData = async()=>{
            try{
                setIsLoading(true)
                const {data} = await getData(id)
                setData(data)

            }
            catch(err){
                console.log(err)
            }
            setIsLoading(false)
        }
        useEffect(() => {
           handleGetData()
        },[id])
    if(isLoading){
        return <div>...Loading</div>
    }
     return (
        <div style={{width:"300px",margin:"auto"}}>
            <Usercard id={id}
                firstName = {data?.data?.first_name}
                lastName = {data?.data?.last_name}
                profile = {data?.data?.avatar}
                email = {data?.data?.email}
            />
            <Link to={`/users/${Number(id)-1 }`}>Prev</Link>
            <Link to={`/users/${Number(id)+1}`}>Next</Link>
        </div>
     )
 }