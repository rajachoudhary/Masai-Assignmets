import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const UserDetails = () => {
    const params = useParams()
    const [user, setUser] = useState([])
    // params = +params
    console.log(params)
    const getData = ()=>{
        fetch(`https://reqres.in/api/users/${params.id}`)
        .then(res => res.json())
        .then((res)=>{
            console.log(res)
            setUser(res.data)
        })
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div>
       
        <div key={user.id}>
            <div>{`${user.first_name} ${user.last_name}`}</div>
            <div>
                <img src={user.avatar} alt="" />
            </div>
            <div>{user.email}</div>
        </div>
          
    </div>
  )
}
