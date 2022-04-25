import React, { useContext } from 'react'
import { context } from '../../Context/RegistrationContext'
import style from "../../css/regOne.module.css"


export const Users = () => {
    const {userData} = useContext(context)
    // console.log(userData)
  return (
    <div>
       
        <div className={style.userData}>
            <div> Name : {userData.name}</div>
            <div> Age :  {userData.age}</div>
            <div> Date : {userData.date}</div>
            <div> State : {userData.state}</div>
            <div> Address : {userData.address}</div>
            <div>PinCode : {userData.pinCode}</div>
        </div>
         
    </div>
  )
}
