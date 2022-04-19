import React, { useEffect } from 'react'
import { Card } from './Card'

export const FetchApi = () => {
    const [data,setData] = React.useState([])

    const getData = ()=>{
        fetch(`https://fakestoreapi.com/products`)
        .then(res => res.json())
        .then((res)=>{
            console.log(res)
            setData(res)
        })
    }

    useEffect(()=>{
        getData()
    },[])

  return (
    <>
        {
            data.map((item)=><Card {...item} key={item.id}/> )
        }
    </>
  )
}
