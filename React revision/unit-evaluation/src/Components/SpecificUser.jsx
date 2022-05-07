import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export const SpecificUser = () => {
    const {id} = useParams()
    let idNum = Number(id)
    // console.log(typeOf idNum)
    // const dispatch = useDispatch()
    const employees = useSelector(state => state.employees)
    const [singleuser] = employees.filter((user)=>user.id === idNum)
    console.log(singleuser)
  return (

        <div >
        <div> 
            <img src={singleuser.image} alt="" />
        </div>
        <div> Name :{singleuser.name}</div>
        <div>Title : {singleuser.title}</div>
        <div>Sallery : {singleuser.sallery}</div>
        <div> Id : {singleuser.id}</div>
        <button>Fire</button>
    </div>
   
  )
}
