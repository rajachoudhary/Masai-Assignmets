import React, { useContext, useEffect } from 'react'
import {  Link, useNavigate } from 'react-router-dom'
import { context } from '../Context/AuthContext'

export const Users = () => {
  const {isAuth,setIsAuth} = useContext(context)
  const [data,setData ] = React.useState([])
  const navigate = useNavigate()
  const getData = () => {
    fetch(`https://reqres.in/api/users?page=1`)
    .then(res => res.json())
    .then((res)=>{
      setData(res.data)
      // console.log(res)
    })
  }
  
  useEffect(()=>{
    if(!isAuth){
      navigate("/login")
    }
    getData()
  },[])
  return (
    <div>
      {
        data.map((users)=>{
          return(
            <div key={users.id}>
              <h2>{users.first_name}</h2>
              <div>
                <img src={users.avatar} alt="profile" />
              </div>
              <button><Link to={`/users/${users.id}`}>More Details</Link></button>
            </div>
          )
        })
      }
    </div>
  )
}
