import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Link, useNavigate } from 'react-router-dom'
import { getAllData } from '../Redux/action'
export const Employees = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const privateUser = useSelector(state=>state.privateUser)
    
    const employees = useSelector(state => state.employees)
    const noOfEmp = employees.filter((item)=> item.status === "true")
    const terminated = employees.filter((item)=> item.status === "false")

    // const terminated = employe
    console.log("employees",noOfEmp)
    useEffect(()=>{
        dispatch(getAllData())
        if(privateUser === false){
            navigate("/login")
        }
    },[])
  return (
    <div>
            <div>
                {
                   employees.map((item)=>{
                       return(
                           <div key={item.id}>
                               <div>
                                   <img src={item.image} alt="" />
                               </div>
                               <div>{item.name}</div>
                               <div>{item.title}</div>
                               <Link to={`/employee/${item.id}`}><button>Click for More</button></Link>
                           </div>
                       )
                   }) 
                }
            </div>
    </div>
  )
}
