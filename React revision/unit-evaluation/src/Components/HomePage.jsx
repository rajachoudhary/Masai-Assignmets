import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getAllData } from '../Redux/action'

export const HomePage = () => {
    const dispatch = useDispatch()
    const employees = useSelector(state => state.employees)
    const terminated = employees.filter((item)=> item.status === "false")
    useEffect(()=>{
        dispatch(getAllData())
    },[])
  return (
    <div style={{fontSize:"20px",textAlign:"center",marginTop:"30px"}}>
        <div>No of Employees: {employees.length}</div>
        <div>No of Employees Terminated : {terminated.length}</div>
    </div>
  )
}
