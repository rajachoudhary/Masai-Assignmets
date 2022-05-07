import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllData } from '../Redux/action'

export const AdminPage = () => {
    const dispatch = useDispatch()
    const privateUser = useSelector(state=>state.privateUser)
    const navigate = useNavigate()
    const [query,setQuery] = useState({
        name:"",
        title:"",
        sallery:"",
        image:"",
        status:"true"
    }) 
    const handleChange = (e)=>{
        const  {name,value} = e.target
        setQuery({...query,[name]:value})
    }
    const handleAddress = ()=>{
        fetch("http://localhost:3000/employee",{
          method: "POST",
          headers:{
           "Content-Type": "application/json",
          },
          body:JSON.stringify(query),
        })
        .then(()=>{
          dispatch(getAllData())
        })
    }
    useEffect(()=>{
        if(privateUser === false){
            navigate("/login")
        }
    },[])
  return (
    <div>
        <div>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Name' name="name" onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="">Title</label>
            <input type="text" placeholder='Title' name="title" onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="">Profile Link</label>
            <input type="link" placeholder='Profile Url' name="image" onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="">Sallery</label>
            <input type="text" placeholder='Sallery' name="sallery" onChange={handleChange}/>
        </div>
        <button onClick={handleAddress}>SUBMIT</button>
    </div>
  )
}
