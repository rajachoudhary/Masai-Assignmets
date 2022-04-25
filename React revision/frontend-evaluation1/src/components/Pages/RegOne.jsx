import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { context } from '../../Context/RegistrationContext'
import style from "../../css/regOne.module.css"

export const RegOne = () => {
    const {userData,setUserData} = useContext(context)
    const [query,setQuery] = useState([])
    const navigate = useNavigate()
    const handleChange = (e)=>{
        const  {name,value} = e.target
        setUserData({...userData,[name]:value})
        setQuery({...query,[name]:value})
        
    }
    const handleSubmit = ()=>{
        if(!userData.name || !userData.age || !userData.date){
            alert("Please fill the form")
        } else {
            navigate("/two")
        }
        // console.log(userData.name)
        
    }
    useEffect(()=>{
        if( !userData.name || !userData.age || !userData.date){
            navigate("/one")
        }
    },[])
  return (
    <div className={style.regOne}>
        <div>
            <label>Name</label>
            <input type="text" placeholder='Name' name='name'  onChange={handleChange}/>
        </div>
        <div>
            <label>Age</label>
            <input type="number" placeholder='Age' name="age" onChange={handleChange}/>
        </div>
        <div>
            <label>Date Of Birth</label>
            <input type="date" placeholder='DateOFBirth' name="date" onChange={handleChange}/>
        </div>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
