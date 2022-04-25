import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { context } from '../../Context/RegistrationContext'
import style from "../../css/regOne.module.css"


export const RegTwo = () => {
  const {userData,setUserData} = useContext(context)
  const {isFill,setIsFill} = useContext(context)
  const navigate = useNavigate()
  const handleChange = (e)=>{
      const  {name,value} = e.target
      setUserData({...userData,[name]:value})
  }
  // console.log()
  const handleSubmit = ()=>{
    navigate("/users")
      
  }

  useEffect(()=>{
    if( !userData.name || !userData.age || !userData.date){
      console.log("raja")
      navigate("/one")
    }
},[])
  return (
    <div className={style.regTwo}>
      <div>
        <label>State</label>
        <input type="text" placeholder='state' name="state" onChange={handleChange}/>
      </div>
      <div>
        <label>Address</label>
      <input type="text" placeholder='address' name="address" onChange={handleChange}/>
      </div>
      <div>
      <label>PinCode</label>
      <input type="number" placeholder='pincode'name="pinCode" onChange={handleChange}/>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
